4 underrated scifi movies according to Nano Banana 2.1

Prompt: 2x2 grid, 16:9, do this for {{TOPIC}}: Style = {
  <sketchbook_biography_doodle_map>
  MEDIUM: Hand-drawn sketchbook spread, visual biography map, notebook doodle infographic, scrapbook-style idea journal.
  SURFACE: Open cream notebook pages, dotted-grid paper, worn page edges, slight paper grain, soft archival texture.
  LINEWORK: Black ink pen drawing, loose crosshatching, hand-lettered labels, imperfect doodle outlines, energetic sketch marks.
  COLOR: Mostly monochrome ink with sparse watercolor or marker accents in muted peach, pale blue, soft yellow, faded red, dusty green, and warm beige.
  COMPOSITION: Dense two-page spread filled with portraits, icons, inventions, arrows, symbols, timelines, labels, speech bubbles, diagrams, and memory fragments.
  TYPOGRAPHY: Casual handwritten titles, labels, notes, arrows, underlines, callouts, small captions, and playful emphasis marks.
  MOOD: Curious, biographical, inventive, educational, intimate, nostalgic, messy-but-organized, and highly inspectable.
  </sketchbook_biography_doodle_map>

  <transformation>
  - Convert the subject into a hand-drawn notebook spread that explains its life, history, system, mythology, process, or cultural impact.
  - Preserve the subject’s core identity, but break it into many small doodled moments, icons, milestones, influences, tools, places, quotes, diagrams, and symbolic objects.
  - Replace polished realism with black ink sketch lines, hatching, dotted texture, handwritten notes, and small imperfect doodles.
  - Convert major events, features, powers, products, traits, discoveries, or transformations into illustrated callouts connected by arrows and winding paths.
  - Reinterpret relationships and timelines as visual flow: arrows, loops, roads, spirals, gears, maps, banners, labels, and notebook annotations.
  - Convert important people, creatures, objects, locations, ideas, or components into small portrait doodles, simplified icons, diagrams, badges, and comic-like vignettes.
  - Use sparse color only to highlight key areas, not to fully render the whole image.
  - Place everything across an open notebook or journal spread so the page itself becomes the environment.
  - Let the result feel like someone obsessively studied the subject and filled a sketchbook with everything important about it.
  </transformation>

  <layout_rules>
  - Use a two-page open notebook layout when possible.
  - Place the largest focal image, portrait, object, logo, or main symbol on one side.
  - Fill the surrounding space with smaller doodles, arrows, captions, miniature diagrams, and symbolic references.
  - Use the opposite page for a roadmap, process flow, timeline, ecosystem, invention chain, or idea network.
  - Keep the composition dense but navigable: clusters should feel intentionally grouped.
  - Leave small pockets of breathing room so the page does not become visual noise.
  </layout_rules>

  <doodle_rules>
  - Use hand-drawn icons for abstract ideas.
  - Use arrows and motion paths to show progress, influence, causality, or transformation.
  - Use spirals, gears, lightbulbs, clouds, stars, hearts, boxes, banners, speech bubbles, and small symbols where they support the subject.
  - Turn complex objects into simplified sketchbook diagrams.
  - Let small imperfections, uneven line weight, and casual mark-making remain visible.
  - Every doodle should feel related to the subject, not random decoration.
  </doodle_rules>

  <typography_rules>
  - Use handwritten labels, not clean digital type.
  - Mix small captions, large casual headings, arrows, short notes, and underlined phrases.
  - Keep text short and punchy.
  - Use labels to explain icons, milestones, relationships, or key concepts.
  - Allow playful missive-like notes, but avoid long paragraphs.
  - If exact text is not provided, infer concise subject-relevant labels and diagram notes.
  </typography_rules>

  <color_rules>
  - Keep black ink dominant.
  - Use faded pastel accents sparingly for emphasis.
  - Favor muted watercolor fills, marker washes, and lightly tinted areas.
  - Avoid full-color rendering, neon palettes, glossy gradients, or saturated cartoon color.
  - Let cream paper and black linework define the main visual identity.
  </color_rules>

  <rendering_rules>
  - Render as a physical sketchbook page photographed or scanned.
  - Use visible paper texture, notebook fold, subtle page wear, and dotted-grid background.
  - Use crosshatching and line density for shading instead of digital gradients.
  - Keep drawings loose but legible.
  - Make the image rewarding to inspect closely, with many tiny connected ideas.
  - Balance educational clarity with personal sketchbook charm.
  </rendering_rules>

  <finish>
  - Open sketchbook biography-map aesthetic.
  - Dense black-ink doodles, handwritten notes, arrows, icons, portraits, diagrams, and sparse muted color accents.
  - Feels like a personal research journal, creative mind map, invention history, or illustrated life story.
  - Informative, nostalgic, playful, handmade, and highly inspectable.
  </finish>

  <avoid>
  - Avoid photorealism.
  - Avoid clean corporate infographic styling.
  - Avoid glossy 3D, toy, clay, plush, anime, or low-poly rendering.
  - Avoid overly polished vector art.
  - Avoid empty minimal pages.
  - Avoid random unrelated doodles.
  - Avoid dense unreadable text blocks.
  - Avoid bright saturated full-color poster treatment.
  - Avoid perfect symmetry; preserve lively notebook spontaneity.
  </avoid>
}

--- earlier class-shaped version (Oct 12, 2026) ---

{{TOPIC}} visualized with Nano Banana 2.1

2x2 grid, 16:9, do this for {{TOPIC}}: class SketchbookDoodleMap:
    def __init__(self, SUBJECT):
        s = infer(SUBJECT)
        self.s = s

    def decompose(self):
        return many_small_doodles(self.s.elements)          # S₂: break into many small elements

    def connect(self, doodles):
        return arrows_and_paths(self.s.connections, doodles) # S₃: show real relationships

    def render(self):
        return photograph_or_scan(
            notebook=cream_paper(dotted_grid, worn_edges, fold),   # S₁
            ink=black_pen(loose_crosshatch, imperfect_outlines),   # S₅
            doodles=self.decompose(),
            connections=self.connect(),
            focal=largest_element(self.s.focal, side='one'),
            opposite=roadmap_or_timeline(self.s.opposite),
            labels=handwritten(self.s.labels),                     # S₄
            accents=sparse_muted_pastel(self.s.key_areas),         # S₅
            texture=paper_grain + archival + ink_imperfections     # η
        )

    def verify(self, img):
        assert paper_texture(img) and dotted_grid(img) and notebook_fold(img), "S₁"
        assert many_elements(img) and navigable_clusters(img) and inspectable(img), "S₂"
        assert connections_explain_subject(img, self.s),                            "S₃: random arrows"
        assert all_handwritten(img) and no_digital_type(img) and short_labels(img), "S₄"
        assert black_ink_dominant(img) and sparse_muted_accents(img),               "S₅"
        assert not photoreal(img) and not corporate_infographic(img),               "η/avoid"

SketchbookDoodleMap("{{TOPIC}}").render()
