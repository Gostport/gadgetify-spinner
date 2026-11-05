def __init__(self, topic):
        self.topic = topic
        self.word = derive_short_display_word(topic)
        self.silhouette = infer_iconic_silhouette(topic)

        self.stripe_map = infer_contour_stripe_paths(topic, self.silhouette)
        self.typography = integrate_word_into_body(self.word, self.silhouette)
        self.negative_space = solve_white_space_for_readability(topic)

    def silhouette_system(self):
        return {
            "subject": self.silhouette,
            "style": "flat black-and-white vector silhouette",
            "recognition": "instant at thumbnail scale"
        }

    def stripe_system(self):
        return {
            "paths": self.stripe_map,
            "behavior": "flowing contour bands that describe form",
            "palette": "black stripes on white ground",
            "texture": "none, pure graphic ink"
        }

    def word_system(self):
        return {
            "text": self.word,
            "integration": "embedded inside silhouette through negative space",
            "readability": "clear but discovered"
        }

    def render(self):
        return """
        Render as a clean optical typographic emblem:
        iconic silhouette, flowing contour stripes,
        hidden readable word, black ink on pure white.
        """
