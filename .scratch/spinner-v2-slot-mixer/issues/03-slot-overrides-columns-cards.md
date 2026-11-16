# 03: Slot overrides: columns and filler cards

**What to build:** One column per slot in canonical order, with a Lock bar above (display only until Ticket 05). Each column lists the fillers for that slot as cards showing name, source specimen, provenance badge, claims chips, and a requirement indicator. Picking a filler overrides that slot in the composed output; unpicked slots keep inheriting the Base.

**Blocked by:** 02

**Status:** built locally Nov 16, 2026 — columns + cards live in Mix mode; seam tests extended (override swaps exactly one slot; override replaces, never merges; ROBOT shape reproduced in tests).

- [x] A hand mix equivalent to the Nov 16 ROBOT mix (Op-Art Base + Kawaii-style face + Wordmark lettering, using pilot fillers) can be assembled in the UI with no prompt hand-editing
- [x] Composed output changes exactly in the overridden slots and nowhere else
- [x] Every card in every column shows name, source, provenance, and claims
