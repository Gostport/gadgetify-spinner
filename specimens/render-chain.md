RENDER_CHAIN = "[{{TOPIC}} :: flow_strips :: nested_quilling_sculpture :: raking_macro]"

FUSION_RULES = {
    "flow_analysis": "compute edge-direction field θ and curvature field κ across {{TOPIC}}; derive flow vector field F = ∇θ; curl(F) drives coil tightness, divergence(F) drives coil spacing",
    "strip_conversion": "convert every streamline of F into a tightly coiled quilling strip; coil radius = 1/|κ| at that point; strip follows the flow without breaking it",
    "recursion": "each large coil recursively contains 2–4 smaller nested coils aligned to the same local flow direction; recursion depth capped so the silhouette stays readable",
    "material": "dyed paper quilling strips, satin finish, low specular, visible fibrous edges; gilded tips (gold leaf) at terminal ends of strips only; no other material",
    "support": "shallow white plinth, no visible armature, no wire, no plastic",
    "lighting": "global illumination + soft top fill; hard raking key from ~20° above horizon, aligned to F; reveals micro-relief on every coil edge and paper fiber",
    "camera": "shallow DOF f/1.8; focal plane on the nearest coil edge cluster; paper fibers resolved at the focal plane; background coils fall into soft bokeh",
    "result": "a quilled-paper sculpture of {{TOPIC}} in which every curve becomes nested spirals of razor-clean paper geometry",
    "negative": "wire armature, plastic, glossy resin, painted illustration, flat 2D, 3D render sheen, blurred paper fibers, random coils off-flow, pasted-on decoration"
}

OUTPUT = (RENDER_CHAIN :: FUSION_RULES) - NEGATIVE_SET
RENDER: ONE macro photograph of the sculpture.
