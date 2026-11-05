2x2 grid, 16:9, do this for 4 days that changed science:   
 INPUT
 SET @ subject = '{{TOPIC}}';
 
 ANALYZE SUBJECT

CREATE TEMP VIEW semantic_dna AS
SELECT
    INFER_MASTER_SILHOUETTE(@ subject)       AS macro_shape,
    INFER_MAJOR_THEMES(@ subject, 5)         AS themes,
    INFER_SUBCONCEPTS(@ subject, 20)         AS concepts,
    INFER_EVENTS_OR_ACTIONS(@ subject, 12)   AS actions,
    INFER_OBJECTS(@ subject, 20)             AS objects,
    INFER_SYMBOLS(@ subject, 20)             AS symbols,
    INFER_VISUAL_HIERARCHY(@ subject)         AS hierarchy;

-- CONSTRUCT GLYPH VOCABULARY

CREATE TEMP VIEW glyph_language AS
SELECT GENERATE_SYMBOLIC_VARIANTS(
    input => semantic_dna.objects
          + semantic_dna.symbols
          + semantic_dna.actions,

    primitives => ARRAY[
        'triangle',
        'spiral',
        'eye',
        'circle',
        'zigzag',
        'stripe',
        'hook',
        'wedge',
        'ladder',
        'burst',
        'totem-face',
        'tiny-figure'
    ],

    simplification => 0.82,

    style =>
        'primitive mid-century pictogram,
         hand-cut geometry,
         uneven ink'
) AS glyphs
FROM semantic_dna;

-- BUILD MICRO WORLDS

CREATE TEMP VIEW micro_scenes AS
SELECT FOR_EACH(
    semantic_dna.themes,

    BUILD_MICRO_DIORAMA(
        theme,
        figures => 'simplified symbolic miniatures',
        objects => 'semantic props',
        perspective => 'flat pseudo-isometric',
        detail => 'tiny but readable'
    )
) AS scenes
FROM semantic_dna;

-- CREATE THE MONUMENTAL FORM

CREATE TEMP VIEW totem AS
SELECT PACK_INSIDE(
    container = semantic_dna.macro_shape,

    contents =
        glyph_language.glyphs
        + micro_scenes.scenes,

    packing_logic = '
        important concepts become larger zones;
        related concepts cluster;
        negative spaces create rhythm;
        no two motifs repeat exactly;
    ',

    silhouette_fidelity = 0.88
) AS final_form
FROM semantic_dna, glyph_language, micro_scenes;

-- SEMANTIC SCALE RULE

-- At three viewing distances:

VIEW > 3m:
    READ = one iconic silhouette;

VIEW ≈ 1m:
    READ = abstract ornamental totem;

VIEW < 30cm:
    READ = dozens of subject-specific scenes and glyphs;

-- OPTIONAL EXTERNAL EXTENSIONS

SELECT GENERATE_EXTENSION(
    role = strongest_secondary_concept,
    form = choose(
        'spiral tail',
        'radiating crown',
        'mechanical branch',
        'streamer',
        'orbit',
        'wave',
        'root system'
    )
);

-- Extension must be inferred from subject semantics,
-- never hard-coded.

-- PRINT MATERIAL

INK_MAIN = 'near-black / deep midnight ink';
PAPER    = 'aged warm cream';
INK_ACCENT = INFER_MUTED_ACCENT(@ subject);

TEXTURE = {
    dry_screenprint,
    missing_ink,
    edge_chipping,
    paper_fiber,
    slight_misalignment
};

BACKGROUND =
    low-contrast ghost graphics
    derived from discarded semantic concepts;

-- OUTPUT
 
RENDER totem. final_form
WITH
    framing = 'poster / vertical artifact',
    style =
        'primitive symbolic monument
         × mid-century graphic design
         × fractal knowledge map',
    lighting = 'none; printed flat art';

ASSERT:
    main_subject_readability = HIGH;
    micro_detail_density = HIGH;
    photorealism = FALSE;
    generic_pattern_fill = FALSE;
