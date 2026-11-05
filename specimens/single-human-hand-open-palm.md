WHERE subject_base = 'Single_Human_Hand_Open_Palm'
AND payload_geometry = 'Perfect_Spherical_Micro_Planet'
AND payload_surface_mapping = ARRAY[
    (Zone: 'Top_Pole', Asset: 'infer_primary_monument({{TOPIC}})'),
    (Zone: 'Equator_and_Hemispheres', Asset: 'infer_dense_city_blocks({{TOPIC}})'),
    (Zone: 'Infrastructure', Asset: 'Curving_highways_wrapping_around_the_sphere'),
    (Zone: 'Flora', Asset: 'infer_local_trees({{TOPIC}})')
]
AND physics_override = 'Gravity_points_to_center_of_sphere'
AND optical_settings = 'Tilt_Shift_Depth_Of_Field_Bright_Bokeh_Background';
