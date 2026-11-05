def __init__(self, SUBJECT):
        s = infer(SUBJECT)                     # portrait, era, title, milestones, field
        self.s = s

    def render(self):
        return screenprint(
            portrait=ink_line(self.s.portrait, face_fill=NONE),                    # Y₁
            field=groovy_swirl(palette=self.s.era.palette, full_bleed=True,
                               halo=exclude(self.s.portrait.face_zone)),           # Y₂
            title=block_color_words(self.s.title), era_badge=groovy(self.s.era),   # Y₃
            footer=timeline(entries=self.s.milestones, icons=True, captions=True), # Y₄
            legibility=contrast_zones([title, portrait, badge, footer]) )          # Y₅

    def verify(self, img):
        assert line_only(img.portrait) and recognizable(img.portrait, SUBJECT),   "Y₁: filled/lost"
        assert full_bleed(img.field) and period_palette(img.field, self.s.era) \
           and swirls_avoid(img.field, img.portrait.face),                        "Y₂: plain/over face"
        assert block_colors(img.title) and era_badge(img),                        "Y₃"
        assert chronological(img.footer) and real_milestones(img.footer, SUBJECT) \
           and len(img.footer) >= 4,                                              "Y₄: fake/lorem"
        assert legible(img.title) and legible(img.footer) and reading_order(img), "Y₅"

PsychedelicPopMashup("{{TOPIC}}").render()
