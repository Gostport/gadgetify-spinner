One of the better prompts I have done. It's a bit long though. Here is a modified version that is shorter. This was done for 4 economic theories. 

4 famous economic theories:

INPUT: {{TOPIC}}

// ── INFERENCE ──────────────────────────────────────────────────
THINKER     = infer_primary_theorist({{TOPIC}})
TITLE       = infer_theory_name({{TOPIC}})
METAPHOR    = infer_physical_metaphor({{TOPIC}})
WORKERS     = infer_construction_crew({{TOPIC}})
CHART       = infer_side_panel_chart({{TOPIC}})

// ── TEMPORAL STAGES ────────────────────────────────────────────
// We render the FINAL frame. These stages describe how the poster
// resolves from blank canvas to a dense, historical diorama.

STAGE 0 — PAPER CANVAS (t = 0.00)
  Sepia, aged paper background fills the frame.
  Faint blueprint grid lines and vintage grain.

STAGE 1 — TEXT & UI BLOCKS (t = 0.15)
  Top-left block materializes with title, author, year, and summary.
  Side panel block appears with the chart/diagram.
  Typography is rigid, vintage serif.

STAGE 2 — MONUMENTAL METAPHOR (t = 0.30)
  The giant physical object appears.
  It is massive, sculpted from stone, wood, or iron.
  It dominates the center of the frame.

STAGE 3 — SCAFFOLDING (t = 0.45)
  Wooden planks, ladders, cranes, and ropes appear.
  They wrap around the giant object, showing it is under construction or operation.

STAGE 4 — MICRO WORKERS (t = 0.60)
  Tiny human figures populate the scaffolding.
  They are dwarfed by the monument.
  They are carrying tools, climbing ladders, operating machinery.

STAGE 5 — ENVIRONMENTAL TEXTURE (t = 0.75)
  Dust, ambient occlusion, and construction debris.
  Deep shadows in the crevices of the monument.
  Harsh directional light highlights the macro surface.

STAGE 6 — FINAL LOCK (t = 1.00)
  The sepia color grade is perfectly balanced.
  The scale contrast (giant object vs. tiny workers) is clear.
  The chart accurately represents the theory.
  The image reads as a vintage museum display or architectural illustration.

Output: one 8K architectural diorama poster.
