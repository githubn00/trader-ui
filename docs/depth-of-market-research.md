# Depth of Market (DOM) — Research Findings

## Summary

The Depth of Market window is **fully implemented** in the frontend. It shows "We don't have volume data for this symbol" because the XM demo server does not respond to book subscription requests (WS command 22). No frontend fix can solve this — it is a server-side restriction.

---

## How DOM Works (Full Data Flow)

### 1. Subscription trigger
When the DOM window opens and a symbol is selected, `C3TG5Sy0.js` (`Gt` logic function) runs:
```javascript
const e = M.getBySymbol(symbolName);  // symbolsController.getBySymbol()
B.sign(e?.id);                         // booksController.sign(numericSymbolId)
```
`e.id` = numeric symbol ID (from `Bte0Q9TL.js:3659` — `this.id = t.symbol_id`).

### 2. Book subscription path
`booksController.sign(id)` → `Ca-rt9XF.js:Fr.sign()` → `socket.books.signBooks(id)`:
- `socket.books` = `Ru` (view) inside `Vu` (`Bte0Q9TL.js:16208,16112`)
- `Ru.signBooks(id)` → `Ou.signBooks(id)` (`Bte0Q9TL.js:12821`)
- `Ou.signBooks(id)` → `Fu.subscribe([id])` → **WS command 22** (`Bte0Q9TL.js:12897`)

### 3. Expected server response (event 23)
- Server should respond with WS event 23 (raw binary book depth data)
- `Fu.on()` registers handler on event 23 (`Bte0Q9TL.js:12902`)
- Handler parses binary data into book entries

### 4. Data processing and re-dispatch
- `Ou`'s internal callback (`ro` at `Bte0Q9TL.js:12803`) receives parsed event 23 data
- Calls `updateDiffs()` to merge into internal `Iu` book store
- Calls `socket.trigger(8, formattedBooks)` — dispatches a **synthetic** event 8 on the inner app socket

### 5. Frontend receives books
- `Fr.init()` in `Ca-rt9XF.js:546` registers `socket.on(8, bookHandler)`
- `bookHandler` = `(data) => this.booksStore.setBook(data)` → populates `Ur` booksStore
- DOM component subscribes to `booksStore.getBook(symbol)` → `Vr.books` array
- When `books.length > 0`, DOM renders book rows; otherwise shows empty state

---

## Why DOM is Empty for XM Demo

**Root cause**: The XM demo server does not respond to WS command 22 (book depth subscription). Event 23 never fires. `books[]` stays empty. Empty state shows.

This is a deliberate broker restriction: DOM/Level 2 market depth requires real market access (exchange connectivity) that demo accounts don't have for CFD/FX instruments.

---

## Key Files

| File | Role |
|------|------|
| `terminal/C3TG5Sy0.js` | DOM Svelte component — renders the DOM window, calls `booksController.sign()` |
| `terminal/Ca-rt9XF.js` | `Fr` (books controller) — listens on synthetic event 8, populates `booksStore` |
| `terminal/Bte0Q9TL.js` | `Vu`/`Ou`/`Fu` — sends WS command 22, listens event 23, re-dispatches as event 8 |
| `terminal/Bte0Q9TL.js` | `Ru` — `books` view, exposes `signBooks()` / `setSpreadSize()` |
| `terminal/CezRPkQL.js` | Wires `booksController`, `booksStore`, `bookUtils` into DOM component props |
| `terminal/CBg_RnCD.js:633` | Language string: `empty: "We don't have volume data for this symbol"` |

---

## Dead Code: `hasBook()`

`hasBook()` at `Bte0Q9TL.js:3164` checks `permissions_flags` bit 1 on symbol trade data. It is **defined but never called** anywhere in the codebase. It was likely intended to gate DOM visibility but was never wired up.

```javascript
hasBook() {
  const { trade: t } = this;
  return !t || void 0 === t.permissions_flags || !!(1 & t.permissions_flags);
}
```

### `permissions_bookdepth`
Parsed from server symbol data at `Bte0Q9TL.js:2097` (index [37] in the symbol trade array). Set on the symbol model at `Bte0Q9TL.js:3399`. Never read anywhere in the DOM component.

### `ticks_bookdepth` / `ticksBookDepth`
Symbol property from `Bte0Q9TL.js:2950`. Set in the "full symbol" block at `Bte0Q9TL.js:3675`. Used inside the DOM component only to **slice** the visible rows (limit display depth) — not to gate the subscription.

---

## Protocol Reference

| Direction | WS Command/Event | Purpose |
|-----------|------------------|---------|
| Client → Server | Command 22 | Subscribe to book depth for symbol IDs |
| Server → Client | Event 23 | Book depth update (raw binary) |
| Internal (synthetic) | Event 8 | Re-dispatched formatted book data (inner socket) |

Note: Command 7 / Event 8 (raw WS) is used for **tick subscriptions**, not books.

---

## Potential Improvements

1. **Use `hasBook()` / `permissions_bookdepth`** to show a different message ("DOM not available for this symbol/account") instead of the generic "no volume data" text — if server sends `permissions_bookdepth = 0` for demo symbols.

2. **Gate DOM visibility** — hide the DOM window entirely when `hasBook()` returns false, rather than showing an empty window.

3. **Real fix requires broker support** — XM would need to enable market depth data on their demo server, or on specific account types / symbols.
