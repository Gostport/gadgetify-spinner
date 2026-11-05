2x2 grid, 16:9, do this for {{TOPIC}}: class Infographic_Diorama:
    def __init__(self, era="[ERA]", topic="{{TOPIC}}"):
        self.canvas = "Pure matte beige studio backdrop"
        # Force AI to calculate the container shape FIRST
        self.container_silhouette = f"AI_INFER(The defining silhouette of a {topic} artifact from {era})"

    def render_layers(self):
        # Layer 1: The Base
        plinth = "Geological cross-section base, showing layers of earth, wood, and brass."

        # Layer 2: The Macro/Micro Blend
        # The container is hollowed out like a tray to hold the miniatures
        diorama = f"Inside the {self.container_silhouette}, a bustling micro-city of {era} {topic} culture. Tiny detailed figures, vehicles, and architecture."

        # Layer 3: UI Physics
        typography = f"Crisp, legible text overlays. Numbered bullet points (1-12) down the sides, with fine black lines physically pointing to matching details inside the {self.container_silhouette}."

        return stack([plinth, diorama, typography])

# EXECUTE: Tilt-shift photography, hyper-maximalist detail, 8k resolution.
