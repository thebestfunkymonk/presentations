# quiz.html, a Kahoot-style game

One page, two roles. Open it plain and it's the **host** (projector). Open it
with `?room=CODE` and it's a **player** (phone). The host shows a QR code that
encodes the player URL.

```
quiz.html?deck=sleep            host, questions from quizzes/sleep.js
quiz.html?room=KXPT             player (this is what the QR code points to)
```

## Flow

Host: lobby (QR, room code, names appear as people join) → Start → question
with a countdown → auto-reveal when time is up or everyone has answered →
correct answer, answer counts, top 5 → Next → ... → podium.

Player: enter name → wait → 4 big buttons → "locked in" → correct/wrong,
points, current rank → final rank.

Scoring: 1000 points for an instant correct answer, sliding down to 500 at the
buzzer. Wrong or no answer is 0.

Host keys: Space, Enter, or the right arrow start or advance. Enter during a question ends it early.

## Writing questions

`quizzes/NAME.js` sets `window.QUIZ`:

```js
window.QUIZ = {
  title: "Deck title",
  questions: [
    { text: "Question?", choices: ["A", "B", "C", "D"], correct: 2,
      time: 20,                    // optional, seconds
      note: "Shown on reveal" },   // optional
  ],
};
```

Choices are shown in order with fixed colors and shapes (▲ ◆ ● ■).

## Getting it onto phones

The folder is hosted on GitHub Pages, so the host page is a real URL and the
QR code works. Open the host page on the laptop, put it on the projector, and
phones scan the code.

### How phones talk to the host

Three transports, picked automatically:

| when                                   | transport  | how it works |
|----------------------------------------|------------|--------------|
| served over http(s) (the hosted site)  | `peer`     | Phones connect straight to the host laptop's browser over WebRTC. The public PeerJS signaling server only brokers the introduction. No account, no backend. **Keep the host tab open**; it is the server. |
| `localhost` or `file://`               | `local`    | BroadcastChannel between tabs of the same browser. For trying it out. |
| `FIREBASE_CONFIG` set in `quiz.html`   | `firebase` | Everything goes through Firebase Realtime Database over plain HTTPS. The fallback if the school network blocks WebRTC. |

Force one with `?transport=peer|local|firebase` on the host URL; the QR code
carries it through to the phones.

### If peer mode fails at school

Some school networks block WebRTC or isolate devices from each other. The
symptom is phones stuck on "Connecting as NAME". Try having phones on cellular
instead of school Wi-Fi first. If that doesn't work, switch to Firebase (about
5 minutes, once):

1. https://console.firebase.google.com, Add project (turn Analytics off).
2. Build, Realtime Database, Create database, start in **test mode**.
3. Rules tab, paste this so only `/rooms` is open, and nothing else:
   ```json
   { "rules": { "rooms": { ".read": true, ".write": true } } }
   ```
4. Project settings, Your apps, Web app (</>), register, copy the
   `firebaseConfig` object.
5. In `quiz.html`, replace `const FIREBASE_CONFIG = null;` with
   `const FIREBASE_CONFIG = { ...pasted object... };` and push.

Open rules on `/rooms` mean anyone with the URL can write junk there. For a
class game that's fine. Room codes are random per game, and nothing else is
stored.

### Testing locally

```
python3 -m http.server 8000
```

then open http://localhost:8000/quiz.html?deck=sleep in one tab and the room
URL it shows in a couple of others. Add `&transport=peer` to test the real
transport locally.

## Message protocol (for extending it)

Everything is a broadcast on the room's bus. Host and players ignore what
isn't for them.

| from   | message                                                   |
|--------|-----------------------------------------------------------|
| player | `{t:'join', id, name}`                                    |
| player | `{t:'answer', id, q, choice}`                             |
| host   | `{t:'welcome', id}`                                       |
| host   | `{t:'question', n, total, text, choices, seconds}`        |
| host   | `{t:'reveal', n, correct, choices, results:{id:{rank,score,points,correct}}}` |
| host   | `{t:'end', results}`                                      |

The host also writes the current question to a `state` doc so a phone that
refreshes mid-question catches up. Swap the transport by replacing `makeBus`.
