# Semantic_History_Sculpture_DNA
class Adaptive_Timeline_Artifact:

    def __init__(self):
        self.accuracy_search: "TRUE"
        self.subject = "{{TOPIC}}"
        self.time_range = "[OPTIONAL START / END DATE or AI_INFER]"
        self.milestone_count = "[OPTIONAL or AI_INFER]"

        self.parents = {
            "museum_parent":
                "Luxury historical exhibition display — museum object photography, archival elegance, tactile artifacts, restrained labels, curated chronology",
            "timeline_parent":
                "Physical chronology made spatial — milestone objects arranged along one continuous visual journey rather than a conventional horizontal infographic",
            "editorial_parent":
                "Elegant historical publication — oversized serif title, fine date labels, concise captions, sophisticated negative space",
            "diorama_parent":
                "Miniature 3D artifact collection — physically believable objects, handcrafted scale, soft cast shadows, rich materials, collector-display precision",
            "metaphor_parent":
                "The overall path geometry is semantically inferred from the subject rather than fixed"
        }

        self.mutations = {
            "layout_mutation":
                """
                AI_INFER the most meaningful spatial metaphor for {{TOPIC}}.
                Possible structures include but are not limited to:
                sound / music -> waveform, acoustic arc, groove, spiral
                aviation -> ascending flight trajectory
                space exploration -> orbital path / expanding solar system
                transportation -> road, rail, route map, switchback
                computing -> circuit trace / branching network
                communication -> signal wave / connected nodes
                architecture -> evolving skyline
                art history -> gallery wall / brushstroke ribbon
                biology -> evolutionary tree / DNA helix
                medicine -> anatomical pathway / pulse line
                fashion -> flowing fabric ribbon / runway
                cinema -> film strip / projection beam
                photography -> aperture spiral / film reel
                weapons -> ballistic trajectory / arsenal progression
                literature -> unfolding pages / bookshelf chronology
                philosophy -> branching argument tree / concentric thought rings
                food -> recipe chain / ingredient transformation
                energy -> power-flow diagram
                ocean exploration -> descending depth profile
                mountain history -> ascending elevation profile
                civilization -> river / road / layered archaeological strata
                Do NOT choose these mechanically.
                Infer a fresh spatial metaphor from the subject's actual semantic structure.
                """,
            "object_mutation":
                """
                AI_INFER the landmark artifacts, inventions, people, organisms,
                buildings, tools, vehicles, devices, cultural objects,
                discoveries, symbols, or turning points that best represent
                the evolution of {{TOPIC}}.
                """,
            "chronology_mutation":
                """
                Allocate spatial distance according to historical significance,
                not merely equal year intervals.
                Major transitions receive more visual emphasis.
                Quiet transitional periods may compress.
                """,
            "artifact_mutation":
                """
                Render each milestone as a miniature physical artifact,
                model, sculptural icon, specimen, or environmental fragment
                appropriate to the subject.
                Avoid reducing everything to flat icons.
                """,
            "annotation_mutation":
                """
                Generate date / era,
                short milestone name,
                optional one-line descriptor,
                inventor / creator / location / event where relevant.
                Keep labels restrained and museum-like.
                """,
            "origin_mutation":
                """
                AI_INFER a meaningful visual origin artifact.
                This may be:
                an opened archive box,
                excavation case,
                antique book,
                workshop drawer,
                specimen cabinet,
                instrument case,
                shipping crate,
                map case,
                laboratory tray,
                or another subject-appropriate container.
                """,
            "future_mutation":
                """
                The final milestones may subtly change in material,
                scale, illumination, or abstraction to suggest the present
                and possible future without turning into science-fiction clutter.
                """
        }

    def generate(self):
        HISTORY = AI_INFER(
            historically_significant_milestones(
                subject=self.subject,
                range=self.time_range,
                count=self.milestone_count
            )
        )
        PATH = AI_INFER(
            spatial_metaphor(
                subject=self.subject,
                history=HISTORY,
                rule="shape must communicate the nature of the subject"
            )
        )
        ORIGIN = AI_INFER(
            archival_origin_object(
                subject=self.subject,
                first_milestone=HISTORY[0]
            )
        )
        return render(
            subject="""
                Create a single luxurious visual history of {{TOPIC}}.
                Do not use a generic straight timeline.
                Transform the chronology itself into a physical sculptural path
                whose shape is inferred from the meaning, mechanics, culture,
                or behavior of {{TOPIC}}.
                Arrange historically meaningful miniature artifacts along this path.
                Every milestone should be visually recognizable first
                and labeled second.
                The viewer should understand the evolution of the subject
                even before reading the annotations.
                """,
            layout=PATH,
            origin=ORIGIN,
            artifacts="""
                8–20 AI-inferred milestones.
                Each rendered as an elegant miniature object or sculptural vignette.
                Vary scale according to historical importance.
                Preserve realistic differences in materials between eras.
                """,
            typography="""
                Large elegant serif title:
                AI_INFER poetic historical title from {{TOPIC}}
                Optional date range beneath title.
                Milestones:
                DATE / ERA
                concise milestone name
                optional micro-caption
                """,
            environment="""
                Warm neutral museum wall or archival paper-like surface.
                Vast breathing room.
                Timeline objects cast subtle physical shadows.
                No conventional infographic boxes.
                """,
            lighting="""
                Museum-display lighting,
                warm directional illumination,
                gentle falloff,
                restrained highlights,
                rich material realism,
                subtle vignette only from natural light falloff.
                """,
            rendering="""
                premium 3D object photography,
                historical artifact realism,
                editorial museum design,
                finely modeled miniature details,
                physically plausible materials,
                elegant depth,
                8K.
                """,
            constraints="""
                No generic equal-spacing timeline.
                No repetitive iconography.
                No random milestones.
                No visually identical objects.
                No single fixed layout applied to every topic.
                Layout MUST emerge from {{TOPIC}}.
                """
        )
