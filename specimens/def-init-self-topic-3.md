def __init__(self, topic):
        self.topic = topic
        self.word = derive_short_display_word(topic)

        self.crew = infer_topic_archetypes(
            topic,
            count="adaptive 3..7"
        )

        self.letter_material = infer_material_dna(topic)
        self.palette = infer_color_palette(topic)
        self.props = infer_miniature_props(topic)
        self.wardrobe = infer_collectible_outfits(topic)
        self.poses = infer_playful_interactions(topic)

    def typography(self):
        return {
            "text": self.word,
            "form": "oversized freestanding block letters",
            "material": self.letter_material,
            "surface": "topic-derived wear, stickers, paint, dents, patches, seams, marks"
        }

    def figures(self):
        return [
            {
                "role": archetype,
                "pose": infer_pose_for_role(archetype),
                "outfit": infer_outfit_for_role(archetype, self.topic),
                "prop": infer_prop_for_role(archetype, self.topic),
                "expression": infer_expression_for_role(archetype)
            }
            for archetype in self.crew
        ]

    def render(self):
        return """
        Render as a premium chibi collectible word-diorama:
        oversized tactile typography, cute expressive crew figures,
        tiny props, dark studio lighting, shallow toy-photography depth.
        """
