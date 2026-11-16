# 06: Recipes: save, export/import, text card

**What to build:** A mix can be saved as a Recipe (Base, Lock, picks with weights, subject, fight resolutions), persisted in browser local storage, exported and imported as JSON, and copied as a plain-text Recipe card that credits every source specimen — the postable form. Loading a Recipe reproduces the exact composed output.

**Blocked by:** 04, 05

**Status:** built locally Nov 16, 2026 — recipes save to browser storage, export/import as JSON, and copy as a plain-text card crediting every source. Seam tests prove the round-trip is byte-identical (fight resolutions and Lock included) and that imports drop unknown ids instead of crashing.

- [x] Save → reload page → load reproduces byte-identical composed output
- [x] Exported JSON imports into a fresh browser state and reproduces the same output
- [x] Recipe card text names every pick, its source specimen, the subject, and any fight resolutions
