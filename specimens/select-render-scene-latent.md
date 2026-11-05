SELECT render_scene
FROM latent_miniature_diorama_archive
WHERE composition = 'single_connected_tabletop_world'
AND stage_count BETWEEN 3 AND 5
AND worlds = stage_worlds
AND connector = connector.flow_element
AND camera = 'elevated_macro_three_quarter'
AND style = 'handcrafted_collectible_process_diorama'
ORDER BY
    process_clarity DESC,
    connector_strength DESC,
    miniature_storytelling DESC,
    material_coherence DESC
LIMIT 1;
