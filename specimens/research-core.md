A = {
  researched trivia puzzle,
  one verified hidden answer,
  independent factual clues,
  uniqueness testing,
  difficulty calibrated to audience
}

B = {
  playful hand-drawn infographic,
  thick black doodle outlines,
  bright flat colors,
  pictorial clue symbols,
  charming imperfection
}

C = {
  detective evidence constellation,
  central mystery card,
  clue satellites,
  arrows and dotted connectors,
  tiny evidence tags,
  visual deduction map
}

D = {
  educational poster,
  minimal text,
  strong iconography,
  readable hierarchy,
  social-media shareability
}

RESEARCH_CORE = research({{{TOPIC}}})
where:
- AI selects one specific answer within the topic
- collect at least 12 candidate facts
- verify every candidate fact
- discard facts that are disputed, approximate, misleading, or too generic
- test plausible alternative answers
- retain the 5–7 clues that best isolate the intended answer

CLUE_DIVERSITY = infer_clue_categories(ANSWER)
where:
- maximize category variety
- avoid multiple clues that reveal essentially the same fact
- use quantitative clues only when numbers are genuinely meaningful
- use geographic, historical, visual, relational, behavioral, structural, linguistic, cultural, or scientific clues according to the subject

VISUAL_TRANSLATION = translate(CLUES)
where:
- each clue becomes a tiny illustrated evidence scene
- AI selects the most natural visual grammar for that clue
- maps become miniature maps
- quantities become counted objects or simple charts
- dates become calendars / eras / timelines
- physical traits become diagrams
- locations become landmarks / compass / globe fragments
- relationships become connector diagrams
- achievements become trophies / symbolic scenes
- works become tiny covers / objects / stages
- scientific facts become simplified educational diagrams

LAYOUT:

                 CLUE
                   |
           CLUE — [?] — CLUE
             \     |     /
              CLUE   CLUE
                    |
                  CLUE

Do not copy this geometry literally.

AI_INFER the best evidence constellation from the number and type of clues.

Central mystery marker:
large rainbow, multicolor, or topic-derived question mark / silhouette / locked card.

Surrounding clue nodes:
different shapes and sizes depending on clue importance.

Connectors:
thin black arrows,
dotted reasoning trails,
small circled numbers,
tiny evidence tags.

TEXT SYSTEM:

Top:
AI_INFER an enticing challenge title.

Examples of structural logic:
"CAN YOU NAME IT?"
"WHO AM I?"
"WHAT PLACE IS THIS?"
"GUESS THE INVENTION"
"MYSTERY ANIMAL"

Do not hard-code these.

Each clue:
3–8 words whenever possible.

Bottom:
one oversized question phrase,
no answer.

COLOR SYSTEM:

AI_INFER 4–6 cheerful colors appropriate to {{{TOPIC}}}.

Keep:
black outlines,
white negative space,
flat fills,
strong contrast.

Avoid:
photorealism,
shadows,
3D rendering,
dense paragraphs.

ANSWER VALIDATION:

Before final rendering:

TEST 1:
Could another well-known answer fit all clues?

If YES -> replace weakest clue.

TEST 2:
Does any clue depend on dubious internet trivia?

If YES -> replace it.

TEST 3:
Would the intended audience have enough information to solve it?

If NO -> add one stronger clue.

TEST 4:
Does one clue give the answer away immediately?

If YES and difficulty != EASY -> weaken or replace it.

OUTPUT:

A colorful research-backed visual detective riddle about {{{TOPIC}}},
with one legitimate hidden answer,
5–7 semantically varied clues,
and a layout that feels like an illustrated evidence constellation rather than a repetitive panel grid.

Internally return:
ANSWER
CLUE_EXPLANATIONS
SOURCE_NOTES

But keep those OFF the puzzle image unless a reveal version is requested.
