class FactEngine:
    core_fact = infer_most_shareable_fact_researched_for_accuracy(SUBJECT)
    hero_stat = extract_key_stat(core_fact)
    proof_unit = infer_repeatable_unit(SUBJECT, core_fact)
    magnitude_mode = infer_visualization_mode(core_fact)

class LayoutEngine:
    title = compress_fact_into_punchline(core_fact)
    subtitle = derive_support_line(core_fact)
    proof_panel = choose_best_panel(magnitude_mode)
    mascot = infer_cute_mascot_or_symbol(SUBJECT)
    decorations = infer_playful_decoration(core_fact)

class VisualStyle:
    palette = "bright saturated cartoon colors"
    typography = "bold rounded friendly display type"
    background = "radiant burst or celebratory flat backdrop"
    rendering = "clean vector-like poster illustration"

def render():
    """
    Convert SUBJECT into a cheerful viral knowledge poster:
    one dominant proof visualization, one bold punchline,
    one mascot, and a playful celebratory layout.
    """
