tokens = [
  THEORY("{{TOPIC}}"),
  CONCEPTS(extract_4_concepts(THEORY)),
  STYLES(select_4_distinct_styles()),
  MEDIUMS(select_4_distinct_mediums()),
  PALETTES(derive_semantic_palettes(THEORY))
]

// ═══ PARSER: Abstract Grid Tree (AGT) ═══
AGT = TheoryGrid(
  Q1 = Quadrant(concept=CONCEPTS[0], style=STYLES[0], medium=MEDIUMS[0], palette=PALETTES[0]),
  Q2 = Quadrant(concept=CONCEPTS[1], style=STYLES[1], medium=MEDIUMS[1], palette=PALETTES[1]),
  Q3 = Quadrant(concept=CONCEPTS[2], style=STYLES[2], medium=MEDIUMS[2], palette=PALETTES[2]),
  Q4 = Quadrant(concept=CONCEPTS[3], style=STYLES[3], medium=MEDIUMS[3], palette=PALETTES[3])
)
