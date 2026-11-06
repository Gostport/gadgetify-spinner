domain:      op_art × psychophysical_design × vector_geometry × perceptual_attack
  intent:      induce + fatigue + disorient (controlled retinal vibration, tunnel vision)
  audience:    gallery curators, album-art directors, editorial designers, rave poster market
  platform: screen-native square, large-format poster
  complexity:  extreme (angular quantization, ring-meshing constraints, luminance-sawtooth
                        color sequencing, hard-edge purity, single-origin radial symmetry)
}

CORE DESIGN LAWS (IMMUTABLE):
  ⚠ ONE ORIGIN. HARD EDGES. THE CYCLE IS THE ENGINE.
  • Symmetry: strict radial from a SINGLE infinite point at exact frame center.
  • Rings: 20–30 dense concentric bands; {{SHAPE_MODULE}} interlocks ring-to-ring (zipper).
  • Contrast: maximum; brightest adjacent to darkest; colors cycle in a repeating 4-period.
  • Purity: 2D vector ONLY. ¬3D ¬shadows ¬texture ¬smooth gradients (vignette excepted).
  • Atmosphere: corner vignette → tunnel vision; vibe = psychedelic, mathematical.

SEMANTIC_VARIABLES (AI infers from {{TOPIC}}):
  {{TOPIC}}        → [e.g., Vertigo, Hypnosis, Panic, Euphoria]
  {{SHAPE_MODULE}}   → repeating unit [sawtooth, sine, dots, chevrons, stairs]
  {{PALETTE[4]}}     → 4-color high-contrast scheme
  {{MOTION_VECTOR}}  → implied motion [spiral inward, radiate outward, vibrating static]
  {{RING_COUNT}}     → integer ∈ [20, 30]
  {{COLOR_CYCLE}}    → repeating 4-period order (its luminance order = drift direction)
  {{PHASE_DRIFT}}    → per-ring angular phase increment (encodes the motion vector)

INFERENCE_EXAMPLE ({{TOPIC}} = "VERTIGO"):
  {{SHAPE_MODULE}} = "inward-pointing sawtooth teeth (descending stair profile)"
  {{PALETTE}}      = [signal_yellow # FFD400, jet_black # 0A0A0A,
                      ultramarine # 002FA3, paper_white # F8F6F0]
  {{MOTION_VECTOR}}= "spiral inward (descent)"
  {{RING_COUNT}}   = 26
  {{COLOR_CYCLE}}  = yellow → black → white → ultramarine → repeat
