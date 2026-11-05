WHERE franchise = '{{TOPIC}}'
AND publication_era = '[YEAR]'
AND ground_plane = 'Wooden_Desk_Surface'
AND foundational_assets = ARRAY[
    'Open_Hardcover_Book_Laying_Flat',
    'Vintage_Flat_Comic_Book_Issue_Laying_Nearby'
]
AND structural_3D_extrusion = (
    SELECT iconic_battleground FROM Lore_DB 
    WHERE series = '{{TOPIC}}' 
    FORMAT AS '3D_Environment_Emerging_From_Paper_Pages'
)
AND character_assets = (
    SELECT heroes, villains, powers FROM Lore_DB
    WHERE series = '{{TOPIC}}' AND era = '[YEAR]'
    FORMAT AS '3D_Vinyl_Action_Figures_With_Translucent_Resin_Power_FX'
)
AND typographic_overlays = ARRAY[
    'Floating_3D_Plastic_Text_"[SFX_TEXT]"',
    'Floating_Flat_Yellow_Title_Box_Top_Corner'
];
