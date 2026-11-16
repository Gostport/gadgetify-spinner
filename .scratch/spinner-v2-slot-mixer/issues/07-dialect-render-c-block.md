# 07: Dialect Render: C-block

**What to build:** A composed canonical mix can be rendered into gadgetify's C-block dialect at the Dialect Render seam: Lock at C0 when present, blocks in canonical slot order, (master) on the highest-priority identity block, per-block negation lines where the dissection recorded failure modes, and a closing forbidden/assert block. Rendering is a pure translation — canonical form remains the only editable source.

**Blocked by:** 02

**Status:** built locally Nov 16, 2026 — C-block render live in Mix mode (fixed positions C0–C7, (master) on C1, Format as the eta HONEST RENDER tail). Snapshot-style seam tests verify every kept segment appears exactly once, in order, and demotion is honored. NOTE on negation lines: the dissection recorded failure modes inside Format fillers, not per block, so negation content renders in the closing tail — no per-block lines were invented to fill the pattern.

- [x] Snapshot tests: a fixed mix renders with every slot's content present exactly once, in order
- [x] A mix with a Lock renders it at C0; a mix without one starts at C1
- [x] Editing is impossible in the rendered view — copy only
