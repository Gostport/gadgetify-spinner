FROM prop_archive.literary_mashups
WHERE classic_lit = '{{CLASSIC_LIT}}'
  AND genre_twist = '{{GENRE_TWIST}}'
  AND format = '1:1_square_macro_render'

  AND stage_spec = {
    'base': 'thick_hardcover_book',
    'spine_visibility': 'TRUE (facing camera, metallic {{TOPIC}})',
    'surface': 'dark, non-reflective desk'
  }

  AND lighting_purity = {
    'primary_source': 'vintage_film_projector (left)',
    'diegetic_percentage': '>= 95% (NO external studio fill lights)',
    'volumetric_beam': 'TRUE (blue/white cone, high Mie scattering)'
  }

  AND vignette_physics = {
    'scale': '1:35 (approx 50mm tall figures)',
    'cast': ['{{ORIGINAL_CHAR}}', '{{THREAT}}'],
    'debris_composition': 'classic_paper_tears INTERSECT genre_scifi_or_gore_props'
  }

  AND projection_target = {
    'medium': 'smoke_wall OR physical_screen (right side)',
    'text': '{{SLOGAN}}',
    'optics': 'projected_focal_distortion, light_falloff'
  };
