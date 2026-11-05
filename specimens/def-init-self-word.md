def __init__(self, WORD): 
        s = infer(WORD)                        # style, figures, contour plan, ink 
        self.s = s 
 
    def render(self): 
        glyphs = letterforms(WORD, style=semantic_style(self. s. style))        # F₁ 
        glyphs = shape_contours(glyphs, double_duty=self.s.plan)              # F₅: edges do two jobs 
        return flat_vector(glyphs, ink=SINGLE, ground=NEUTRAL)                # F₄ 
 
    def verify(self, img): 
        assert style_matches_meaning(img. style, WORD),                 "F₁: generic typeface" 
        assert hidden_figures_present(img, self.s.figures),            "F₂: no hidden figure" 
        assert word_legible(img, WORD),                                "F₃: illegible" 
        assert single_ink(img) and flat(img),                          "F₄" 
        assert figure_silhouettes(img) <= contour_set(img.glyphs),     "F₅: figure as added shape" 
 
SemanticFigureGroundMark("{{TOPIC}}").render()
