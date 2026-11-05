class ThemedImage:
    """One theme/topic/subject in, one unique image out."""

    def __init__(self, theme):
        self.theme = theme
        self.seed = fresh_random_seed()
        self.resolve_auto_fields(theme, self.seed)

    def resolve_auto_fields(self, theme, seed):
        self.subject = irreducible_visual_noun(theme)        # the one thing the image is OF
        self.cliches = three_most_obvious_depictions(theme) # banned, not suggested
        self.twist = surprising_but_coherent_element(theme, seed)  # the thing nobody expects
        self.concept = fuse(self.subject, self.twist, excluding=self.cliches)
        self.era = pick(["ancient", "mythic", "retro-future", "near-future", "timeless"], seed)
        self.medium = pick(["oil on canvas", "layered gouache", "ink wash",
                            "colored pencil", "mixed-media collage"], seed)
        self.palette = constrained_palette(4, seed)          # exactly 4 hues + neutrals
        self.lighting = single_dramatic_light_source(seed)
        self.composition = pick(["rule-of-thirds", "centered icon",
                                 "diagonal thrust", "frame-within-frame"], seed)
        self.texture = tactile_surface_detail(seed)
        self.mood = emotional_temperature(theme)
        self.aspect_ratio = "16:9"
        self.impossible_detail = one_quiet_impossibility(theme)  # rewards a second look

    def verify_visual_logic(self):
        assert subject_is_recognizable()
        assert twist_is_visible_not_decorative()
        assert no_cliche_present(self.cliches)
        assert palette_limited_to(4)
        assert single_clear_focal_point()
        assert image_reads_at_thumbnail_scale()

    def render(self):
        self.verify_visual_logic()
        return compose(
            subject=self.subject,
            twist=self.twist,
            concept=self.concept,
            era=self.era,
            medium=self.medium,
            palette=self.palette,
            lighting=self.lighting,
            composition=self.composition,
            texture=self.texture,
            mood=self.mood,
            aspect=self.aspect_ratio,
            detail=self.impossible_detail,
        )

ThemedImage("{{TOPIC}}").render()
