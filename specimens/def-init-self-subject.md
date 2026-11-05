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
