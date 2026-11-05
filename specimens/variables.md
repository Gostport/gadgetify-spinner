class Variables:
    subject_domain   = "{{TOPIC}}"
    hero_object      = "[HERO_OBJECT]"
    title_words      = "derive concise display title from hero_object"
    primary_material = "[PRIMARY_MATERIAL]"
    crew_role        = "[CREW_ROLE]"
    book_style       = "[BOOK_STYLE]"
    section_count    = "[SECTION_COUNT]"
    photo_style      = "{{WARM_MACRO_EDITORIAL_DIORAMA}}"
    annotation_style = "[ANNOTATION_STYLE]"

class Book:
    form = "open heavyweight reference book"
    material = "aged paper, thick pages, tactile cover"
    layout = {
        "left_page":  "specifications + ingredients/components + assembly notes + overhead diagram",
        "right_page": "hero specimen + crew interaction + technical cross-section + dimension labels"
    }

class Typography:
    headline = "title_words rendered as freestanding 3D letters"
    material = Variables.primary_material
    placement = "across the top edge of the open book"
    quality = ["chunky", "physical", "tactile", "crafted"]

class Specimen:
    identity = Variables.hero_object
    placement = "right page center"
    scale = "monumental relative to miniature crew"
    realism = "highly detailed surface, crisp edges, appetizing/buildable material truth"

class Crew:
    role = Variables.crew_role
    count = "AI choose a small believable team"
    interaction = [
        "inspect specimen",
        "assemble or maintain details",
        "use ladders/tools/lifting gear if semantically justified"
    ]

class Documentation:
    sections = "AI infer section_count technical manual headers from subject_domain"
    diagrams = [
        "top view or construction sketch",
        "cross-section of hero_object",
        "dimensional arrows and labels",
        "short pseudo-manual body text"
    ]
    text_rule = "do not hard-code content; derive all labels from hero_object structure"

def render():
    return """
    Generate an open-book technical-manual diorama where a monumental hero specimen is documented,
    assembled, and celebrated through material typography, miniature workers, and schematic annotations.
    """
