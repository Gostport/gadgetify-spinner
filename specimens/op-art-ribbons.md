{INPUT: $ SUBJECT
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
Do not render M directly.
Its geometry exists only to
control the optical stripe system.
// ========================================================
// 3. CONSTRUCT CONTINUOUS RIBBON FIELD
// ========================================================
Generate dense alternating
black-and-white contour ribbons.
F(p) =
  surface_tangent(M,p)
  + curvature_guidance(K(p))
  + feature_attraction(H(p))
  + silhouette_boundary_constraint(M)
  + optical_vortex_forces(p)
Integrate streamlines:
  γ'(t) = normalize(F(γ(t)))
RIBBONS = generate(
  80..260_continuous_stripes,
  smooth_curvature = TRUE,
  adaptive_width = TRUE
)
Width response:
  near_camera → wider bands
  distant → thinner bands
  convexity → expanding spacing
  concavity → compressed spacing
  deep_cavity → high line density
  sharp_feature → tight contour bending
The stripes are structural,
not decorative.
// ========================================================
// 4. SUBJECT EMERGENCE THROUGH DEFORMATION
// ========================================================
For each recognizable feature f:
  LOCAL_FIELD = deform(F, around=f)
  IF f is cavity:
    create nested inward spirals
  ELIF f is protrusion:
    bend ribbons outward
    and around the volume
  ELIF f is sharp edge:
    accelerate stripe convergence
  ELIF f is organic surface:
    use smooth anatomical flow
  ELIF f is mechanical:
    create precise folded ribbons
  ELIF f represents motion:
    stretch the field along
    its characteristic trajectory
Do not draw the object and
overlay a striped texture.
The object must emerge because
the bands themselves transform.
// ========================================================
// 5. OPTICAL DEPTH ENGINE
// ========================================================
DEPTH(p) =
  stripe_frequency_variation(p)
  + overlap_occlusion(p)
  + contour_convergence(p)
  + black_white_area_balance(p)
Create perceived volume through:
  bands folding over one another,
  nested contour cavities,
  sharply pinched line bundles,
  alternating convex/concave regions,
  deep optical tunnels,
  irregular wave interference.
No conventional gray shading.
No photographic surface textures.
All dimensionality must be created
by black-and-white geometry.
// ========================================================
// 6. RECOGNIZABLE FEATURE PRESERVATION
// ========================================================
FEATURES = DNA.hierarchy[0..5]
For each major feature:
  increase local stripe precision
  preserve anatomical or
  structural relationships
  allow tiny black regions
  where necessary for recognition
Example visual transformations:
  eye → concentric vortex
  mouth → compressed ribbon cavity
  wing → branching directional bands
  horn → tapered rising stripe bundles
  wheel → rotating contour system
  tower → elongated vertical wave geometry
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
  pure black = #000000
  pure white = #FFFFFF
COLOR_COUNT = 2
CONTRAST = maximum
LINE_STYLE:
  continuous
  fluid
  dense
  precise
  variable thickness
  ultra-smooth curvature
SURFACE:
  high-resolution optical engraving
  razor-sharp black-and-white artwork
DEPTH:
  extreme illusionistic relief
  without realistic lighting
BACKGROUND:
  integrated into the same line field
ASPECT_RATIO:
  inferred from subject proportions.
// ========================================================
// 9. QUALITY ASSERTIONS
// ========================================================
ASSERT:
  subject_readability = HIGH;
  stripe_continuity = VERY_HIGH;
  optical_depth = EXTREME;
  anatomy_accuracy = HIGH;
  line_detail_density = EXTREME;
  color_count = 2;
REJECT:
  ordinary zebra patterns,
  striped textures pasted on objects,
  random wavy backgrounds,
  disconnected decorative lines,
  gray gradients,
  realistic material shading,
  generic concentric circles,
  unrecognizable silhouettes.
// ========================================================
// 10. OUTPUT
// ========================================================
RENDER a hyper-detailed monochrome
Op-Art sculpture of $ SUBJECT.
The entire image must behave like
one continuous optical fabric.
Every recognizable surface,
feature, cavity, and contour emerges
from the bending and compression
of hundreds of black-and-white ribbons.
At a distance:
  recognizable iconic subject.
At medium scale:
  powerful volumetric illusion.
At close range:
  astonishing continuous line physics.
FINAL TRANSFORMATION:
SUBJECT ANATOMY
→ INVISIBLE 3D SURFACE
→ CONTINUOUS RIBBON FIELD
→ OPTICAL DEFORMATION
→ SCULPTURAL SUBJECT EMERGENCE
}
