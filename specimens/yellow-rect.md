def __init__(self, franchise, era, sfx, bg):
        self.franchise  = franchise   # "{{TOPIC}}"
        self.era        = era         # "[YEAR]"
        self.sfx        = sfx         # "[ONOMATOPOEIA]"
        self. bg         = bg          # "[BG_COLOR_DESCRIPTOR]"
        self.scale      = "miniature_action_figure_fidelity"
        self.base       = "open_vintage_comic_book_spread"

    def base_platform(self):
        cover  = f"[{self.franchise}] cover art visible at front edge"
        pages  = "yellowed spread, original printed panels showing beneath scene"
        bridge = "3D figures ERUPT upward — page surface is the dimensional floor"
        return [cover, pages, bridge]

    def populate(self):
        hero    = "[HERO] — sculpted 3D figure, era-accurate costume, action pose"
        villain = "[VILLAIN] — era-accurate, facing hero in shared 3D space"
        env     = "[ENV_PROP] — physical miniature construction rising from page"
        return [hero, villain, env]

    def sfx_layer(self):
        return {
            "text":     self.sfx,
            "style":    "3D extruded bold comic font",
            "material": "high-gloss colored resin",
            "shadow":   "hard cast on page below",
            "tilt":     "[ANGLE]deg — dynamic, not static"
        }

    def badge(self):
        return f"YELLOW_RECT | '{self.franchise.upper()} | {self.era}' | black condensed"

panels = [
    ComicDiorama("[FRANCHISE_1]","[ERA_1]","[SFX_1]","[BG_1]"),
    ComicDiorama("[FRANCHISE_2]","[ERA_2]","[SFX_2]","[BG_2]"),
    ComicDiorama("[FRANCHISE_3]","[ERA_3]","[SFX_3]","[BG_3]"),
    ComicDiorama("[FRANCHISE_4]","[ERA_4]","[SFX_4]","[BG_4]"),
]

render_grid(
    panels  = panels,
    layout  = "2x2_quad",
    medium  = "3D_photorealistic_diorama_miniature",
    lens    = "45deg_overhead_isometric",
    light   = "studio_softbox + era_color_accent_per_panel"
)
