SELECT visual_features FROM world_analysis WHERE source = '{{INPUT}}'
  )                                     -- entity is DERIVED, row must exist

  AND scale_verification = {
    'ratio': 'BETWEEN 1:40 AND 1:400',
    'subject_frame_share': 'BETWEEN 5% AND 15% of height',
    'entity_frame_share': 'BETWEEN 60% AND 80% of height',
    'known_size_anchors': 'COUNT >= 2 in foreground plane'
  }

  AND camera_spec = {
    'lens': '24mm equiv, f/8, slight_barrel_distortion',
    'angle': 'low OR eye_level (never俯瞰 on entity)',
    'framing': 'subject on third-line, entity mass on opposite third'
  }

  AND lighting = {
    'source': infer_time_of_day('{{INPUT}}'),
    'direction': 'single dominant, long shadows toward camera',
    'subject_treatment': 'rim_light + ambient, NEVER hero_key_light',
    'entity_treatment': 'backlit or side-lit, face in partial shadow'
  }

  AND palette = {
    'extraction': 'FROM {{WORLD}} surfaces + {{TOPIC}} materials',
    'rule': 'entity palette = world palette (it belongs to this place)',
    'forbidden': 'neon, saturated primary, out-of-world hues'
  }

  AND atmosphere = {
    'haze_gradient': 'exponential with depth (aerial perspective law)',
    'obscurity_budget': '30-60% of entity silhouette veiled',
    'particles': infer_from('{{INPUT}}.environment')  -- dust, snow, ash, spray
  }

  AND tension = {
    'subject_gaze': infer_relation('{{TOPIC}}', '{{ENTITY}}'),
    'story_vector': 'one readable question: does the subject know?'
  }

  AND negative = {
    'NOT': 'costume_creature, mascot_proportions, action_pose_entity,
            fully_lit_entity, flat_atmosphere, subject_hero_lighting,
            scale_ratio_below_1:40, symmetric_composition'
  };
