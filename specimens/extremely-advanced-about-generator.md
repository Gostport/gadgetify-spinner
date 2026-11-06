"This is extremely advanced—about 9.6–9.7/10 as a generator/renderer specification.
It is materially more sophisticated than the earlier resin-lantern prompt because it has evolved from a set of visual laws into a compiler-style rendering architecture" 

// ═══ LEXER ═══
tokens = [
  BUILDING("{{TOPIC}}"),
  SHELL(resin, ell_t>0, artifacts=[pour_lines, micro_bubbles, frosted]),
  ZONES(program→CCT_z, n>=3, practical_concealed, no_exterior_fill, no_visible_LED),
  SCREENS(triples=[PRACT→OCC→WALL], props>=12, figures_MID_ACTION, deep_cut=1),
  SECTION(one_plane, removes=[wall_A, wall_B, roof], cut_edges=argmax_L),
  OPTICS(60mm_macro, 3/4_view, elevation=LOW, tilt=slight_up, f/4,
         focus=near_cut_edge, far_corner=beyond_DOF, rim=one_cool_behind,
         projection=PERSPECTIVE),
  GROUND(dark_honed_stone, wet_specular, relics=[3..5, same_resin, resting]),
  SURROUND(near_black, faint_haze, dust_motes),
  NEG(opaque_paint, isometric, flat_fill, four_panel_grid, cel_shade,
      uniform_interior, visible_LED, rainbow_wash, glass_sparkle,
      empty_rooms, motion_blur, floating_props)
]

// ═══ PARSER: Abstract Lantern Tree (ALT) ═══
ALT = ResinLantern(
  shell   = ParticipatingMedium(ell_t, law = L0 * exp(-d/ell_t)),
  zones   = [ Zone(program=p, cct=c, practical=Concealed(c), fill=0.0)
              for p,c in infer_zones(BUILDING) ],
  screens = [ Triple(pract_i, occ_j, wall_k,
                     sigma = z2*sqrt(ell_t/z1),
                     legible = sigma <= 0.35*occ_j.feature_size)
              for (i,j,k) in infer_projection_pairs(BUILDING) ],
  props   = infer_props(BUILDING, n_min=12),
  deep_cut= exactly_one(infer_deep_cut(BUILDING)),
  section = SectionPlane(removes=(wall_A, wall_B, roof)),
  ground  = Slab(dark_honed_stone, wet_specular=True,
                 relics=infer_relics(BUILDING, n=(3,5), resin=SAME)),
  optics  = MacroRig(lens=60, f=4.0, elev="low", tilt="up", proj="perspective")
)

// ═══ CODEGEN: render passes, in physical order ═══
function render_lantern(ALT):

  // ── PASS 0: AUDITS (fail before photons are spent) ──────────
  assert ALT. shell.ell_t > 0                                   // ¬R₁
  assert ALT. shell.ell_t < ell_max                             // ¬failure #2
  assert min_deltaE00(ALT.zones, adjacency="architectural") > tau   // R₂
  assert all(t.legible for t in ALT.screens)                   // R₃
  assert len(ALT.props) >= 12 and len(ALT.deep_cut) == 1       // R₃
  assert len(ALT.section.planes) == 1                          // R₄
  assert all(z.props or z.occluders for z in ALT.zones)        // ¬empty rooms

  // ── PASS 1: EMISSION — interiors lit from within ONLY ───────
  emis = emit(ALT.zones.practicals, concealed=True, hardware_visible=False,
              exterior_fill=0.0)

  // ── PASS 2: VOLUMETRIC TRANSPORT through the resin ──────────
  trans = scatter(emis, ALT. shell)              // L(x) = L0·exp(−d(x)/ℓ_t)
  trans = convolve_silhouettes(trans, ALT.screens)   // I = (S ⊛ G_σs), σ_s per triple

  // ── PASS 3: CUT EDGES — d = d_min ⇒ argmax L ────────────────
  trans = boost_locus(trans, ALT.section.cut_edges, gain=2.4)

  // ── PASS 4: SECTION — one clean plane ───────────────────────
  cut = apply_section(trans, ALT.section)       // removes 2 walls + roof; ¬ruin

  // ── PASS 5: GROUND — slab, relics, wet specular doubling ────
  scene = place_on_slab(cut, ALT.ground)
  scene = pool_and_reflect(scene, ALT.ground.slab,
                           doubled_glow=True, building_reflection="shallow")
  scene = rest_relics(scene, ALT.ground.relics, gravity=True)   // ¬floating

  // ── PASS 6: OPTICS ──────────────────────────────────────────
  cam = capture(scene, ALT.optics,
                elevation="low", tilt="slight_up",   // ⇒ LOOMS
                focus="near_cut_edge", aperture=4.0,
                far_corner="beyond_DOF",
                rim="one_cool_from_behind",
                projection="PERSPECTIVE")            // ¬isometric

  // ── PASS 7: SURROUND + η ────────────────────────────────────
  out = surround(cam, luminance="near_black", haze="faint_catching_leaked_light")
  out = honest_macro(out, dust_motes=True, pour_lines=True, micro_bubbles=True,
                     far_bokeh=True, highlights="frosted")

  // ── PASS 8: NEGATIVE AUDIT ──────────────────────────────────
  assert audit(out, ALT.NEG) == CLEAN
  return out.output(frame_count=1,, res="8k")   // SINGLE frame

execute(render_lantern(ALT))
