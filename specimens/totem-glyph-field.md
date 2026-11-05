// ── SEMANTIC INFERENCE ──────────────────────────────────────────
THEME_AESTHETIC  = infer_motif_language({{TOPIC}})            // Mesoamerican, Cyberpunk circuitry, botanical, nautical, astral
MOTIF_PRIMITIVES = infer_shape_vocabulary(THEME_AESTHETIC) // hooks, spirals, dots, sweeping tails, gears, leaves
GRID_LAYOUT      = 26_cells (A-Z), strict orthogonal grid
INK_STYLE        = solid_black_blocks, negative_space_carving

// ── GLYPH GENERATION FIELD ─────────────────────────────────────
// Each glyph is a dense mass carved by negative space.
Φ(x,y) = solid_mass(GRID_CELL) - carve_potential(MOTIF_PRIMITIVES)
F = ∇Φ       // flow of the outer silhouette
Curl = ∇×Φ   // internal spirals, loops, and curves
Div  = ∇·F   // density of dots, eye-holes, and negative space gaps

// ── ITERATION (A to Z) ─────────────────────────────────────────
for letter in A..Z:
    // 1. Base mass: Assign a random organic/geometric bounding shape
    BASE = random_organic_blob(THEME_AESTHETIC)

    // 2. Apply topic-specific motifs
    for i in 1..3:
        MOTIF = select_random(MOTIF_PRIMITIVES)
        FUSE(BASE, MOTIF, via=Curl)

    // 3. Carve negative space
    CARVE(BASE, shape='internal_eye_or_gap', via=Div)
    CARVE(BASE, shape='sweeping_slash', via=F)

    // 4. Metadata
    RENDER_LABEL(letter, top_left)
    RENDER_ID(format="00" + index, bottom_left)

    // 5. Place in grid
    PLACE(BASE, grid=GRID_LAYOUT)

// ── ACCURACY CHECK PROTOCOL ────────────────────────────────────
ACCURACY_CHECK = {
    grid_check      : exactly 26 cells, A-Z,
    silhouette_check: all glyphs are solid black masses,
    carve_check     : negative space does not break the outer silhouette,
    theme_check     : motifs (e.g., if {{TOPIC}} is 'Marine Biology', look for fins/waves)
}
IF ANY check fails → regenerate affected glyphs.

// ── RENDER ─────────────────────────────────────────────────────
RENDER_BOARD(
    layout   := GRID_LAYOUT,
    palette  := { ink: black, paper: light_grey },
    style    := 'bold_iconic_totem_glyphs'
)
