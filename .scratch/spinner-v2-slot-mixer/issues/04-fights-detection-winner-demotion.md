# 04: Fights: detection, winner, demotion

**What to build:** When the current picks' claims lists overlap, the mixer flags a Fight: it names the contested property and the two picks, the user picks the winner, and the loser is demoted — the composed prompt loses exactly the segments tagged with the lost claim and keeps the loser's other segments. Compose output includes a fight report. A mix with an unresolved fight composes only as a marked draft, never as a final prompt.

**Blocked by:** 03

**Status:** built locally Nov 16, 2026 — detection + winner + demotion live in Mix mode; seam tests cover detection, draft marking, and segment-level demotion. Design rule recorded in code: fights fire only between fillers from DIFFERENT sources (a specimen's own fillers were authored to coexist).

- [x] Two fillers with overlapping claims produce a fight naming the correct contested property
- [x] Choosing a winner demotes the loser: composed text loses only the lost-claim segments (covered by seam tests)
- [x] A fight resolution is recorded in the mix's data, sufficient to reproduce the composed output exactly
