A = {
  archival historical artifact exhibition,
  giant physical objects,
  tactile wood / stone / metal materials,
  fine engineering and construction details,
  miniature people for dramatic scale,
  restrained museum typography,
  aged ivory paper
}

B = {
  expressive retro cartoon illustration,
  simplified geometric characters,
  warm nostalgic screen-print textures,
  selective anthropomorphic objects,
  flat colorful graphic silhouettes,
  chunky dimensional typography
}

C = {
  surreal architectural micro-world,
  tiny cities and landscapes,
  miniature civilizations,
  realistic oversized objects as terrain,
  intricate environmental storytelling,
  hand-engraved architectural drawings
}

D = {
  cinematic poster mythology,
  heroic silhouettes,
  symbolic narrative scenes,
  dramatic foreground-background hierarchy,
  atmospheric motion,
  strong editorial composition
}

E = {
  flowing black-and-white engraving,
  carved contour currents,
  rhythmic parallel linework,
  woodcut shadows,
  dense illustrative micro-detail,
  sculptural ink relief
}

SUBJECT = analyze({{TOPIC}})

SUBJECT_DNA = {
    identity,
    cultural_significance,
    physical_symbols,
    characteristic_shapes,
    relevant_history,
    important_objects,
    people_or_characters,
    surrounding_environment,
    defining_actions,
    emotional_tone
}

CORE_OBJECT = choose_one_monumental_object(
    strongest_physical_metaphor(SUBJECT_DNA)
)

WORLD = infer_visual_civilization(SUBJECT_DNA)

where:
- everything relates to {{TOPIC}}
- supporting scenery reinforces its identity
- meaningful objects are visually recognizable
- historical elements are accurate when factual
- creative metaphors remain clearly illustrative

MONUMENTAL_TRANSFORMATION:

Convert CORE_OBJECT into an oversized
museum-quality visual monument.

Choose an appropriate treatment:

1. A giant artifact on an exhibition plinth.
2. An object containing an entire miniature civilization.
3. A sculptural object surrounded by tiny activities.
4. An impossible architectural landscape.
5. A symbolic form partially constructed from typography.
6. A historical relic blending into an engraved environment.

Select ONE primary treatment.

Do not force the same composition
onto every subject.

MINIATURE_WORLD_ENGINE:

Generate 10–30 small contextual details,
depending on composition.

Possible details include:

- tiny figures interacting with the object
- miniature buildings
- tools and instruments
- transportation
- small events
- cultural symbols
- landscapes
- plants and animals
- historical artifacts
- miniature signs
- relevant technologies
- narrative environments

Use strong scale contrast.

The central object should feel enormous
compared with the miniature inhabitants.

CHARACTER_TRANSLATION:

Where the subject benefits from personality,
introduce charming retro-pop characters.

CHARACTER_STYLE = {
    simplified geometry,
    oversized expressive features,
    graphic silhouettes,
    flat nostalgic colors,
    approachable expressions,
    playful gestures
}

Characters may emerge from:
- relevant historical figures
- culturally significant objects
- symbolic inventions
- recognizable products
- appropriate animals or creatures

Do not apply cute facial features
to every object.

Allow the monumental central object
to remain serious and realistic
when that produces a stronger contrast.

INK_WORLD:

Render selected background environments
using extremely fine black architectural ink.

Use:
- etched skyline silhouettes
- hatching
- topographic contour curves
- architectural construction marks
- hand-drawn miniature people
- technical diagrams
- atmospheric engraved waveforms

The ink environment should visually
interact with the dimensional object.

MATERIALS:

CORE_OBJECT:
Detailed, physically plausible material.

MICRO_WORLD:
Miniature sculpture mixed with ink drawing.

CHARACTERS:
Flat retro screen-print illustration
or tactile miniature figures.

BACKGROUND:
Warm ivory archival paper.

GRAPHIC ELEMENTS:
Clean geometric shapes and restrained annotations.

TYPOGRAPHY:
Modern museum serif or
bold nostalgic display lettering,
chosen according to the subject.

UNIFICATION RULE:

All style treatments must share
one coherent light direction,
perspective, visual hierarchy,
and color relationship.

Do not simply place unrelated art styles
next to one another.

The hybrid should feel like
one deliberately art-directed object.

COLOR_ENGINE:

BASE = parchment + charcoal + material tones

ACCENTS = infer_palette({{TOPIC}})

Use accents selectively to distinguish:

- central symbolism
- important characters
- major narrative moments
- headline lettering

Avoid uncontrolled rainbow coloring.

LAYOUT_SELECTOR:

if SUBJECT is historical:
    use monumental relic + miniature historical world

elif SUBJECT is scientific:
    use enormous instrument + technical ink civilization

elif SUBJECT is geographical:
    use impossible physical landscape + miniature architecture

elif SUBJECT is a product:
    use preserved product geometry + supporting miniature ecosystem

elif SUBJECT is a person:
    use symbolic object + stylized character narrative

elif SUBJECT is abstract:
    construct an original physical metaphor

else:
    select the most visually expressive arrangement

TYPOGRAPHY_ENGINE:

TITLE = infer_title({{TOPIC}})

SECONDARY = infer_short_context({{TOPIC}})

Display:

- one dominant title
- optional brief subtitle
- optional small factual labels
- miniature exhibition marks

Do not fabricate dates, quotations,
statistics, or historical details.

VISUAL_FINISH:

- gallery-quality precision
- tactile material rendering
- fine architectural penmanship
- strong visual metaphor
- whimsical character contrast
- intricate inspectable details
- controlled editorial whitespace
- dramatic monumental scale

OUTPUT:

A premium illustrated museum-world poster
in which {{TOPIC}} becomes an impossible
monumental artifact inhabited by a tiny
cultural or historical civilization.

Combine realistic material detail,
architectural engraving, selective kawaii
characterization, nostalgic graphic accents,
and elegant exhibition typography.

One cohesive image.
One visual universe.
One unforgettable monumental idea.
