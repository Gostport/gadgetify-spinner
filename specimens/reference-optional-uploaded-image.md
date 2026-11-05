REFERENCE: optional uploaded image

// ========================================================
// SEMANTIC GRAPH
// ========================================================

G = knowledge_graph({{TOPIC}})

CENTER = strongest_identity_node(G)

SATELLITES = select(
    origins,
    milestones,
    objects,
    people,
    places,
    cultural_symbols,
    transformations,
    technologies,
    future_direction
)

// ========================================================
// CENTRAL HERO
// ========================================================

Create one dominant central illustration representing CENTER.

Possible representations automatically selected:

portrait
product
object
building
creature
machine
symbol
landmark
abstract metaphor

The hero occupies approximately 25–35% of composition.

// ========================================================
// CONSTELLATION
// ========================================================

Surround the hero with 15–35 micro-vignettes.

Each vignette is visually simplified to:

    one icon
    or
    one 2–3 object scene
    or
    one tiny silhouette group.

Connect related motifs through invisible visual rhythm,
NOT literal infographic connector lines.

Use:

repetition,
scale,
direction,
circles,
arcs,
burst shapes,
negative space.

// ========================================================
// PRIMITIVE GLYPH MUTATION
// ========================================================

Approximately 35% of secondary information
should mutate into primitive abstract glyphs.

function glyphify(concept):

    preserve_semantic_signature(concept)

    reduce geometry to:
        circle
        triangle
        slash
        spiral
        eye
        fork
        ray
        tooth
        zigzag
        block
        primitive silhouette

    exaggerate recognizable characteristic

    discard realistic detail

    return playful_subject_specific_symbol

Thus realistic-ish heritage illustration
gradually dissolves into abstract visual language
toward the outer edges.

// ========================================================
// INFORMATION GRADIENT
// ========================================================

CENTER:
    high semantic clarity
    moderate detail

MIDFIELD:
    recognizable icons
    simplified scenes

OUTER FIELD:
    abstract glyphs
    texture
    marks
    symbols

Formally:

clarity(r) = 1 - normalize(r)

abstraction(r) = normalize(r)

where r = distance from central hero.

// ========================================================
// CHRONOLOGY
// ========================================================

If subject has a history:

arrange important milestones along a subtle baseline.

EARLIEST                                         LATEST
  ●────────●────────●────────●────────●────────●

Each marker:
    year / era
    tiny icon
    1–3 word caption

If chronology is irrelevant:

replace the timeline with semantic categories.

Example:

ORIGIN — FORM — CULTURE — IMPACT — FUTURE

// ========================================================
// LARGE TYPE
// ========================================================

Place the subject name as oversized heritage lettering.

Allow illustrations to:

    overlap letters,
    emerge through counters,
    sit on strokes,
    replace parts of letters.

Never place a sterile title above everything.

// ========================================================
// SLOGAN ENGINE
// ========================================================

Infer ONE short editorial phrase
from the subject's overarching trajectory.

Format examples only:

"BUILT TO ____."
"FROM ____ TO ____."
"____ CHANGED EVERYTHING."
"A STORY STILL ____."

Do not copy these literally unless appropriate.

Maximum:
    3–8 words.

// ========================================================
// COMPOSITION ENGINE
// ========================================================

Choose dynamically:

A) asymmetric editorial collage
B) central radial constellation
C) rising historical panorama
D) wide horizontal heritage mural
E) vertical archival poster

based on subject structure.

Possible wide arrangement:

┌─────────────────────────────────────────────┐
│ SUBJECT                micro  ○ △ ✦        │
│ phrase          ╭──────╮   ↗    ◉          │
│                 │ HERO │ ○   △      icon   │
│  ◇ icon         ╰──────╯    glyphs         │
│                                             │
│ YEAR ●──●──●──●──●──● TODAY                │
└─────────────────────────────────────────────┘

// ========================================================
// MATERIAL + PRINT
// ========================================================

PAPER:
    warm cream archival stock.

LINE:
    hand-drawn,
    slightly irregular.

COLORS:
    2–5 inks derived from subject.

TEXTURE:
    screenprint grain,
    offset misregistration,
    ink speckles,
    faded edges,
    subtle poster aging.

ILLUSTRATION:
    editorial advertising art
    × primitive pictogram
    × doodle archive
    × mid-century poster.

// ========================================================
// NEGATIVE PROMPT
// ========================================================

NO:
corporate PowerPoint infographic,
generic flat icons,
photorealistic collage,
dozens of paragraphs,
random unrelated doodles,
perfect digital gradients,
UI cards,
boxed sections,
repeated clipart.

OUTPUT:
A visually dense but coherent heritage poster where
the history and meaning of {{TOPIC}} orbit one heroic
central identity, gradually transforming from recognizable
illustration into playful symbolic glyph language.
