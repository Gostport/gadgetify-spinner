2x2 grid, 16:9, do this for 4 topics in the news this week: <manga_page format="B5" margins="printer_safe" bleed_panels="max_1" render="{{TOPIC}}">

  <flow_field>
    <scalar_potential>Phi(x,y) = narrative_tension({{SLICE_BEAT}}, {{EMOTIONAL_TURN}})</scalar_potential>
    <reading_vector>F = grad(Phi)  <!-- Points Top-Right to Bottom-Left --></reading_vector>
    <deformation>curl = curl(Phi)  <!-- Drives panel tilt and SFX distortion --></deformation>
    <intensity>div = div(F)        <!-- Drives screentone density and hatching --></intensity>
  </flow_field>

  <panel_decomposition count="4_to_6">
    <panel id="establishing" area="15%" fidelity="full_render" border="standard"/>
    <panel id="mid_action" area="25%" fidelity="tone_only" border="tilted_if_curl_high"/>
    <panel id="emotion_turn" area="40%" fidelity="blank_background" border="bleed_or_borderless"/>
    <panel id="reaction" area="20%" fidelity="close_up" border="standard"/>
  </panel_decomposition>

  <character_lock>
    <silhouette>fixed_isocontour_of_Phi</silhouette>
    <anchor>{{CHAR_SEED}}_hair_and_accessory</anchor>
  </character_lock>

  <ink_and_tone>
    <mass>pure_black (hair, deep dread)</mass>
    <screentones>10_percent, 30_percent, 50_percent ONLY</screentones>
    <hatching>divergence_spikes (embarrassment/shock)</hatching>
    <lines>speed (parallel to F), focus (radiating from singularities)</lines>
  </ink_and_tone>

  <typography_and_sfx>
    <sfx>distorted_glyphs_along_curl_field, perspective_deformed</sfx>
    <balloons>max_3_shapes, placed_on_F_streamlines, tails_to_mouth</balloons>
  </typography_and_sfx>

</manga_page>
