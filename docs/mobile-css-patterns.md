# Mobile CSS Patterns & Fixes

All mobile overrides live in the single `@media (max-width: 600px)` block near the bottom of `terminal/CpQrds23.css` (~line 6054).

---

## Popup / floating-window layout (`svelte-mhpk3v`)

The popup system uses three layers:

| Class | Element | Mobile override |
|---|---|---|
| `.popup.svelte-mhpk3v` | full-screen overlay | `overflow-y: auto; align-items: flex-start; padding: var(--indent2) 0` |
| `.window.svelte-mhpk3v` | the dialog box | `max-height: calc(100dvh - var(--indent2) * 2); overflow-y: auto; position: relative` |
| `.content.svelte-mhpk3v` | JS-sized inner content div | **`height: auto !important`** removes the desktop pixel height injected by JS |

The JS sets `height` as an inline style on `.content.svelte-mhpk3v` based on desktop dimensions. Without the `height: auto !important` override, that value constrains every child on mobile even though the window itself is already capped by `max-height`.

---

## Indicator picker (`svelte-ppeli`) — clipping fix

### DOM structure (mobile, vertical stack)

```
.window.svelte-mhpk3v          ← max-height: 100dvh − indent2×2
  .header.svelte-mhpk3v        ← close button (~40 px)
  .body.svelte-mhpk3v          ← height: calc(100% − closeBtnPx) from JS
    .content.svelte-mhpk3v     ← height: auto (CSS override)
      .header.svelte-ppeli     ← tab bar + search input (~88 px combined)
      .content.svelte-ppeli    ← indicator list + edit panel  ← HEIGHT KEY
      [Add indicator button]   ← sibling, outside .content.svelte-ppeli
```

### The clipping problem

`.content.svelte-ppeli` uses `height: calc(100dvh - var(--indent) * N)`. When N is too small, the sum:

```
~88 px (header-ppeli) + content-ppeli height + ~50 px (Add button)
```

exceeds the window's `max-height`, pushing the Add button off-screen (only its top border is visible).

### Rule of thumb

`N = 24` keeps the Add button fully visible across common mobile heights:

| dvh  | content-ppeli (N=24, indent=8px) | total  | window max |
|------|----------------------------------|--------|------------|
| 568  | 376 px                           | 514 px | 536 px ✓  |
| 812  | 620 px                           | 758 px | 780 px ✓  |
| 926  | 750 px                           | 888 px | 894 px ✓  |

`N = 18` (the old value) left only 144 px of room for header + button combined, which was ~26 px short on a typical 812 px device.

### Current CSS

```css
/* CpQrds23.css — inside @media (max-width: 600px) */

.content.svelte-mhpk3v.svelte-mhpk3v {
  width: 100% !important;
  max-width: 100% !important;
  height: auto !important;   /* removes JS-injected desktop height */
  overflow-x: hidden;
}

.content.svelte-ppeli.svelte-ppeli {
  flex-direction: column;
  width: 100% !important;
  height: calc(100dvh - var(--indent) * 24) !important;
  overflow: hidden;
}

.edit.svelte-ppeli.svelte-ppeli {
  width: 100% !important;
  border-left: none;
  border-top: 1px solid var(--color-border);
  min-height: calc(var(--indent) * 20);
  max-height: 45%;
  overflow-y: auto;
}
```

If the Add button is clipped again in the future, **increase the multiplier** (e.g. 24 → 28). If the indicator list becomes too short to be usable, decrease it.

---

## Key files

| File | Role |
|---|---|
| `terminal/CpQrds23.css` | All styles; mobile block at ~line 6054 |
| `terminal/C8gngcK2.js` | Popup/window component (`svelte-mhpk3v`) — injects `width`/`height` inline styles |
| `terminal/C2M0l3R7.js` | Indicator picker component (`svelte-ppeli`) |
