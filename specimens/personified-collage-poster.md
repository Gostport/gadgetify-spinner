CREATE VIEW personified_collage_poster AS
WITH topic_inference AS (
  SELECT
    '{{TOPIC}}' AS topic,
    COALESCE(NULLIF('$SUBTITLE',''), infer_subtitle('{{TOPIC}}')) AS subtitle,
    COALESCE(NULLIF('$ERA',''), infer_era_or_context('{{TOPIC}}')) AS era,
    infer_core_identity('{{TOPIC}}') AS core_identity,
    infer_visual_world('{{TOPIC}}') AS visual_world,
    infer_primary_elements('{{TOPIC}}', 6, 10) AS primary_els,
    infer_secondary_elements('{{TOPIC}}', 8, 16) AS secondary_els,
    infer_text_elements('{{TOPIC}}', 2, 5) AS text_els,
    infer_semantic_palette('{{TOPIC}}', 4, 7) AS palette,
    infer_mood('{{TOPIC}}') AS mood
),
mascot AS (
  SELECT
    core_identity, visual_world, primary_els, secondary_els, text_els, palette, mood, topic, subtitle, era,
    'anthropomorphic embodiment of ' || core_identity ||
    '; occupies 55–70% of composition; friendly facial geometry; large circular eyes with black pupils; tiny nose; curved smile; readable silhouette; simple expressive limbs; confident iconic pose' AS mascot_spec,
    'body/clothing/cape/backpack/helmet becomes an integrated collage of ' || topic ||
    ' — architecture, landscapes, products, inventions, people, transport, cultural objects, maps, roads, screens, patterns, famous scenes, environments; BUILT INTO the mascot, never pasted on' AS body_logic
  FROM topic_inference
),
supporting AS (
  SELECT
    (SELECT json_agg(json_build_object(
        'element', el,
        'eyes', 'two dot/circular eyes',
        'mouth', 'tiny smile',
        'limbs', 'optional tiny limbs',
        'pose', infer_supporting_pose(el, topic)
     ))
     FROM (SELECT unnest(secondary_els[1:8]) AS el) s) AS supporting_icons
  FROM mascot
),
environment AS (
  SELECT
    'foreground icons + midground subject-world + background skyline from: ' ||
    array_to_string(primary_els, ', ') AS scene_layout
  FROM mascot
),
title_block AS (
  SELECT
    'enormous carnival block lettering, chunky uppercase, slightly irregular, two-color, thick dark offset drop shadow, no gradients, extremely legible' AS title_type,
    topic AS title_text,
    subtitle AS subtitle_text,
    'tiny silhouette strip / skyline / symbolic footer' AS footer
  FROM mascot
),
style AS (
  SELECT
    'flat geometric illustration, paper-cut collage, mid-century editorial, 1960s/70s children''s-book simplicity, contemporary graphic poster, kawaii, screen-print texture, subtle paper grain' AS world,
    'simple chunky rounded clean highly readable' AS shapes,
    'saturated primary/secondary + warm cream bg + deep navy/black shadows + strategic red/yellow/blue/green accents' AS color,
    'subtle fibrous paper, light screen-print misregistration, soft analog grain, no glossy gradients' AS texture
)
SELECT
  render_poster(
    mascot := (SELECT mascot_spec FROM mascot),
    body_collage := (SELECT body_logic FROM mascot),
    supporting := (SELECT supporting_icons FROM supporting),
    environment := (SELECT scene_layout FROM environment),
    title := (SELECT title_text FROM title_block),
    subtitle := (SELECT subtitle_text FROM title_block),
    footer := (SELECT footer FROM title_block),
    micro_text := (SELECT text_els FROM mascot),
    palette := (SELECT palette FROM mascot),
    mood := (SELECT mood FROM mascot),
    style := (SELECT world FROM style) || '; ' || (SELECT shapes FROM style) || '; ' || (SELECT color FROM style) || '; ' || (SELECT texture FROM style),
    composition := 'vertical hierarchy: top floating icons → upper-center mascot head + iconic object → center collage body → sides supporting icons → lower-center dense environment → bottom massive title → footer silhouette strip; overall tapered triangular silhouette',
    format := COALESCE(NULLIF('$FORMAT',''), 'portrait poster, 2:3'),
    negative := 'generic human, random icons, pasted-on collage, photorealism, 3D/CGI, gradients, dark bg, thin type, faceless icons, generic skyline/props, clutter, unreadable title'
  ) AS final_image
FROM mascot, supporting, environment, title_block, style;
RETURN final_image;
