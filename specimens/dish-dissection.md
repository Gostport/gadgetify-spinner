CREATE VIEW dish_dissection AS
WITH blueprint AS (
  SELECT
    '{{TOPIC}}' AS dish,
    infer_layer_count('{{TOPIC}}') AS n_layers,
    infer_construction_layers('{{TOPIC}}') AS layers,   -- ordered outer→core
    infer_cut_surface('{{TOPIC}}') AS cut_plane,
    infer_hero_core('{{TOPIC}}') AS core_component,
    infer_thermal_profile('{{TOPIC}}') AS temps
),
layer_table AS (
  SELECT
    ordinality AS layer_order,
    (layer->>'component')      AS component,
    (layer->>'thickness')      AS thickness_mm,
    (layer->>'color')          AS color,
    (layer->>'texture')        AS texture,
    (layer->>'structural_role')AS function,
    (layer->>'state')          AS thermal_state
  FROM blueprint,
       unnest(layers) WITH ORDINALITY AS t(layer, ordinality)
  ORDER BY layer_order DESC
),
render_specs AS (
  SELECT
    infer_camera_angle(cut_plane)          AS instruction_1,
    infer_lighting('{{TOPIC}}')                AS instruction_2,  -- ring / raking / bounced, per dish
    infer_aperture('{{TOPIC}}')                AS instruction_3,
    infer_motion_styling('{{TOPIC}}')          AS instruction_4,  -- juice, steam, crumb, glaze, drip
    infer_background_mode('{{TOPIC}}')         AS instruction_5,
    infer_annotation_system('{{TOPIC}}')       AS instruction_6,  -- leader lines, Helvetica, grid
    infer_color_grading('{{TOPIC}}')           AS instruction_7,
    infer_measurement_overlay('{{TOPIC}}')     AS instruction_8,
    infer_thermal_overlay('{{TOPIC}}')         AS instruction_9
  FROM blueprint
)
SELECT
  render_cutaway(
    dish := dish,
    layer_stack := json_agg(layer_table ORDER BY layer_order DESC),
    annotations := instruction_6,
    measurements := instruction_8,
    thermal_overlay := instruction_9,
    camera := instruction_1,
    lighting := instruction_2,
    aperture := instruction_3,
    styling := instruction_4,
    background := instruction_5,
    grading := instruction_7,
    format := '8K macro photography, surgical precision meets gourmet'
  ) AS final_image
FROM blueprint, render_specs, layer_table
GROUP BY dish, instruction_1, instruction_2, instruction_3,
         instruction_4, instruction_5, instruction_6, instruction_7,
         instruction_8, instruction_9;
RETURN final_image;
