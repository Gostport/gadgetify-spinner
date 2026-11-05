STYLE_A = {
    "visual_language": "energetic illustrated anatomy",
    "rendering": "hand-drawn ink + colorful editorial illustration",
    "elements": [
        "numbered component annotations",
        "informal handwritten typography",
        "curved arrows",
        "tiny explanatory sketches",
        "graphic doodles",
        "playful visual metaphors"
    ]
}

STYLE_B = {
    "visual_language": "oversized material typography",
    "rendering": "cinematic tactile 3D sculpture",
    "elements": [
        "dimensional letters",
        "realistic subject-derived textures",
        "layered physical forms",
        "glossy highlights",
        "floating components",
        "dramatic spatial hierarchy"
    ]
}

STYLE_C = {
    "visual_language": "collectible mascot ecosystem",
    "rendering": "soft vinyl + clay + miniature diorama",
    "elements": [
        "anthropomorphic components",
        "expressive oversized eyes",
        "small arms and gestures",
        "coordinated accessories",
        "miniature identity labels",
        "playful character interactions"
    ]
}

STYLE_D = {
    "visual_language": "archival temporal engraving",
    "rendering": "sepia photography + dense black ink illustration",
    "elements": [
        "historical snapshots",
        "handwritten notes",
        "engraved environments",
        "narrative transformation paths",
        "cultural symbols",
        "time-period transitions"
    ]
}

def analyze_subject(subject):

    identity = infer_primary_visual_identity(subject)

    components = infer(
        essential_components_or_associations(subject)
    )

    materials = infer(
        physical_and_symbolic_materials(subject)
    )

    history = infer(
        verifiable_evolution_or_process(subject)
    )

    characters = select(
        components,
        criteria=[
            "visual distinctiveness",
            "anthropomorphic potential",
            "semantic relevance"
        ]
    )

    return identity, components, materials, history, characters

def materialize_subject(identity, materials):

    return create_3D_hero(
        identity=identity,
        lettering="oversized subject-title sculpture",
        materials=materials,
        geometry="readable and structurally plausible",
        lighting="premium cinematic advertising",
        detail="micro-textured and tactile"
    )

def anthropomorphize_components(characters):

    return [
        designer_mascot(
            component=x,
            personality=infer_personality(x),
            appearance=infer_visual_traits(x),
            props=infer_signature_accessories(x),
            expression="playful and expressive"
        )
        for x in characters
    ]

def construct_visual_narrative(history):

    if history.has_meaningful_chronology:
        return archival_timeline(
            scenes=infer_key_milestones(history),
            visual_transition="photograph → engraved illustration"
        )

    return process_story(
        scenes=infer_meaningful_stages(INPUT),
        visual_transition="physical object → illustrated explanation"
    )

def compose():

    identity, components, materials, history, characters = (
        analyze_subject(INPUT)
    )

    hero = materialize_subject(identity, materials)

    mascots = anthropomorphize_components(characters)

    narrative = construct_visual_narrative(history)

    annotations = infer_explanatory_callouts(components)

    return render(
        main_subject=hero,
        supporting_cast=mascots,
        contextual_story=narrative,
        graphics=annotations,

        spatial_hierarchy={
            "hero": 0.45,
            "typography": 0.20,
            "characters": 0.15,
            "annotations": 0.12,
            "history": 0.08
        },

        palette=infer_subject_specific_palette(INPUT),

        surface="illustrated paper + tactile sculpture + engraving",

        finish="premium collectible visual encyclopedia"
    )

OUTPUT = compose()

QUALITY_CONSTRAINTS:
- Subject remains identifiable.
- Materials follow the subject's identity.
- Mascots represent genuinely meaningful components.
- Typography remains readable.
- Historical details are not fabricated.
- Hand-drawn details enrich rather than obscure the hero.
- All styles coexist within one cohesive visual artifact.
