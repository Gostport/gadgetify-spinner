# Dissection Checkpoint 1 — Spinner v2.0, Ticket 01

**What this is:** the first 3 prompts cut into labeled parts ("fillers"), so you can check the *shape* of the cutting before the other 14 pilot prompts get cut the same way. Data file: `fillers.json` (18 fillers). Validation: **clean** — every filler has a valid slot, claims inside the 11-slot list, a source that exists, and every text piece tagged with exactly the property it serves.

**One corpus note:** Op-Art Ribbons wasn't in the Spinner yet, so it was added as specimen #175 (from Gdgtify's Nov 15 post, via your paste). Its fillers now point at a real source.

## Who covers which slots

```
SLOT          Op-Art   Wordmark   Personified
Character       ●         —           ●
Face            ●         —           ●
Costume         —         —           ● (inside Character filler)
Pose            —         —           ● (inside Character filler)
Lettering       —         ●           ●
Palette         ●         ●           ●
Surface         ●         —           ●
Composition     ●         ●           ●
Background      ●         —           ●
Presentation    —         —           ●
Format          ●         —           ●
Lock            —         —           —   (none of the 3 has one — locks come from his C-block posts later)
```

Empty cells are honest: Op-Art has no lettering, Wordmark has no character. As a Base, a prompt simply has nothing in those slots.

## The fillers

### Op-Art Ribbons → 7 fillers
| Filler | Slot | Also claims |
|---|---|---|
| Ribbon-emergent subject | Character | — |
| Ribbon feature sculpting | Face | Character |
| Pure black / pure white | Palette | — |
| Continuous ribbon field | Surface | Composition |
| Subject-class composition | Composition | — |
| Field-integrated background | Background | Surface |
| Op-art asserts & rejects | Format | — |

### Semantic Wordmark Compiler → 3 fillers
| Filler | Slot | Also claims | Needs |
|---|---|---|---|
| Illustrated wordmark compiler | Lettering | — | a word/phrase as hero text |
| Topic-inferred limited palette | Palette | — | — |
| Lockup layout inference | Composition | — | — |

Only 3 — this prompt is *mostly* a lettering machine. Its mood handling is parked (mood isn't a slot in v2.0).

### Personified Collage Poster → 8 fillers
| Filler | Slot | Also claims | Needs |
|---|---|---|---|
| Personified mascot embodiment | Character | Pose, Costume | a topic that can be embodied as a mascot |
| Friendly circular-eye face | Face | — | a visible front-facing head |
| Carnival block title | Lettering | — | — |
| Semantic saturated palette | Palette | Background | — |
| Paper-cut collage surface | Surface | — | — |
| Triangular poster hierarchy | Composition | Background | — |
| Silhouette footer strip | Presentation | — | — |
| Portrait poster + reject list | Format | — | — |

## Shape decisions baked into this cut — these are what you're approving

1. **Pieces, not copies.** Each filler's text is a tight restatement of the source's rule for that one property — values *and* the rule that produces them (e.g. Wordmark's palette is "limited palette inferred from the topic," because the original never names colors). Nothing is a raw blob copy.
2. **One piece, one tag.** Every text piece inside a filler is tagged with the single property it serves. That's what makes demotion mechanical later: lose a fight over Palette, the machine removes exactly the Palette-tagged pieces.
3. **Claims include the side-effects.** A filler claims its own slot *plus* every other property its pieces touch (Op-Art's ribbon field claims Composition because its depth engine is spatial). Overlapping claims between two picks = a fight. That's the detector working as designed.
4. **Some fillers carry other slots inside them.** Personified's mascot filler holds its Pose and Costume pieces, because the original writes them as one breath. They are tagged separately inside, so a mix can still demote just the Costume piece.
5. **Thin fillers stay thin.** Wordmark's palette is one sentence. It isn't padded to look like Op-Art's — the size difference is real information about the prompts.
6. **Needs are written down.** Two fillers declare what the subject must provide (hero text; a personifiable topic). Those become the soft warning flags in the mixer — warnings, never blocks.

**Approval means:** the other 14 pilot specimens (Ticket 09) get cut in exactly this shape, and Tickets 02–08 build against this data format.
