FROM latent_speculative_architecture

WHERE source_topic = {{TOPIC}}

AND primary_form =
    infer_signature_silhouette({{TOPIC}})

AND morphology_preservation >= 0.90

AND transformation_rule =
    'source object itself becomes inhabitable architecture'

AND facade_system =
    translate_surface_materials_to_architecture({{TOPIC}})

AND spatial_program =
    infer_semantically_relevant_building_use({{TOPIC}})

AND environment =
    infer_context_that_strengthens_topic_identity({{TOPIC}})

AND human_scale_cues >= 5

AND realism = 'high-end architectural photography'

ORDER BY
    source_recognition DESC,
    architectural_plausibility DESC,
    inhabitability DESC,
    environment_integration DESC,
    cinematic_realism DESC

LIMIT 1;
