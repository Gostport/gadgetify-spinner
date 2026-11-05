-- INPUT

SET @ subject = '{{TOPIC}}';

-- 1. DISCOVER VISUAL PERSONALITY

CREATE TEMP VIEW semantic_profile AS
SELECT
    CLASSIFY_DOMAIN(@ subject)             AS domain,
    INFER_PERSONALITY(@ subject)            AS personality,
    INFER_RECOGNIZABLE_MASCOT(@ subject)    AS mascot,
    INFER_ICONIC_SYMBOLS(@ subject, 12)     AS symbols,
    INFER_ENVIRONMENT(@ subject)            AS setting,
    INFER_VISUAL_CULTURE(@ subject)         AS cultural_dna,
    INFER_DOMINANT_EMOTION(@ subject)       AS emotion,
    INFER_COMPLEMENTARY_PALETTE(@ subject)  AS palette,
    INFER_CONCISE_TITLE(@ subject)          AS title;

-- 2. BUILD CHARACTER IDENTITY

CREATE TEMP VIEW protagonist AS
SELECT CHARACTERIZE(
    subject = @ subject,

    silhouette =
        'recognizable simplified subject form',

    proportions =
        'oversized head, compact body,
         appealing stylized features',

    expression = semantic_profile.emotion,

    eyes =
        'large expressive graphic eyes',

    pose =
        'personality-revealing gesture',

    costume =
        'contextually relevant clothes or materials',

    personality_fidelity = HIGH
);

-- Never default to the same smiling person.
--
-- Some subjects become playful humans.
-- Others become animals, tools, landmarks,
-- machines, inventions or symbolic creatures.
--
-- The expression may be:
-- grumpy, curious, confident, sleepy,
-- surprised, mischievous or cheerful.

-- 3. SYMBOLIC ENVIRONMENT COLLAGE

CREATE TEMP VIEW environment AS
SELECT BUILD_LAYERED_WORLD(
    symbols = semantic_profile.symbols,
    setting = semantic_profile.setting,

    foreground =
        'recognizable everyday objects',

    middle_ground =
        'subject-related landmarks and activity',

    background =
        'simplified environmental context',

    scale =
        'playful, intentionally exaggerated',

    construction =
        'overlapping flat paper-cut shapes'
);

Every visual element must explain
some characteristic of @ subject.

For geographical subjects:
    use accurate landmarks and cultural objects.

For historical subjects:
    use appropriate objects and period details.

For scientific subjects:
    use genuine scientific symbolism.

For fictional subjects:
    use recognizable world-specific imagery.

For abstract subjects:
    create understandable visual metaphors.

-- 4. EXPRESSIVE SIDEKICK SYSTEM

CREATE TEMP VIEW sidekicks AS
SELECT PERSONIFY(
    semantic_profile.symbols,

    count => 3..7,

    eyes => 'large and simple',

    mouths => 'tiny and emotionally readable',

    arms_and_legs => 'only when beneficial',

    behavior => 'contextually meaningful',

    variation => 'each has a distinct expression'
);

Do not anthropomorphize everything.

Some symbols remain buildings, landscapes,
vehicles, natural objects or decorative shapes.

The poster should alternate between
living mascots and recognizable real-world forms.

-- 5. GENERATE THE CHARACTER'S MOOD STORY

STORY = {
    protagonist : protagonist,
    situation   : infer_relational_scene(@ subject),
    sidekicks   : sidekicks,
    conflict    : infer_small_emotional_contrast(@ subject),
    resolution  : infer_visual_payoff(@ subject)
};

Keep the humor subtle and naturally embedded.

The main character might be:

    proudly showing off the subject,
    reluctantly participating,
    reacting to an absurd prop,
    overwhelmed by surrounding symbols,
    celebrating an achievement,
    exploring an unfamiliar world.

For serious subjects:
    choose an appropriate dignified emotion.

-- 6. VERTICAL COMPOSITION

LAYER_1 = small atmospheric symbols
LAYER_2 = protagonist head and shoulders
LAYER_3 = symbolic environment
LAYER_4 = foreground objects and sidekicks
LAYER_5 = large subject title

ASCII:

       ✦   [SKY / SYMBOLS]   ✦
          ╭────────────╮
          │ PROTAGONIST│
          │  PERSONAL  │
          │ EXPRESSION │
       ┌──┴────────────┴──┐
       │  LANDMARKS       │
       │   + OBJECTS      │
       │   + SIDEKICKS    │
       │  + ENVIRONMENT   │
       └───────┬──────────┘
           FOREGROUND
       ╔══════════════════╗
       ║   SUBJECT NAME   ║
       ╚══════════════════╝

This is a hierarchy, not a fixed template.
Rearrange layers to best explain the subject.

-- 7. ART DIRECTION

STYLE =
    'mid-century picture-book illustration
     × playful character design
     × colorful cut-paper collage
     × vintage travel-poster typography
     × expressive editorial cartoon';

GEOMETRY =
    simplified rounded figures
    bold flat shapes
    crisp overlapping silhouettes
    minimal black outlining
    handcrafted paper edges

PALETTE =
    semantic_profile.palette;

Limit primary colors to 5–8.

Maintain strong subject-specific color identity.

-- 8. TYPOGRAPHY

TITLE = semantic_profile.title

TYPE:
    enormous block lettering
    lightly irregular geometric forms
    deep offset shadows
    limited dimensional paper extrusion

Optional supporting slogan:
    one short subject-derived phrase

Place title at bottom or another
compositional anchor inferred from subject.

Title must remain readable at thumbnail size.

-- 9. OUTPUT CONSTRAINTS

ASSERT protagonist_is_subject_specific = TRUE;
ASSERT symbolic_objects_are_relevant = TRUE;
ASSERT main_character_expression_is_distinctive = TRUE;
ASSERT composition_has_clear_depth_layers = TRUE;
ASSERT title_is_readable = TRUE;
ASSERT generic_tourism_icons = FALSE;
ASSERT random_smiling_objects = FALSE;

RENDER:
    one vibrant vertical storybook collage
    where @ subject becomes an expressive
    illustrated character surrounded by
    a world of subject-specific visual symbols.

Aspect ratio: 2:3 portrait.
