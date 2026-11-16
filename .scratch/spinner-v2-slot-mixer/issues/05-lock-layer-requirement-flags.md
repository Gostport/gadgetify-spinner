# 05: Lock layer + subject-requirement flags

**What to build:** The Lock bar becomes functional: at most one Lock per mix, rendered first in canonical form and treated as a constraint over all slots, not as a slot pick. Picks whose recorded subject requirements are not met by the bound subject are soft-flagged in the UI with the reason — advisory only, never blocking compose.

**Blocked by:** 03

**Status:** built locally Nov 16, 2026 — Lock bar live in Mix mode (one real Lock dissected from the Nov pull: Hyperreal Meme Legend's C0 Identity Lock, per Q10's new-filler rule; specimen #177 added). Requirement flags render as an advisory panel; flags are computed from active fillers' requires[] and never block compose. Seam tests cover lock-first rendering, both flag directions, and lock-never-fights.

- [x] A mix with a Lock renders the Lock block first in canonical output
- [x] A face filler bound to a faceless subject is flagged with its requirement text, and compose still succeeds
- [x] A pick whose requirements are met shows no flag (both directions covered by seam tests)
