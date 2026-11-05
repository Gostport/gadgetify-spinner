STYLE_DNA = {

    "ILLUSTRATED_NOTEBOOK": {
        "medium": "aged ivory paper + editorial ink illustration",
        "marks": [
            "fine black outlines",
            "crosshatched portraits",
            "muted hand-colored drawings",
            "scribbled arrows",
            "miniature explanatory doodles",
            "handwritten captions"
        ],
        "composition": "information flows through connected visual discoveries"
    },

    "SEMANTIC_TYPOGRAPHY": {
        "medium": "bespoke vector-like calligram",
        "structure": [
            "letterforms contain symbols",
            "letters morph into recognizable objects",
            "typographic strokes encode meaning",
            "organic and geometric letterform fusion",
            "color communicates conceptual character"
        ],
        "principle": "the word visually demonstrates its meaning"
    },

    "MYTHIC_SILHOUETTE": {
        "medium": "high-contrast black-and-white emblem",
        "structure": [
            "heroic silhouettes",
            "negative-space integration",
            "flowing ornamental forms",
            "symbolic animals or figures when relevant",
            "elegant literary typography"
        ],
        "principle": "image and lettering share one silhouette"
    }
}

def extract_semantic_dna(subject):

    return {
        "identity": infer_recognizable_identity(subject),
        "narrative": infer_meaningful_story(subject),
        "symbols": infer_authentic_visual_associations(subject),
        "geometry": infer_iconic_shapes(subject),
        "personality": infer_emotional_character(subject),
        "relationships": infer_semantic_connections(subject)
    }

def construct_calligram(subject, dna):

    word = choose_primary_label(subject)

    candidates = generate_letterform_transformations(
        text=word,
        symbols=dna["symbols"],
        geometry=dna["geometry"]
    )

    return optimize(
        candidates,
        objective={
            "legibility": 0.40,
            "semantic_relevance": 0.30,
            "visual_elegance": 0.20,
            "originality": 0.10
        },
        preserve_letter_order=True,
        preserve_recognizable_word=True
    )

def illustrate_knowledge(dna):

    return create_ink_drawings(
        hero=dna["identity"],
        companions=select_meaningful_symbols(dna["symbols"]),
        connections=dna["relationships"],
        drawing_style="antique editorial sketchbook",
        detail="small but inspectable"
    )

def fuse_silhouettes(calligram, dna):

    return integrate_negative_space(
        main_word=calligram,
        visual_symbols=dna["geometry"],
        methods=[
            "shared outlines",
            "figure-ground reversal",
            "letter-object morphing",
            "contour continuation",
            "internal silhouette cutouts"
        ],
        avoid="forced illegible letter distortion"
    )

def generate_artwork(subject):

    dna = extract_semantic_dna(subject)

    calligram = construct_calligram(subject, dna)

    knowledge = illustrate_knowledge(dna)

    emblem = fuse_silhouettes(calligram, dna)

    return compose(
        dominant_form=emblem,

        secondary_elements=knowledge,

        narrative_flow=infer_best_connector(dna),

        typographic_system={
            "display": "expressive semantic calligram",
            "supporting": "elegant illustrated labels",
            "microtext": "restrained handwritten notes"
        },

        material="cream archival paper and black ink",

        accents=infer_semantically_meaningful_colors(subject),

        complexity="high internal intelligence, clean overall silhouette",

        output="one integrated visual identity artwork"
    )

RESULT = generate_artwork(INPUT)

CONSTRAINTS:
- Do not hard-code a person, invention, myth, or historical era.
- Do not add unrelated decorative symbols.
- Preserve accurate spelling and readable lettering.
- Use literal imagery only when semantically justified.
- Favor clever figure-ground transformations over visual clutter.
- Keep the overall composition coherent as one artwork.
