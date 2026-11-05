CREATE TEMP VIEW subject_analysis AS
SELECT
  INFER_MAIN_SILHOUETTE(:SUBJECT)        AS silhouette,
  INFER_INTERNAL_ZONES(:SUBJECT)         AS zones,
  INFER_TINY_ACTORS(:SUBJECT)            AS actors,
  INFER_SYMBOLIC_PROPS(:SUBJECT)         AS props,
  INFER_MOVEMENT_PATHS(:SUBJECT)         AS routes;

CREATE TEMP VIEW plate_base AS
SELECT
  BUILD_SERVING_STAGE(
    plate = 'matte black ceramic plate',
    ground = 'sushi rice terrain with sesame scatter',
    lighting = 'premium food photography, dark background, soft overhead highlights'
  ) AS plate
FROM subject_analysis;

CREATE TEMP VIEW edible_structure AS
SELECT
  CONVERT_TO_SUSHI_ARCHITECTURE(
    silhouette,
    material_map = ARRAY[
      'pressed rice blocks for walls and mass',
      'salmon and tuna sashimi for smooth surfaces',
      'tamago for roofs, panels, platforms',
      'nori strips for beams, supports, outlines, flags',
      'cucumber for rails, wheels, columns, arcs',
      'roe and sesame for small lights, stones, crowds, particles'
    ],
    construction = 'precise knife-cut edible miniature'
  ) AS sushi_subject
FROM subject_analysis;

CREATE TEMP VIEW cutaway_world AS
SELECT
  BUILD_EDIBLE_ROOMS(
    zones,
    style = 'tiny isometric dollhouse spaces made of food',
    actors = 'small rice-and-nori figures',
    props = 'food-based mini props inferred from subject'
  ) AS rooms,

  ADD_ROUTE_SYSTEM(
    routes,
    material = 'thin cucumber paths, nori rails, sauce lines, sashimi roads'
  ) AS paths
FROM subject_analysis;

RENDER
  plate_base.plate,
  edible_structure.sushi_subject ON plate_base.plate,
  cutaway_world.rooms INSIDE edible_structure.sushi_subject,
  cutaway_world.paths AROUND edible_structure.sushi_subject
WITH
  CAMERA = 'macro food photography, three-quarter view',
  PALETTE = 'black plate, white rice, salmon orange, tuna red, nori black, cucumber green, roe orange',
  DETAIL = 'tiny edible craftsmanship, clean plating, playful narrative clarity';

-- OUTPUT RULES:
-- 1. {{TOPIC}} becomes an edible sushi diorama.
-- 2. Keep the subject readable through silhouette and major structural features.
-- 3. Convert interior logic into tiny food-built rooms, decks, paths, and platforms.
-- 4. Add tiny food characters performing inferred actions.
-- 5. Use elegant plating and premium culinary lighting.
-- 6. Avoid messy food piles, random ingredients, full-scale realism, and flat cartoon rendering.
