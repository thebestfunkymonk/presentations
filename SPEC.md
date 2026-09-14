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

| class     | effect                                              |
|-----------|-----------------------------------------------------|
| `title`   | centered, larger heading, for the first slide       |
| `center`  | vertically and horizontally center the content      |
| `dark`    | inverted colors for that slide only                 |

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
| `f`                           | toggle fullscreen |
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
