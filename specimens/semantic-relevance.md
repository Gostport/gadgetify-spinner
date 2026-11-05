SELECT
        infer_core_thesis({{TOPIC}}) AS thesis,
        infer_tension({{TOPIC}}) AS tension,
        infer_tone({{TOPIC}}) AS emotional_mode,
        infer_implications({{TOPIC}}) AS consequence

),

candidate_metaphors AS (

    SELECT
        symbolic_agent,
        contrasting_entity,
        physical_action,
        interaction_object,
        conceptual_meaning

    FROM latent_visual_metaphor_space

    WHERE topic = {{TOPIC}}

      AND semantic_relation =
          (SELECT tension FROM semantic_field)

      AND visual_complexity = 'minimal'

      AND narrative_events = 1

),

ranked AS (

    SELECT *,
        SEMANTIC_RELEVANCE * 0.35
      + VISUAL_ORIGINALITY  * 0.25
      + INSTANT_READABILITY * 0.25
      + SILHOUETTE_QUALITY * 0.15
        AS fitness

    FROM candidate_metaphors

)

SELECT
    render_editorial_illustration(
        symbolic_agent,
        contrasting_entity,
        physical_action,
        interaction_object,
        style => 'minimalist black-ivory vector',
        composition => 'asymmetric scale contrast',
        typography => 'tiny editorial chapter heading',
        negative_space => 'extensive'
    )

FROM ranked

WHERE conceptual_meaning IS NOT NULL

ORDER BY fitness DESC

LIMIT 1;
