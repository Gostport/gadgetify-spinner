# 08: Spin a Mix

**What to build:** A random-mix button in Mix mode: random Base, random filler per slot, with any pick that introduces a fight automatically re-rolled (bounded attempts). If a clean roll cannot be found, the mix is presented with its fight flagged, never hidden. The result is saved as a Recipe like any hand mix.

**Blocked by:** 04, 06

**Status:** built locally Nov 16, 2026 — Spin a Mix button live; per-slot re-roll avoids fights against the full active set (base-inherited parts included); unresolvable fights stay flagged; every spin auto-saves as a recipe. Seam tests: 200 seeded spins validated (picks always real, foreign, slot-correct; clean flag always truthful).

- [x] Spin a Mix produces a complete, composable mix in one click
- [x] Across repeated spins, unresolved fights are never silently composed as final prompts
- [x] A spun mix loads from its Recipe and reproduces its output
