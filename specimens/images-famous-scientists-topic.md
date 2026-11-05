4 images: 1:1, do this for 4 famous scientists: WITH topic_identity AS ( 
    SELECT
        derive_display_word('{{TOPIC}}') AS display_word,
        infer_primary_visual_form('{{TOPIC}}') AS hero_form,
        infer_semantic_motifs('{{TOPIC}}', 5, 15) AS motifs,
        infer_motion_logic('{{TOPIC}}') AS motion,
        infer_accent_palette('{{TOPIC}}') AS palette
),

layout_candidates AS (
    SELECT * FROM (
        VALUES
            ('hero_right_type_left'),
            ('hero_left_type_right'),
            ('central_collision'),
            ('diagonal_motion'),
            ('radial_expansion'),
            ('vertical_ascent'),
            ('fragmented_field'),
            ('AI_invented_layout')
    ) AS L(layout)
),

ranked_layouts AS (
    SELECT
        layout,
        (
            0.28 * topic_fit(layout, '{{TOPIC}}') +
            0.22 * typography_readability(layout) +
            0.18 * hero_clarity(layout) +
            0.14 * motion_strength(layout) +
            0.10 * motif_capacity(layout) +
            0.08 * visual_surprise(layout)
        ) AS score
    FROM layout_candidates
)

SELECT render_poster(
    display_word => display_word,
    hero         => hero_form,
    motifs       => motifs,
    motion       => motion,
    palette      => palette,
    layout       => (
        SELECT layout
        FROM ranked_layouts
        ORDER BY score DESC
        LIMIT 1
    ),
    style        => 'kinetic editorial print collage'
)
FROM topic_identity;
