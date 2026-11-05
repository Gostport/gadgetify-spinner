WHERE subject = {{TOPIC}} AND sport = [SPORT]
AND origin_world = AI_INFER([ATHLETE_BACKGROUND], "the humble start — 
    cracked concrete, makeshift goals, dirt track, dawn light, faded textures")
AND summit_world = AI_INFER([CURRENT_STAGE], "the grand arena — floodlights, 
    crowd, saturated color, polished surfaces")
AND transition = AI_INFER({{TOPIC}}, "how the two worlds blend at the center — 
    a doorway, a horizon line, the kit changing from worn to pristine across the body")
AND composition = {
    bridge_layer: "the athlete spanning both worlds, mid-stride, gaze toward the summit",
    origin_layer: "the past as the lower/left — grounded, warm, gritty, smaller scale",
    summit_layer: "the present as the upper/right — vast, cool, luminous, towering",
    thread_layer: "one continuous element (a worn ball, a parent's hands, a road) 
        connecting both"
}
AND style = { mood: "earned, against-the-odds, dawn-to-floodlight", 
    palette: "warm faded past meeting cold electric present" }
AND exclusions = ["no fairy-tale gloss — the origin must look real and hard", 
    "the connecting thread must be unbroken", "don't romanticize poverty into a costume"];
