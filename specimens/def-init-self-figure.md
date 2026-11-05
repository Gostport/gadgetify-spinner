def __init__(self, figure="{{TOPIC}}", legacy="[LEGACY/FIELD]"):
        self.canvas = "Open Moleskine notebook, visible center crease, faint dot-grid paper pattern"
        self.medium = "Frantic black fineliner ink, cross-hatching, filled with sloppy pastel watercolor washes"
        
    def generate_mind_map(self):
        # AI INFERENCE: Deduce the life of the subject
        anchor = f"A large, highly detailed, hand-sketched ink portrait of {figure} anchoring the left page."
        
        # The Chaos
        doodles = f"AI_INFER(Dozens of tiny, whimsical ink sketches of inventions, buildings, and concepts related to {legacy})."
        peers = f"AI_INFER(2-3 smaller sketched portraits of famous collaborators/rivals of {figure}) floating in bubbles."
        
        # The Connectors
        pathways = "Thick, winding, hand-drawn arrows, banners, and winding roads connecting the anchor portrait to all the doodles across the right page."
        
        return [self.canvas, anchor, doodles, peers, pathways, self.medium]

# EXECUTE: Render as a flat, top-down photograph of an authentic sketchbook. Horror vacui (fill all empty space).
