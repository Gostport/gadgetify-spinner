2x2 grid, 16:9, do this for {{TOPIC}}: INPUT = {
    "text": [ANY_WORD_PHRASE_SYMBOL_NUMBER_OR_SIGN],
    "topic": "{{TOPIC}}",
    "mood": [OPTIONAL],
    "use_case": [OPTIONAL]
}

class SemanticIllustratedWordmarkCompiler:
    HARD_CODING = False
    INFERENCE_MODE = True

    def diagnose_text(self, INPUT):
        return {
            "characters": parse_letters_numbers_symbols(INPUT["text"]),
            "readability": preserve_readable_word_or_sign(INPUT),
            "glyph_opportunities": infer_curves_counters_stems_baseline_dots_and_swashes(INPUT),
            "layout": infer_horizontal_vertical_badge_or_compact_lockup(INPUT)
        }

    def diagnose_topic(self, INPUT):
        return {
            "identity": infer_topic_identity(INPUT["topic"]),
            "visual_motifs": infer_iconic_objects_shapes_materials_and_motion(INPUT),
            "brand_mood": infer_playful_premium_retro_clean_luxury_cute_or_bold(INPUT),
            "palette": infer_limited_vector_palette(INPUT)
        }

    def map_topic_to_type(self, text, topic):
        return {
            "letter_transformations": convert_glyph_parts_into_topic_features(text, topic),
            "negative_space_icons": place_meaningful_icons_inside_counters_if_supported(text, topic),
            "container_or_base": infer_topic_specific_understructure(text, topic),
            "motion_marks": infer_steam_speed_light_sound_splash_energy_or_none(topic),
            "supporting_motifs": infer_minimal_context_icons(topic)
        }

    def render(self):
        text = self.diagnose_text(INPUT)
        topic = self.diagnose_topic(INPUT)
        mapping = self. map_topic_to_type(text, topic)

        return render_vector_wordmark(
            text=text,
            topic=topic,
            mapping=mapping,
            constraints=[
                "no hard-coded subject",
                "no fixed object substitutions",
                "no fixed container shape",
                "text must remain readable",
                "icons must belong to topic",
                "final mark must work as a logo"
            ]
        )
