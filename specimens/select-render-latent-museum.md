SELECT render
FROM latent_museum_infographic_archive
WHERE composition = 'vertical_staircase_to_horizontal_timeline'
AND stage_count BETWEEN 5 AND 8
AND content = stage_data
AND transition_path = layout.path
AND annotation_style = 'thin_leader_line_museum_labels'
AND camera = 'isometric_three_quarter'
AND background = 'clean_off_white'
AND style = 'minimal_architectural_diorama'
ORDER BY
    stage_clarity DESC,
    progression_readability DESC,
    miniature_coherence DESC,
    whitespace_quality DESC
LIMIT 1;
