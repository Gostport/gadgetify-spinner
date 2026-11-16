{INPUT: $ SUBJECT
// ========================================================
// CHROMATIC PRISM RIBBONS — v1.1
// Derivative of gadgetify Op-Art Ribbons
// Changelog: B/W ink -> translucent prismatic glass,
// color encodes curvature/depth, depth via refraction
// ========================================================
// 1. SEMANTIC GEOMETRY EXTRACTION
// ========================================================
S = analyze($ SUBJECT)
DNA = {
  identity : core_visual_identity(S),
  silhouette : most_recognizable_shape(S),
  anatomy : defining_structural_features(S),
  motion : characteristic_directional_behavior(S),
  symbols : infer_related_symbols(S, 5..10),
  emotion : infer_visual_intensity(S),
  geometry : dominant_curvature_and_topology(S),
  hierarchy : rank_recognizable_features(S)
}
HERO = select_best_visual_representation(DNA)
IF subject_is_abstract:
  HERO = construct_physical_metaphor(S)
ELIF subject_is_process:
  HERO = construct_flowing_transformation(S)
ELIF subject_is_place:
  HERO = infer_iconic_spatial_structure(S)
ELSE:
  HERO = preserve_subject_identity(S)
// ========================================================
// 2. BUILD THE INVISIBLE 3D STRUCTURE
// ========================================================
M = construct_implicit_surface(HERO)
M.features = {
  major_volumes,
  characteristic_edges,
  cavities,
  protrusions,
  overlapping_forms,
  depth_transitions
}
Generate smooth spatial coordinates.
For point p on M:
  N(p) = surface_normal(p)
  K(p) = local_curvature(p)
  D(p) = camera_depth(p)
  H(p) = semantic_feature_importance(p)
  R(p) = refractive_index_variation(p)
Do not render M directly.
Its geometry exists only to
control the prismatic ribbon system.
// ========================================================
// 3. CONSTRUCT CONTINUOUS PRISMATIC RIBBON FIELD
// ========================================================
Generate dense translucent
glass ribbons in spectral progression.
NOT black-and-white. NOT random rainbow.
COLOR(p) = spectral_map(K(p), D(p), H(p)):
  convex / protruding / outward curve
    -> WARM: magenta, red-orange, amber
  concave / cavity / receding depth
    -> COOL: cyan, indigo, violet-blue
  flat / transitional surface
    -> MID: yellow-green, teal-green
  sharp_feature / high H(p)
    -> abrupt hue shift + bright white
       specular glass edge
Color must follow geometry everywhere.
A hue change always means a
curvature, depth, or feature change.
F(p) =
  surface_tangent(M,p)
  + curvature_guidance(K(p))
  + feature_attraction(H(p))
  + silhouette_boundary_constraint(M)
  + refraction_deflection(R(p))
Integrate streamlines:
  γ'(t) = normalize(F(γ(t)))
RIBBONS = generate(
  80..260_continuous_stripes,
  smooth_curvature = TRUE,
  adaptive_width = TRUE,
  translucent = TRUE
)
Width response:
  near_camera → wider, clearer, thicker glass edge
  distant → thinner, more saturated, compressed
  convexity → expanding spacing, warming hue
  concavity → compressed spacing, cooling hue
  deep_cavity → high density, deep indigo/violet
  sharp_feature → tight bending + prismatic fringe split
The ribbons are structural,
not decorative.
// ========================================================
// 4. SUBJECT EMERGENCE THROUGH DEFORMATION
// ========================================================
For each recognizable feature f:
  LOCAL_FIELD = deform(F, around=f)
  IF f is cavity:
    create nested inward spirals,
    shifting cooler and darker with depth
  ELIF f is protrusion:
    bend ribbons outward and around
    the volume, shifting warmer and brighter
  ELIF f is sharp edge:
    accelerate convergence and split
    the ribbon edge into a spectral fringe
  ELIF f is organic surface:
    use smooth anatomical flow,
    gradual hue transitions
  ELIF f is mechanical:
    create precise folded glass ribbons,
    abrupt hue transitions
  ELIF f represents motion:
    stretch the field and its spectrum along
    its characteristic trajectory
Do not draw the object and
overlay a striped texture.
The object must emerge because
the glass bands themselves transform.
// ========================================================
// 5. OPTICAL DEPTH ENGINE — REFRACTION
// ========================================================
DEPTH(p) =
  stripe_frequency_variation(p)
  + refraction_displacement(p)
  + overlap_color_mixing(p)
  + caustic_brightness(p)
  + transparency_layering(p)
Create perceived volume through:
  bands refracting over one another,
  new secondary hues where translucent
    ribbons overlap and mix,
  nested contour cavities in deep cool tones,
  sharply pinched line bundles,
  alternating convex (warm) / concave (cool) regions,
  deep optical tunnels cooling to violet,
  faint caustic light patterns inside ribbons.
No opaque shading.
No photographic surface textures.
No gray gradients.
All dimensionality must be created
by refraction, transmission, and
geometry-bound color.
// ========================================================
// 6. RECOGNIZABLE FEATURE PRESERVATION
// ========================================================
FEATURES = DNA.hierarchy[0..5]
For each major feature:
  increase local ribbon precision
  preserve anatomical or
  structural relationships
  allow tiny opaque white or
  deep violet anchor regions
  where necessary for recognition
Example visual transformations:
  eye → concentric prismatic vortex,
        cool center, warm rim
  mouth → compressed ribbon cavity,
        deepening to indigo
  wing → branching directional bands,
        warming toward the tips
  horn → tapered rising bundles,
        amber to magenta
  wheel → rotating contour system,
        spectrum cycling with rotation
  tower → elongated vertical wave geometry,
        cool base to warm apex
Examples are procedural,
not mandatory subject elements.
// ========================================================
// 7. COMPOSITION SELECTION
// ========================================================
CLASS = classify(S)
IF CLASS == portrait:
  extreme macro feature composition
ELIF CLASS == animal_or_creature:
  dynamic three-quarter anatomical view
ELIF CLASS == object:
  sculptural close-up
ELIF CLASS == architecture:
  perspective-distorted contour structure
ELIF CLASS == abstract_concept:
  semantic vortex or optical metaphor
ELIF CLASS == landscape:
  layered topographic ribbon field
ELSE:
  select most recognizable composition
The actual topology is determined
by subject geometry.
// ========================================================
// 8. PRINT & OPTICAL STYLE
// ========================================================
PALETTE:
  full controlled spectrum,
  assigned by COLOR(p) rule in Sec. 3
  core hues = magenta, red-orange, amber,
    yellow-green, teal, cyan, indigo, violet
COLOR_COUNT = spectral, geometry-bound
CONTRAST = maximum saturation against ground
LINE_STYLE:
  continuous
  fluid
  dense
  precise
  variable thickness
  ultra-smooth curvature
  razor-sharp glass edges
SURFACE:
  polished translucent glass / acrylic ribbons
  high-resolution optical refraction artwork
  internal refraction streaks, no texture
DEPTH:
  extreme illusionistic relief
  without opaque lighting or shading
BACKGROUND:
  luminous white field, integrated into
  the same ribbon field, with faint
  prismatic caustics bleeding outward
  from the subject
ASPECT_RATIO:
  inferred from subject proportions.
// ========================================================
// 9. QUALITY ASSERTIONS
// ========================================================
ASSERT:
  subject_readability = HIGH;
  ribbon_continuity = VERY_HIGH;
  optical_depth = EXTREME;
  anatomy_accuracy = HIGH;
  line_detail_density = EXTREME;
  color_mapping_consistency = VERY_HIGH;
  transparency_layering = HIGH;
REJECT:
  ordinary zebra patterns,
  black-and-white op-art,
  striped textures pasted on objects,
  random rainbow gradients,
  rainbow decoration unrelated to geometry,
  disconnected decorative lines,
  gray gradients,
  opaque material shading,
  muddy / brown overlap mixing,
  generic concentric circles,
  unrecognizable silhouettes.
// ========================================================
// 10. OUTPUT
// ========================================================
RENDER a hyper-detailed chromatic
prismatic glass-ribbon sculpture of $ SUBJECT.
The entire image must behave like
one continuous translucent optical fabric.
Every recognizable surface,
feature, cavity, and contour emerges
from the bending, compression,
refraction, and color-mixing
of hundreds of glass ribbons.
At a distance:
  recognizable iconic subject.
At medium scale:
  powerful volumetric illusion in color.
At close range:
  astonishing continuous line physics
  and prismatic overlap.
FINAL TRANSFORMATION:
SUBJECT ANATOMY
→ INVISIBLE 3D SURFACE
→ CONTINUOUS PRISMATIC GLASS RIBBON FIELD
→ REFRACTIVE COLOR DEFORMATION
→ SCULPTURAL SUBJECT EMERGENCE
}
