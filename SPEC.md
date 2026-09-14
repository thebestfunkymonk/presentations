# presentation.html spec

A weekly class presentation is one self-contained HTML file. No build step, no
dependencies, no network. Open it in a browser, press F11, present.

## Goals

- Writing a deck should feel like writing a document: add a `<section>`, put
  content in it, done.
- Zero tooling. Copy `presentation.html`, rename it, edit the slides.
- Anything HTML can do, a slide can do (embedded video, live demos, iframes,
  canvas, forms, whatever). That is the whole point of not using Keynote.

## File layout

```
presentations/
  SPEC.md              this file
  presentation.html    the template. Copy it for each week.
  2026-09-10-topic.html
  2026-09-17-topic.html
```

One file per talk. Assets (images) sit next to the file or inline as data URIs.

## Document structure

```html
<main class="deck">
  <section class="slide">...</section>
  <section class="slide">...</section>
</main>
```

- `main.deck` is the container. It fills the viewport.
- Every direct-child `section.slide` is one slide, in document order.
- Exactly one slide has the `active` class at a time. Only it is visible.
- The template's JS assigns `active`; the author never touches it.

Slide modifiers (optional classes on `section.slide`):

| class     | effect                                                                 |
|-----------|------------------------------------------------------------------------|
| `cover`   | full-bleed photo with the headline in a boxed panel. Put an `img`, a `div.cover-box` (h1 + p), and a `span.credit` inside. |
| `figure`  | text on the left, photo on the right. Wrap the words in `div.text`, then add a `figure` with `img` and `figcaption`. |
| `center`  | vertically and horizontally center the content                         |
| `dark`    | accent-colored background for that slide only, used for the closer     |

Photos render in black and white. Other helpers: `div.eyebrow` for a small label
chip above a heading, `p.big` for the one number a slide is about, `div.panel`
for a bordered box, `div.src` for a source line pinned to the bottom.

Inside a slide, plain HTML. `h1`/`h2` for headings, `p`, `ul`, `img`, `pre`,
`blockquote`, `table` are all styled. Two-column layout: wrap in
`<div class="cols">` with two children.

## Navigation

| input                         | action          |
|-------------------------------|-----------------|
| → ↓ Space PageDown Enter      | next slide      |
| ← ↑ PageUp Backspace          | previous slide  |
| Home / End                    | first / last    |
| click right 2/3 of screen     | next            |
| click left 1/3 of screen      | previous        |
| swipe left / right            | next / previous |
| `f` or the Fullscreen button  | toggle fullscreen |
| `?`                           | toggle help overlay |
| `Esc`                         | close help / exit fullscreen |

Clicks on links, buttons, inputs, videos, or anything with `data-no-nav` do
not advance the slide, so interactive content works.

## State

- Current slide index is stored in the URL hash: `#3` means the third slide
  (1-based). Reloading or sharing the URL lands on that slide.
- Slides are 1-based to humans, 0-based in code.
- A footer shows `current / total`.
- A thin progress bar across the bottom shows position in the deck.

## Fragments (optional, incremental reveal)

Any element inside a slide with class `fragment` starts hidden. "Next"
reveals fragments one at a time before moving to the next slide. "Previous"
hides them in reverse before going back. The hash does not track fragment
state.

## Printing

`Ctrl/Cmd+P` prints every slide, one per page, in order, via `@media print`.
Fragments are shown. Navigation chrome is hidden.

## Non-goals (for now)

- Transitions and animations beyond a simple fade
- Speaker notes / presenter view
- Themes beyond a handful of CSS variables at the top of the file
- Any framework

## Extension points

Everything is in one file, so extending is just editing:

- Colors, fonts, sizes: CSS custom properties in `:root`.
- New slide types: add a class and a CSS rule.
- New behavior: the JS is ~100 lines with a small `Deck` object
  (`go(n)`, `next()`, `prev()`, `current`, `count`). Hook `deck:change`
  events on `document` to react to slide changes (e.g. start a video when
  its slide appears).
