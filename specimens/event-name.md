WHERE historical_subject = '{{TOPIC}}'
AND culinary_medium = '[Event_Country's_Favorite_CUISINE_TYPEs]'
AND physical_constraints = 'Countries_100%_Edible_Ingredients_Only'
AND plating_base = (
    SELECT appropriate_dishware FROM Plating_DB WHERE style = '[CUISINE_TYPE]'
)
AND diorama_assets = ARRAY[
    (SELECT base_terrain FROM Subject_DB WHERE event = '{{TOPIC}}' FORMAT AS 'infer_staple_carb([CUISINE_TYPE])'),
    (SELECT primary_structure FROM Subject_DB WHERE event = '{{TOPIC}}' FORMAT AS 'infer_main_protein([CUISINE_TYPE])'),
    (SELECT human_figures FROM Subject_DB WHERE event = '{{TOPIC}}' FORMAT AS 'infer_vegetables_and_garnishes([CUISINE_TYPE])')
]
AND render_engine = 'Macro_Food_Photography_Studio_Lighting'
