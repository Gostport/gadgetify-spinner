2x2 grid, 16:9, do this for highly underrated international spicy meals: void main() {
    string dish = "{{TOPIC}}";
    
    // Optical Materials
    vec4 ar_panel = refraction(frosted_glass) + opacity(0.7);
    vec3 food_material = subsurface_scattering(high) + moisture(glossy);
    vec3 toy_material = plastic_roughness(0.4) + visible_joints(true);
    
    // Semantic Generation
    vec3 ingredients = generateDeconstructed(dish, food_material);
    vec3 charts = generateFlavorRadar(dish);
    
    // Layout
    plateOn(slate_board, ingredients);
    placeActor(miniature_chef, toy_material, gripping: tongs);
    orbitUI(ar_panel, charts, around: plate);
    setBackground(depth_of_field: extreme, focus: foreground, prop: menu_box(dish));
}
Illumination: bright, soft, diffused studio lighting, making colors pop, subtle reflections on the plate, no harsh shadows::1.6
Render Stack: high-end food photography, top-down or 45-degree angle, extremely shallow DOF, hyper-realistic focus on the food textures::1.2
Negative: messy presentation, dark and moody lighting, plastic-looking food, cluttered background, cartoonish:: -1.2
