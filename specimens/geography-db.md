SELECT top_landmark FROM Geography_DB WHERE location = '[{{TOPIC}}]'
    FORMAT AS 'Large_Isometric_Perspective_With_Interior_Cutaway_Base'
)
AND floating_props = ARRAY[
    (SELECT famous_street_food FROM Culture_DB WHERE location = '[{{TOPIC}}]'),
    (SELECT iconic_transit FROM Culture_DB WHERE location = '[{{TOPIC}}]'),
    (SELECT local_wildlife FROM Culture_DB WHERE location = '[{{TOPIC}}]'),
    (SELECT traditional_clothing_items FROM Culture_DB WHERE location = '[{{TOPIC}}]')
]
AND compositional_rules = 'Scale_Defying_Floating_Elements_Surrounding_Anchor_High_Density';
