def __init__(self, TOPIC):
        s = infer(TOPIC)                       # mascot, costume, friends, props, title, footer
        self.s = s

    def render(self):
        return flat_poster(
            mascot=personify(iconic_thing(TOPIC), face=KAWAII, dominant=True),        # T₁
            costume=collage_over(garment, ecosystem=self.s.ecosystem, coverage=True), # T₂
            friends=[ kawaii_face(i) for i in self.s.symbols if of_topic(i, TOPIC) ], # T₃
            props=authentic_text(self.s.props, registry=texts_of(TOPIC)),            # T₄
            title=block_two_color(TOPIC, shadow=True) + footer_flourish(self.s.footer),  # T₅
            style=STYLE_LOCK )   # flat geometric · one face style · saturated · cream textured

    def verify(self, img):
        assert mascot_of(img.mascot, TOPIC) and dominant(img.mascot),            "T₁: generic/not personified"
        assert coverage(img.costume, garment_region(img)) >= TAU and \
               all(in_ecosystem(e, TOPIC) for e in img.costume),                 "T₂: plain/unrelated"
        assert len(img.friends) >= 4 and all(faced(f) and of_topic(f, TOPIC) for f in img.friends), "T₃"
        assert all(text_in(p, texts_of(TOPIC)) for p in img.props),              "T₄: lorem/fabricated"
        assert style_equals(img, STYLE_LOCK),                                    "T₅: gradient/dark/muted/thin"

TopicMascotCollagePoster("{{TOPIC}}").render()
