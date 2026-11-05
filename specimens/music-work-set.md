SELECT album_icon_panel_grid
FROM music_design_reinterpretation_archive
WHERE works = {{TOPIC}}
AND authorization_rule = {
  use_official_assets_only_if_supplied: true,
  otherwise: "create fictionalized symbolic interpretations inspired by the work's themes, not copied cover art"
}
AND per_panel_logic = {
  album_identity: AI_INFER([MUSIC_WORK], "core symbol, scene, object, pose, mood, or visual metaphor"),
  artist_label: [ARTIST],
  title_label: [MUSIC_WORK],
  simplification: "reduce original visual idea into clean emblematic geometry",
  composition: "single framed panel with title block and artist block",
  line_language: "bold black outlines, white negative space, geometric fills, decorative borders"
}
AND visual_style = {
  mode: [GRAPHIC_STYLE],
  palette: "black, white, grayscale only",
  texture: "screenprint, etched glass, linocut, Art Deco poster, stained-glass leading",
  layout: "clean multi-panel grid",
  typography: "ornamental uppercase display type with strong hierarchy"
}
AND exclusions = [
  "no direct copyrighted album art unless supplied",
  "no cluttered fan collage",
  "no photoreal musicians unless authorized",
  "no random symbols unrelated to the music work",
  "no weak title hierarchy",
  "no color unless explicitly requested"
];
