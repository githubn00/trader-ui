# Liquidation Price Lines Learnings

This feature adds two related behaviors:

- Preview liquidation lines for the currently selected symbol and lot size.
- Open-position liquidation marks that move as live position state changes.

## Source Of Truth

`index.html` is generated. The real source files for this work are:

- `terminal/Bte0Q9TL.js`
- `terminal/Ca-rt9XF.js`
- `terminal/D1Nozd42.js`

After changing those chunks, rebuild with:

```bash
node build.js
```

That regenerates the single-file `index.html`.

## Where The Feature Lives

### 1. Liquidation price calculation

The reusable liquidation calculation was added in `terminal/Bte0Q9TL.js`.

Key points:

- `pu.calcLiquidationPrice(...)` computes the liquidation level for either:
  - an existing open position, via `positionId`
  - a hypothetical buy/sell preview, via `symbol`, `isBuy`, `entryPrice`, and `volume`
- It rebuilds margin/equity state using copied positions, copied orders, the account snapshot, and the rates controller.
- It uses a binary search around the stop-out boundary instead of a closed-form shortcut.

Why this matters:

- The same path can power both preview lines and real position marks.
- Existing open positions are evaluated without double-counting a synthetic extra trade.

## UI wiring

The chart-settings submenu toggle was added in `terminal/D1Nozd42.js`.

Important detail:

- This file is compiled/minified Svelte output, so handler indexes matter.
- The safest patch pattern is to append new handlers at the end of the returned context array instead of shifting existing indexes.

The toggle is stored in the marks store as `showLiquidationLines`.

## Rendering layers

There are two render paths in `terminal/Ca-rt9XF.js`.

### Open-position liquidation marks

Position marks now draw a `LIQ` horizontal line when:

- `marksStore.showLiquidationLines` is enabled
- `calcLiquidationPrice(...)` returns a valid price for that position

This is rendered alongside the existing position, SL, and TP marks.

### Preview buy/sell liquidation lines

The trade-lines manager now owns two extra locked lines:

- `liquidation_buy`
- `liquidation_sell`

These are updated by `LiquidationPreviewController`, which subscribes to:

- `configStore` for selected symbol and lot size
- `marksStore` for the toggle state
- `ticksStore` for live bid/ask updates
- `positionsStore`
- `ordersStore`
- `accountStore`
- `symbolsStore`

Preview calculation rules:

- Buy preview uses current `ask` as entry.
- Sell preview uses current `bid` as entry.
- Both use `configStore.tradeVolume`.

## Build Gotchas

`build.js` patches some source files during the build step.

From the current repo flow:

- `terminal/CezRPkQL.js` may be patched in place for `fonts://` URLs.
- Restore or verify that build-only patch is not committed.

Useful check:

```bash
git diff --name-only
```

If `terminal/CezRPkQL.js` is only showing line-ending noise and not a real diff, it should not appear in `git diff --name-only`.

## Main Risks

- The liquidation calculator is the highest-risk part of the change.
- Variable shadowing is easy to introduce in these minified files and can silently break volume or margin calculations.
- In compiled Svelte output, moving one handler index can break unrelated menu toggles.

## Practical Debug Notes

If preview lines do not show:

- confirm the `Liquidation Price Lines` toggle is enabled
- confirm `tradeVolume > 0`
- confirm the active symbol has a live tick with valid `bid` and `ask`
- confirm the liquidation calculator returns a non-null value

If position liquidation lines do not update:

- confirm the position mark path is using the real `positionId`
- confirm live trade/account updates are still flowing through the existing trade stores

