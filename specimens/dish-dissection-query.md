-- DISH_DISSECTION_QUERY.sql
-- Subject: Beef Wellington (Technical Cutaway Render)
WITH layers AS (
SELECT layer_order, material, thickness_mm, temperature_celsius, structural_role
FROM construction_blueprint
WHERE dish_id = 'beef_wellington_v2'
ORDER BY layer_order DESC
),
rendering_specs AS (
-- OUTER LAYER (Layer 7)
SELECT 'Puff Pastry' AS component,
'3mm' AS thickness,
'Golden brown (Maillard reaction complete)' AS color,
'Flaky, 127 layers visible in cross-section' AS texture,
'Structural housing, moisture barrier' AS function,
'195°C internal temp' AS state
UNION ALL
-- LAYER 6
SELECT 'Crêpe Wrapper',
'0.5mm',
'Pale beige, slightly translucent',
'Smooth, acts as moisture barrier',
'Prevents soggy pastry from duxelles',
'88°C'
UNION ALL
-- LAYER 5
SELECT 'Duxelles (Mushroom Paste)',
'4mm',
'Dark brown, almost black',
'Paste-like, finely minced mushrooms + shallots',
'Flavor layer, aromatic base',
'85°C'
UNION ALL
-- LAYER 4
SELECT 'Prosciutto Crust',
'1mm (3 slices overlapped)',
'Deep pink to brown gradient',
'Translucent, salty, clings to beef',
'Salt barrier, flavor enhancement',
'82°C'
UNION ALL
-- LAYER 3
SELECT 'Dijon Mustard Coating',
'0.3mm',
'Yellow-brown, glossy',
'Wet, vinegary sheen',
'Flavor, acid balance',
'80°C'
UNION ALL
-- CORE (Layers 1-2)
SELECT 'Beef Tenderloin (Center)',
'50mm diameter',
'Gradient: Seared brown crust (2mm) → Pink medium-rare core',
'Muscle fibers visible, juice pockets, marbled fat streaks',
'Primary protein, star of dish',
'Outer: 71°C, Core: 52°C (perfect medium-rare)'
)
-- CROSS-SECTION VISUALIZATION INSTRUCTIONS
SELECT
'CAMERA ANGLE: 90° perpendicular to cut surface' AS instruction_1,
'LIGHTING: Macro ring light (eliminates shadows in crevices)' AS instruction_2,
'FOCUS: f/8 aperture for deep DOF, all layers sharp' AS instruction_3,
'STYLING: Droplets of juice escaping beef, steam rising (frozen mid-air)' AS instruction_4,
'BACKGROUND: Matte black to emphasize layers, OR anatomical diagram grid' AS instruction_5,
'ANNOTATIONS: Thin white lines pointing to each layer with labels in Helvetica' AS instruction_6,
'COLOR GRADING: Hyper-saturate the beef pink, preserve pastry gold' AS instruction_7
FROM rendering_specs;
-- OPTIONAL: Add measurements overlay
-- Each layer labeled with precise thickness in millimeters
-- Temperature gradient shown with false-color thermal overlay (red=hot, blue=cool)
-- RENDER OUTPUT
-- Resolution: 8K macro photography
-- Style: Surgical precision meets gourmet porn
-- Mood: Educational + aspirational
