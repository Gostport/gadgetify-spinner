# 02: Mix mode skeleton: Base + inherited compose

**What to build:** Add the Spin | Mix mode switch to the Spinner site. In Mix mode the user picks a Base specimen, binds a subject (typed or from the topic banks, as v1), and composes: every slot inherited from the Base, output as a canonical labeled-block prompt with a copy button. This stands up the Mix Compose seam end-to-end with tests, before any overrides exist.

**Blocked by:** 01 — the checkpoint fillers are the data this composes from

**Status:** built locally Nov 16, 2026 — seam tests pass (tests/mix-core.test.mjs); Spin regression evidence: diff vs v1.5 backup touches only 3 original lines (state, load fetch list), compose()/spin() logic untouched. Live push deferred to Ticket 10 (ships as v2.0).

- [x] Picking a Base and composing produces a canonical prompt whose blocks carry the Base's dissected fillers in canonical slot order
- [x] Subject binding substitutes into filler text with the same binding behaviour v1 uses for specimens
- [ ] Spin mode output is byte-identical to v1.5 for every specimen (regression simulation over all 174)
- [x] Mix Compose behaviour is covered by tests at the seam: inheritance and subject binding at minimum
