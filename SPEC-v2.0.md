# Gadgetify Spinner v2.0 — Slot Mixer — Spec v1.0

**Status:** Ready for implementation planning (to-tickets). No code yet.
**Source:** Grill-with-docs session, Nov 16, 2026 — decisions Q1–Q23, all settled and confirmed by Kip. Terminology is governed by the project glossary in `CONTEXT.md`; this spec uses those terms exactly (Slot, Filler, Fight, Demotion, Recipe, Base, Lock, Canonical form, Dialect rendering, Specimen, Claims list).
**Changelog:** v1.0 (Nov 16, 2026) — initial spec synthesized from the confirmed grill. Product version is Spinner **v2.0** (a new interaction model = major bump, per Kip's incremental-versioning rule).

---

## Problem Statement

The Spinner (v1.5, live) treats each of its 174 specimens as an indivisible whole: spin or pick a specimen, bind a topic, get a prompt. But the way Kip actually works with gadgetify's material — and the way gadgetify himself now works — is *mixing*: a lettering style from one prompt, a character treatment from another, a format from a third. Kip proved this manually three times (a combined-types post to gadgetify on Nov 14, 2026; a Prism derivative of Op-Art Ribbons; an Op-Art × Kawaii × Wordmark run on ROBOT), and gadgetify's own Nov 2–16 posts state the same direction ("pools of style to mix and match," "a system to hybridize these styles," a Nov 15 mixture built on the Op-Art Ribbons engine).

Today, mixing is only possible by hand-editing prompt text in chat. That has four concrete costs:

1. **The specimens resist it.** All 174 prompt texts are single unstructured blobs in at least five dialects (Python-class, Figma tree, SQL CTEs, set-notation, prose). Nothing in the data says which part of a specimen sets its palette, which part sets its face, and which parts would fight another specimen's parts.
2. **Clashes are invisible until after a run.** Two styles that both claim the same property (surface, palette) silently overwrite each other in the composed prompt; the failure only shows up in the generated image, if it is noticed at all.
3. **Mixes are ephemeral.** A good mix exists as one chat run. There is no saved record of which parts came from which specimen, so it cannot be re-run, varied, shared, or posted as a recipe.
4. **Parameters don't always fit.** Kip's standing complaint about v1 (Nov 5, 2026): a specimen's parameters often don't fit the chosen topic, and nothing warns before composing.

## Solution

Spinner v2.0 adds a **Mix mode** beside the unchanged Spin mode. Specimens are dissected — by hand, in a pilot covering the curated specimens — into **Fillers**: property-setting fragments, one per **Slot**, each carrying provenance, a **Claims list**, and any subject requirements. In Mix mode the user picks a **Base** specimen and overrides its slots with fillers from other specimens, optionally under a single **Lock**. The mixer compares claims lists before composing: overlapping claims surface as a **Fight**, the user picks the winner, and the loser is **Demoted** — mechanically reduced to the text that serves its surviving claims. Compose emits the mix in **Canonical form** (labeled slot blocks), can render it into a gadgetify **Dialect**, and saves the mix as a **Recipe** — locally, as exportable JSON, and as a postable plain-text card. A "Spin a Mix" button generates random mixes through the same machinery.

The pilot proves the system on a small, clean corpus and three control mixes before any bulk extension.

## User Stories

1. As a mixer, I want to browse fillers organized by slot (one column per slot), so that I can see everything available for a property in one place.
2. As a mixer, I want each filler card to show its name, its source specimen, and a provenance badge (gadgetify-original vs. derivative), so that I always know whose material I'm using.
3. As a mixer, I want each filler card to show its claims as chips, so that I can predict what it will fight before I pick it.
4. As a mixer, I want to start a mix from any specimen as the Base, so that a mix feels like "this prompt, combined with other types" — the way I already work.
5. As a mixer, I want slots I don't override to inherit the Base's own setting, so that a mix with two picks is complete and runnable.
6. As a mixer, I want to pick at most one filler per slot, so that each property has exactly one owner unless a fight is declared.
7. As a mixer, I want the mixer to detect a Fight automatically when two picks' claims lists overlap, so that clashes are caught before composing, not after a wasted image run.
8. As a mixer, when a Fight fires, I want to choose the winner myself, so that the resolution is my creative call, not the software's.
9. As a mixer, when I pick a winner, I want the loser Demoted — reduced to the parts that don't claim the contested property — rather than deleted outright, so that the useful remainder of the losing style survives (e.g. a character kept for shape after losing surface).
10. As a mixer, I want the composed prompt in Canonical form — labeled slot blocks in a fixed order — so that I can read exactly what each slot contributed.
11. As a mixer, I want to copy the composed prompt ready to paste into an image model, so that running a mix is one paste, like v1.
12. As a mixer, I want to render a composed mix into a gadgetify dialect (pilot: the C-block dialect), so that I can post or run it in the shape gadgetify's audience and tools expect.
13. As a mixer, I want dialect rendering to be a translation of the canonical mix, never a separate edit, so that the canonical form stays the single source of truth.
14. As a mixer, I want to bind a subject/topic to a mix the same way v1 binds topics (typed or from the topic banks), so that mixing doesn't cost me v1's convenience.
15. As a mixer, I want fillers that can't fit my subject (e.g. a face filler for a subject with no face) to be soft-flagged with the reason, so that I can proceed anyway when I judge the flag wrong.
16. As a mixer, I want to apply at most one Lock to a mix, displayed above the slots, so that an identity-level constraint (e.g. an identity lock) binds the whole mix visibly and outranks every slot.
17. As a mixer, I want to save a mix as a Recipe, so that I can re-run the exact same mix later.
18. As a mixer, I want Recipes saved in my browser automatically, so that closing the tab doesn't lose a mix.
19. As a mixer, I want to export and import Recipes as JSON files, so that a Recipe is a file I own and can back up or send.
20. As a mixer, I want a plain-text Recipe card I can copy, so that I can post a mix to X the way I posted my Nov 14 combination — picks, sources, and subject in readable form.
21. As a mixer, I want to press "Spin a Mix" and get a random combination, so that I can discover mixes I would never have picked by hand.
22. As a mixer, I want Spin a Mix to re-roll any filler that would cause a Fight, leaving a flag only if it can't find a clean combination, so that random mixes come out runnable.
23. As a mixer, I want random mixes saved as Recipes just like hand-picked ones, so that a lucky roll isn't lost.
24. As a mixer, I want Spin mode (v1 behavior) to keep working exactly as before, so that v2.0 adds a mode instead of replacing a tool I use.
25. As a dissector, I want to record each filler as values plus their assignment rules, so that a palette filler carries *where its colors go*, not just the colors — values alone mix into random rainbow.
26. As a dissector, I want to record each filler's Claims list at dissection time, so that fight detection and demotion are mechanical, not re-judged per mix.
27. As a dissector, I want each filler's text stored as claim-tagged segments, so that demotion can remove exactly the text serving a lost claim and nothing else.
28. As a dissector, I want to record a filler's subject requirements at dissection time, so that subject-fit flags come from data, not from the mixer's guesses.
29. As a dissector, I want every filler to carry a weight field (defaulting to the winner-takes-all value), so that weighted blending can be added later (v2.1) without re-dissecting or migrating recipes.
30. As a reviewer (Kip), I want the dissection shape proven on 3 specimens and approved by me before the rest are dissected, so that a bad dissection shape doesn't poison the whole pilot corpus.
31. As a reviewer, I want the 3 checkpoint specimens to cover different dialects, so that the shape is tested against the corpus's real variety.
32. As a curator, I want Kip/Ibid derivatives (Op-Art Ribbons as collected, Chromatic Prism Ribbons) in the corpus as specimens with derivative provenance, so that tonight's best material is mixable but never masquerades as gadgetify's.
33. As a curator, I want newly pulled gadgetify posts dissected only when they bring a new slot or a new filler for an existing slot, so that the corpus grows by capability, not by bulk.
34. As a curator, I want parked slot candidates (lighting, medium, era, mood, motion/time, negative space) kept out of the pilot taxonomy, so that the pilot stays to slots with strong corpus evidence.
35. As a tester, I want the ROBOT mix re-created as a formal Recipe, so that tonight's hand mix becomes a regression case.
36. As a tester, I want Kip's Nov 14 Comedy Icons mix re-created as a Recipe, so that a real-world mix from before the tool existed is reproduced by the tool.
37. As a tester, I want one deliberately fighting mix in the acceptance set, so that flag-and-demote is proven, not just the friendly path.
38. As a poster, I want a Recipe card to credit every source specimen, so that sharing a mix credits gadgetify's material accurately.

## Implementation Decisions

**Terminology.** The glossary in `CONTEXT.md` is normative. Where this spec and any code or UI copy disagree with the glossary, the glossary wins.

**Slot taxonomy (pilot).** Eleven slots, in canonical column order: Character, Face, Costume, Pose, Lettering, Palette, Surface, Composition, Background, Presentation, Format. Above the slots sits the Lock layer: zero or one Lock per mix, highest priority, constraining all slots rather than setting a property. Slogan/copy content folds into Lettering; micro-icon accents fold into Presentation. Parked (not slots in v2.0): Lighting, Medium, Era, Mood, Motion/Time, Negative Space. Verify/assert content is not a slot; it rides with the Base/Format as in the source specimens.

**Filler record.** Each filler carries: an id; a display name; its primary slot; its source specimen id; provenance (`gadgetify` or `derivative`); its text as a list of segments, each segment tagged with the single property it serves (its primary slot or one of its secondary claims); a claims list (primary slot + every secondary property touched); optional subject requirements; and a weight (default 100, stored for v2.1 blending; compose in v2.0 does not blend). A filler's text is values plus assignment rules, never values alone.

**Recipe record.** A recipe carries: the Base specimen id; an optional Lock filler id; one pick per slot — a filler id, or `inherit` (the default) — with the pick's stored weight; the subject/topic binding; and every fight resolution (the contested property, the winner pick, the demoted pick). A recipe plus the filler corpus must be sufficient to reproduce the composed prompt exactly.

**Dissection (pilot corpus).** Dissection is by hand (Ibid dissects, Kip reviews), never automated parsing — the blobs span five dialects and automated splitting mis-cuts them. Checkpoint first: 3 specimens — Op-Art Ribbons (the base of gadgetify's own Nov 15 mixture), Semantic Wordmark Compiler (lettering exemplar, Python-class dialect), Personified Collage Poster (SQL dialect; its CTE structure maps closely onto slot blocks). Kip approves the dissection shape on those 3 before the remaining pilot specimens are dissected: the other curated specimens (16 total curated, plus Op-Art Ribbons and Chromatic Prism Ribbons as derivative-provenance specimens). The 158 bulk specimens are not dissected in the pilot.

**New-posts intake.** The Nov 2–16, 2026 pull (188 posts, 147 prompt-bearing, archived raw in the project files) is a pool, not a dissection queue. A pooled post is dissected only if it introduces a new slot candidate or a filler for an existing slot that the pilot corpus lacks.

**Mix Compose (primary seam).** Compose takes a Recipe plus the filler corpus and returns: the composed prompt in Canonical form; a fight report (every overlapping-claims pair, its contested property, and the resolution applied); requirement flags (picks whose requirements the bound subject doesn't meet — advisory, never blocking); and the Recipe card text. Behavior rules: one owner per property after resolutions; unresolved fights must be resolved by the user before compose produces a final prompt (compose may produce a draft showing the contested text marked); demotion removes exactly the segments tagged with the lost claim; uninherited slots take the Base's dissected fillers; the subject binding substitutes into filler text using the same binding machinery v1 uses for specimens.

**Canonical form.** Labeled blocks, one per slot, in the canonical column order, Lock block first when present. Block labels are the slot names. Canonical form is the default output and the only editable form.

**Dialect Render (secondary seam).** A pure translation from a composed canonical mix to a gadgetify dialect. The pilot ships exactly one dialect: the C-block dialect (C₀ Lock, C₁… blocks in slot order, `(master)` on the highest-priority identity block, per-block negation lines generated from each filler's recorded failure modes where the dissection captured them, and a closing forbidden/assert block). The seam is designed so further dialects (Python-class, Figma tree, SQL) can be added as translations without touching compose.

**Mixer interface.** Two modes in the existing single-page site: Spin (v1, unchanged) and Mix. Mix shows: a Lock bar across the top; a Base picker at the head of the columns; then one column per slot in canonical order (Character, Face, Costume, Pose, Lettering, Palette, Surface, Composition, Background, Presentation, Format); filler cards showing name, source specimen, provenance badge, claims chips, and a requirement indicator. A fight ribbon/panel appears when the current picks fight, naming the contested property and the two picks, and collecting the winner choice. Below: subject entry (typed or topic banks, as v1), Compose, the canonical output with copy button, dialect render with copy button, and Recipe actions (save, export, import, copy card). "Spin a Mix" picks a random Base and random fillers, re-rolling any pick that introduces a fight (bounded attempts; if still fighting, the mix is presented with the fight flagged, not hidden).

**Recipe storage.** Browser local storage is the working store. JSON export/import is the ownership layer. The plain-text Recipe card is the sharing layer. No backend, no accounts — the site remains a static GitHub Pages app, as v1.

**Versioning & regression boundary.** This ships as Spinner v2.0 (index, manifest, README changelog updated per the standing incremental-versioning rule). Spin mode behavior and the 174-specimen corpus data are a regression boundary: v2.0 must not change what v1 compose produces for any specimen.

**Decisions recorded as ADRs.** Two grill decisions meet the ADR bar (hard to reverse, surprising without context, real trade-off) and are recorded alongside this spec in `docs/adr/`: 0001 — a slot is a property, not a text chunk; 0002 — canonical form is the source of truth, dialects are renderings.

## Testing Decisions

**What good tests look like here.** Tests exercise external behavior at the seams, never internals: given a Recipe and a filler corpus, Mix Compose's outputs are the contract — the composed text, the fight report, the flags, the card. A test that reaches inside compose to check how it detected a fight is a bad test; a test that feeds two fillers with overlapping claims and checks the fight report names the contested property is a good one.

**Primary seam — Mix Compose.** Test coverage must include: base inheritance (unpicked slots render the Base's fillers); subject binding inside filler text; fight detection for primary-vs-secondary and secondary-vs-secondary claim overlaps; winner selection and demotion (the composed text loses exactly the segments tagged with the lost claim and keeps the demoted filler's other segments); Lock presence (Lock block renders first and is not treated as a slot pick); requirement flags firing and not firing; recipe round-trip (compose → save → load → compose produces identical output).

**Secondary seam — Dialect Render.** Snapshot-style tests: a fixed composed mix renders to C-block text containing every slot's content exactly once, with the Lock at C₀ and negation lines present where the dissection recorded failure modes. A rendering that drops or duplicates a slot's content fails.

**Filler corpus validation.** Mechanical validation over the whole pilot corpus: every filler has a valid slot, a provenance, a non-empty claims list whose entries are all taxonomy properties, segments that cover its text with exactly one property tag each, and a resolvable source specimen. This extends v1's prior art — v1's builds were verified by mechanically simulating compose over all 174 specimens — to the new data layer.

**Regression.** v1's compose simulation over all 174 specimens must produce byte-identical output before and after v2.0.

**Pilot acceptance (manual, per Q17).** Three control mixes, composed in the shipped Mix mode, run as images, and graded from the actual image files (never from the prompt or a success receipt), filler by filler: (1) the ROBOT recipe — Op-Art base, Kawaii face, Semantic Wordmark lettering; known reference outcome: all slots read, counter-icon assignment drift is the documented weakness to compare against; (2) the Comedy Icons recipe — Kip's Nov 14 mix re-created; (3) a deliberate-fight recipe — a surface-greedy filler against a foreign palette, where acceptance requires the fight to fire in the UI, the demotion to be visible in the composed prompt, and the resulting image to still read as its subject. The pilot passes when all three compose through the tool (no hand-editing of prompt text) and every non-demoted filler is visibly present in its image.

## Out of Scope

- **Weighted blending UI** (sliders/percentages, his 45/25/15 style). Weights are stored in v2.0 data from day one; blending is v2.1.
- **Bulk dissection** of the 158 adapter-bound specimens. Pilot corpus only; bulk extension follows a passed pilot.
- **Hand-authored fillers.** Every v2.0 filler is dissected from a real specimen.
- **Automated dissection / parsing** of specimen blobs.
- **Additional dialect renderings** beyond C-block (Python-class, Figma tree, SQL are future translations at the same seam).
- **Parked slots**: Lighting, Medium, Era, Mood, Motion/Time, Negative Space as first-class slots.
- **In-app image generation.** Compose produces prompts and recipe cards; running them stays in the user's image tools, as in v1.
- **Backend, accounts, cloud recipe sync.** Local storage + files only.
- **Contacting gadgetify.** A human decision for Kip, deliberately scheduled after the pilot (see Further Notes) — not a feature of this build.

## Further Notes

**Evidence base.** This spec rests on three project artifacts from Nov 16, 2026: the Spinner data audit (174 specimens are unstructured blobs in five dialects; manifest is metadata only; the only existing slot machinery is input-side topic banks); the fresh X pull (188 posts, Nov 2–16, 147 prompt-bearing, zero overlap with the Sep–Oct CSV, archived raw with a full report); and the three hand mixes run in chat on Nov 16 (Prism derivative, ROBOT mix, and the grading notes on both). Gadgetify's own words in the pulled window confirm the direction: Nov 2, "pools, so you can have arrays of styles to mix and hybrid"; Nov 4, "pools of style to mix and match"; Nov 5, "working on a system to hybridize these styles"; Nov 15, a mixture post whose prompt body is the Op-Art Ribbons engine.

**His C-block grammar vs. this taxonomy.** His current dialect maps closely: C₀ ≈ Lock, C₁ ≈ Face/Character (marked master), C₂ ≈ Costume, C₃ ≈ Pose, C₅ ≈ Presentation. One deliberate divergence: his C₄ merges palette and material into a single block; this spec keeps Palette and Surface as separate slots, because merging them would make cross-theme mixes (his colors, another specimen's material) impossible — and that impossibility is precisely what the mixer exists to remove.

**Provenance is a feature, not a courtesy.** Every filler and recipe names its sources; derivatives are labeled as derivatives everywhere they appear, including Recipe cards. If this tool is ever shown to gadgetify, it should read as credited fan work built from fascination — because that is what it is. Per Kip's Nov 16 instruction, he is to be reminded to message gadgetify when the pilot passes acceptance, and the message drafted with him then; it is intentionally not part of this build.

**Sequencing.** Next step after this spec is to-tickets, then implementation. The dissection checkpoint (User Stories 30–31) is the first ticket's gate: no mixer code depends on the full pilot corpus, but no bulk dissection starts before Kip approves the 3-specimen dissection shape.
