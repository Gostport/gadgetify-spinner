RELATION_TYPES = {
    causes,
    enables,
    blocks,
    replaces,
    transforms,
    protects,
    accelerates,
    exposes,
    connects,
    depends_on,
    challenges
}

// STEP 2 — CHOOSE VISUAL THESIS

E* = argmax_e∈E(
    meaning(e)
  × surprise(e)
  × visualizability(e)
)

A = source(E*)
B = target(E*)
R = relation(E*)

// STEP 3 — TRANSLATE RELATION TO ACTION

PHYSICAL_ACTION = metaphorize(R, A, B)

Examples of transformation logic:

  enables     → opening / supporting / unlocking
  blocks      → obstructing / compressing / enclosing
  accelerates → pushing / launching / stretching
  replaces    → exchanging / covering / swapping
  connects    → bridging / threading / joining
  exposes     → lifting / peeling / revealing

These are transformation categories, not mandatory
objects or gestures.

// STEP 4 — BUILD SCENE GRAPH

          {{TOPIC}}
               |
               |  INFERRED ACTION
               ▼
        [INTERACTION POINT]
               |
               ▼
          [ENTITY B]

CONSTRUCTION:
    convert nodes into recognizable silhouettes
    convert relationship into one physical gesture
    assign contrasting scales
    eliminate nonessential nodes

// STEP 5 — RENDER STYLE

Use one dominant dark silhouette against
large warm-white negative space.

Render secondary actors and objects with
minimal monochrome iconography.

Small uppercase editorial heading.
Thin framing rule.
No decorative scenery.

FINAL = render(
    physical_action,
    semantic_scale_contrast,
    editorial_minimalism
)
