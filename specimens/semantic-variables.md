domain:      chronophotography × sports_science_viz × motion_capture_editorial
  intent:      analyze + aestheticize + prove (motion as physics document)
  lineage:     Marey (photographic gun) → Edgerton (stroboscope) → modern mocap
  audience:    biomechanists, sports editors, kinetic design collectors
  platform: single composite frame
  complexity:  extreme (5-phase temporal stacking + bezier trajectory +
                        force-vector typography + per-phase material optics)
}

CORE DESIGN LAWS (IMMUTABLE): Research for visual and numerical accuracy
  ⚠ TIME IS THE SUBJECT. THE BODY IS THE TRACE.
  • 5 phases, ONE continuous body, transparency decay 0.82^(n-1)
  • Trajectory = cubic bezier, phase spacing COMPRESSES at peak force
  • Negative space EXPANDS post-impact (the exhale after the event)
  • Optics evolve per phase: crisp → stress-glow blur → fragmentation
  • Typography: technical indexing, N/Pa labels, baseline on tangent

SEMANTIC_VARIABLES:
  {{TOPIC}}  → [e.g., Olympic hammer throw, final spin to release]
  {{PRINCIPLE}}        → [e.g., centripetal accumulation + angular momentum transfer]
  {{CONTEXT}}          → [e.g., World Championship final, evening stadium]
  {{PHASES[5]}}        → AI infers from initiation → peak → resolution
  {{TRAJECTORY}}       → bezier control points from mocap + physics sim
  {{FORCE_LABELS[]}}   → Newton/Pascal values at each vector origin
  {{SUBJECT_MATERIAL}} → skin/fabric/chalk/equipment response to stress

INFERENCE_EXAMPLE ({{TOPIC}} = "hammer throw release"):
  {{PHASES}} = [1: weight-back entry (crisp)
                2: first orbit acceleration
                3: low-point PEAK — wire tension ≈2500N, GRF ≈4000N (stress glow)
                4: release preparation, hips leading
                5: RELEASE — chalk fragmentation, atmospheric diffusion]
  {{TRAJECTORY}} = hammer-head spiral → release tangent → exit frame
  negative_space = expands upper-right post-release (the empty sky the hammer left)
