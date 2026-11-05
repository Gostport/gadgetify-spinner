def __init__(self, topic):
        self.topic = topic

        self.silhouette = infer_signature_silhouette(topic)

        self.components = decompose_object(
            topic,
            into=[
                "primary_mass",
                "secondary_mass",
                "openings",
                "controls",
                "joints",
                "surface_regions",
                "voids",
                "appendages",
                "signature_details"
            ]
        )

        self.environment = infer_best_context(topic)
        self.program = infer_architectural_program(topic)
        self.materials = infer_architectural_material_translation(topic)

    def architecturize(self, component):
        return semantic_map(
            component,
            {
                "opening": "atrium / portal / observation window",
                "surface": "facade / curtain wall / structural shell",
                "joint": "circulation / expansion seam",
                "void": "sky lobby / courtyard / public chamber",
                "appendage": "bridge / canopy / structural wing",
                "control": "pod / terrace / illuminated program node"
            }
        )

    def scale_proof(self):
        return [
            "people",
            "cars or relevant transit",
            "trees",
            "entry doors",
            "occupied windows",
            "plaza furniture",
            "adjacent buildings"
        ]

    def render(self):
        assert silhouette_recognition(self.topic) >= 0.90
        assert architectural_plausibility() >= 0.85

        return """
        Render the source object as a monumental inhabited building,
        preserving morphology while converting its components into
        believable architectural systems.
        """
