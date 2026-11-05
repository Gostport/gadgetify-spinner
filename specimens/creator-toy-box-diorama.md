class CreatorToyBoxDiorama:
    def __init__(self, CREATOR):
        s = infer(CREATOR)                     # figure, box, escapees, artifacts, present
        self.s = s

    def render(self):
        return collectible_render(
            figure=vinyl_figure(self.s.figure, at=self.s.station, pose=WORKING),      # B₁
            box=retail_box(title=self.s.title, art=depicts(self.s.figure)),           # B₂
            escapees=[ burst_from(e, origin=self. s. box. art, into=SPACE, dynamic=True)
                       for e in self.s.escapees ],                                    # B₃
            artifacts=suspended(self.s.artifacts, ground_contact=NONE),               # B₄
            studio=neutral_bg(soft_light=True, title_legible=True) )                  # B₅

    def verify(self, img):
        assert figure_at_craft(img) and toy_material(img.figure),               "B₁: realistic/idle"
        assert box_present(img) and design_equal(img. box. art.figure, img.figure), "B₂: mismatch"
        assert len(img.escapees) >= 2 and all(origin_on(e, img .box. art) and body_outside(e, img. box)
                                              for e in img.escapees),           "B₃: static on box"
        assert all(no_ground_contact(a) for a in img.artifacts),                "B₄: resting props"
        assert neutral_bg(img) and legible(img . box.title) and collectible_quality(img), "B₅"

CreatorToyBoxDiorama("{{TOPIC}}").render()
