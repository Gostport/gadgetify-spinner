# Gadgetify Spinner — Glossary

Terms resolved in the Spinner v2 (slot mixer) grill-with-docs, Nov 16, 2026.

## Mixing

**Slot**:
A named visual property of a composed prompt — palette, surface, face, lettering, composition — that exactly one filler sets. A slot is a property, not a chunk of prompt text: one specimen's palette can live in several of its sections.
_Avoid_: section, chunk, phrase, component

**Filler**:
A property-setting fragment dissected from a gadgetify specimen, carrying provenance back to that specimen. A filler is a property's values *plus* their assignment rules — e.g. a palette filler carries not just its colors but where the colors go. In v1 every filler is dissected from a real specimen; none are hand-authored.
_Avoid_: snippet, preset, style

**Claims list**:
The list recorded at dissection time of every property a filler touches: its primary slot plus all secondary properties it sets. The claims list is both the fight detector (two picks fight when their claims lists overlap) and the demotion map (demoting a filler means removing the text that serves its lost claim).
_Avoid_: tags, metadata, flags

**Fight**:
What happens when two selected fillers claim the same property. A fight is flagged, never silently resolved: the user picks the winner.
_Avoid_: conflict (in prose; "fight" is the project's word), clash, overlap

**Demotion**:
Reducing the losing filler in a fight to only the parts that do not claim the contested property — e.g. a character filler kept for its shape after losing surface to the format filler.
_Avoid_: stripping, downgrading, fallback

**Recipe**:
The saved record of one mix: the slot-by-slot filler picks with their source specimens, sufficient to re-run, share, or post the exact same mix again.
_Avoid_: preset, configuration, build

**Lock**:
A single top-priority constraint on a whole mix — in gadgetify's new dialect, the `C₀ IDENTITY LOCK` block — that binds every slot under it rather than setting one property itself. A mix has zero or one lock. It is not a filler and does not occupy a slot column.
_Avoid_: master slot, global filler, override

**Base**:
The full specimen a mix starts from. Fillers override the base slot by slot; any slot no filler claims inherits the base's own setting for it.
_Avoid_: template, chassis, foundation

**Canonical form**:
The mixer's internal and default output shape: a composed mix rendered as labeled slot blocks, one block per property, regardless of the dialects its parts came from.
_Avoid_: normalized output (in prose), standard format

**Dialect rendering**:
Translating a composed mix from canonical form into a gadgetify dialect — Python-class, C-block, Figma tree, SQL — for posting or for running in tools that expect that shape. Canonical form is the source of truth; a dialect rendering is a translation of it.
_Avoid_: export format, conversion

## Corpus

**Specimen**:
One gadgetify prompt as collected — a single unstructured text, in whatever dialect gadgetify wrote it (Python-class, Figma tree, SQL, prose). The Spinner v1 corpus is 174 specimens.
_Avoid_: engine (v1 manifest word; "specimen" is canonical in v2 prose), template, prompt
