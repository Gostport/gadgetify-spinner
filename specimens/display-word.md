// 1. Central idea
IDEA = infer_distinctive_mechanism({{TOPIC}})
WORD = coalesce($ DISPLAY_WORD, derive_display_word({{TOPIC}}, length=4..9))
HERO = infer_dominant_hero(IDEA)
CAST = infer_supporting_cast(IDEA, count=2..5)
SCENE = infer_explanatory_scene(IDEA)   // process, interaction, comparison, ecosystem, transformation
SETTING = infer_setting({{TOPIC}})
MATERIAL = infer_primary_material({{TOPIC}})

// 2. Word as monument
MONUMENT = build_block_letters(WORD, width=0.85..0.95, depth='substantial',
             spacing='close', baseline='gently_rising_or_irregular')
DETAIL = integrate_one_meaningful_inset(MONUMENT, IDEA)   // in one letter opening

// 3. Upper subjects
UPPER = arrange_hero_and_cast(HERO, CAST, region='upper_right_or_central',
          rule='varying scale, expressive silhouette, contact + occlusion')

// 4. Lower explanatory scene
LOWER = build_stage(SCENE, scale='much_smaller', style='visible_action_or_relationships')

// 5. Connecting structure
THREAD = infer_topic_appropriate_thread({{TOPIC}})   // root, cable, river, conduit, vine, rail, blood vessel
LINKED = thread_through_letters(THREAD, MONUMENT, UPPER, LOWER, preserve_openings=true)

// 6. Environment and palette
GROUND = infer_foreground_support({{TOPIC}})
BG = infer_distant_environment({{TOPIC}}, depth='atmospheric, quieter detail')
PALETTE = {dominant: MATERIAL, support: SETTING, accents: 2..4 focal}
LIGHT = directional_reveal_letters_and_subjects()

// 7. Inscription (optional)
PLAQUE = optional_inscription(IDEA, length=3..7)
// omit if redundant; never invent quotes or facts

// 8. Art direction
CAMERA = nearly_frontal_slightly_low
HEADROOM = preserve_above_tallest_subject
HIERARCHY = word > hero > cast > lower scene > environment details
VALIDATE = word_spelling, thumbnail_readability, topic_belonging, physical_relationships
Render 8K, polished editorial 3D.
