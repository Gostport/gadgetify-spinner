2x2 grid, 16:9, AI picks subjects class ErrorDialogTShirt:
    def __init__(self, topic):
        self.topic = topic
        self.research = do_for_every_topic
        self.error_code = infer_funny_error_number(topic)               # 404, 418, 503...
        self.message = derive_system_message_about_topic_failure(topic) # "MOTIVATION.EXE has stopped responding"
        self.buttons = invent_two_bad_choices(topic)                     # {{TOPIC}} {{IGNORE_FOREVER}}
        self.icon = choose("warning triangle", "bomb", "stop hand", "hourglass")
        self.cursor = infer_cursor_state(topic)                          # spinning wait, hovering over wrong button
 
    def shirt_surface(self):
        return {
            "garment": "light grey / silver heather T-shirt",
            "camera": "front flat-lay next to a mechanical keyboard",
            "fabric": "soft jersey, gentle wrinkles",
        }
 
    def print_design(self):
        return {
            "ink": "pixel-exact screenprint: classic system grey, navy title bar, black, white",
            "layout": "bevelled window / title bar with fake X / icon + message / two buttons",
            "texture": "crisp pixel edges, slight CRT scanline ghost",
        }
 
    def render(self):
        return """
        Render a retro computer error-dialog T-shirt:
        a 90s-style system pop-up (no real OS branding) reporting the topic
        as a crashed program, funny error code, two equally bad buttons,
        pixel font, bevelled grey window, cursor caught in the joke.
        """
