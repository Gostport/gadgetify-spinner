def __init__(self, device="{{TOPIC}}"):
        self. shell = f"External chassis of {device} with front face cut away"
        
    def infer_interior_logic(self):
        # AI TASK: Deduce the specific year this device was popular
        target_year = "AI_INFER(Release Year of " + self.device + ")"
        
        # Populate the room based on that specific year
        decor = {
            "wall_art": f"AI_INFER(Pop culture posters from {target_year})",
            "snacks": f"AI_INFER(Popular snack packaging from {target_year})",
            "lighting": "Cozy miniature tungsten lamp warmth",
            "screen_content": f"AI_INFER(Iconic software/game running on a tiny TV inside)"
        }
        return decor

    def render(self):
        return f"A realistic miniature diorama inside a hollowed-out {self.device}. " \
               f"The interior is a bedroom/living room styled strictly in {target_year} aesthetics."

# EXECUTE: device="Tamagotchi" (Result: 90s neon, keychain aesthetic)
# EXECUTE: device="Vintage Radio" (Result: 1940s Art Deco interior)
