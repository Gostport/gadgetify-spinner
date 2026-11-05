2x2 grid, 16:9, animals getting caught doing annoying things: SUBJECT=[...]

VARIANT_SEED=[optional value; change this to force a fresh concept]

Create ONE highly shareable humorous image about SUBJECT.

Do NOT begin with a fixed visual template.

Do NOT automatically use:
cats,
animals,
mugshots,
police lineups,
signboards,
anthropomorphic characters,
or any previously successful scene.

Instead:

────────────────────────────────────
PHASE 1 :: UNDERSTAND THE SUBJECT
────────────────────────────────────

Infer:

CORE_IDENTITY =
what SUBJECT is fundamentally associated with

PUBLIC_ASSOCIATIONS =
things people immediately recognize about SUBJECT

FRUSTRATIONS =
annoying / inconvenient / contradictory aspects

BEHAVIORS =
things SUBJECT metaphorically or literally "does"

STEREOTYPES =
recognizable harmless cultural associations

TENSIONS =
expectation vs reality,
confidence vs competence,
appearance vs behavior,
promise vs outcome,
cause vs consequence,
etc.

EMOTIONAL_HOOK =
relatable / absurd / smug / chaotic / wholesome /
frustrating / ironic / dramatic / deadpan / awkward

────────────────────────────────────
PHASE 2 :: GENERATE VISUAL JOKES
────────────────────────────────────

Internally generate at least 12 substantially different concepts.

Possible humor mechanisms include but are NOT limited to:

- anthropomorphic behavior
- role reversal
- visual metaphor
- literalized idiom
- exaggerated consequence
- fake documentary evidence
- absurdly official treatment of trivial behavior
- product parody
- museum exhibit
- before / after
- expectation / reality
- inappropriate confidence
- scale mismatch
- historical reinterpretation
- future reinterpretation
- object behaving like a person
- person behaving like the subject
- fake warning / instruction
- environmental storytelling
- visual contradiction
- hidden reveal
- deadpan realism
- surreal transformation
- mock scientific classification
- mock luxury advertisement
- tiny-world scenario
- giant-world scenario
- social-media-style candid moment
- entirely new joke structure invented from SUBJECT

Do not choose the same humor device merely because it resembles the reference.

────────────────────────────────────
PHASE 3 :: SCORE CONCEPTS
────────────────────────────────────

For each candidate C:

VIRAL_SCORE(C) =

0.24 * instant_comprehension
+ 0.20 * subject_relevance
+ 0.18 * comedic_surprise
+ 0.14 * relatability
+ 0.10 * visual_clarity
+ 0.08 * novelty
+ 0.06 * screenshot_shareability

Reject concepts that require long explanation.

Choose:

C* = argmax(VIRAL_SCORE)

────────────────────────────────────
PHASE 4 :: CHOOSE VISUAL WORLD
────────────────────────────────────

Infer the visual treatment that makes C* funniest.

Possible worlds:

photorealistic candid photography
editorial cartoon
retro comic
children's illustration
claymation
stop-motion miniature
3D collectible toy
vintage advertisement
corporate infographic
police evidence photography
museum display
scientific specimen plate
luxury product photography
Renaissance painting
medieval manuscript
woodcut
Japanese poster
newspaper illustration
surveillance frame
family snapshot
yearbook portrait
courtroom sketch
technical manual
packaging design
public-information poster
street photography
cinematic still
low-budget local commercial
pixel art
paper craft
felt craft
ceramic sculpture
embroidery
architectural model
or another medium inferred from the joke.

STYLE must support the joke.

Never select style independently of concept.

────────────────────────────────────
PHASE 5 :: SCENE GENERATION
────────────────────────────────────

Infer:

PROTAGONIST
SETTING
POSE
ACTION
FACIAL_EXPRESSION if applicable
PROPS
BACKGROUND_DETAILS
CAMERA
LIGHTING
TEXT if useful
CAPTION if useful

Every element must reinforce the same joke.

Use environmental storytelling.

Allow tiny secondary details that create a second or third laugh upon inspection.

────────────────────────────────────
PHASE 6 :: TEXT DECISION
────────────────────────────────────

Determine whether text improves the joke.

IF image works without text:
    use no text.

IF a small caption sharpens the joke:
    create one short line.

IF the format naturally requires text:
    integrate it into the world as:
    sign
    product label
    headline
    warning
    plaque
    interface
    certificate
    menu
    caption
    instruction
    evidence board
    etc.

Do NOT automatically use a sign held by the protagonist.

────────────────────────────────────
PHASE 7 :: ANTI-REPETITION
────────────────────────────────────

Before rendering, reject the concept if it strongly resembles:

- a mugshot / lineup merely because the reference used one
- a centered character holding text
- an anthropomorphic animal without semantic reason
- the previous visual mechanism
- the previous medium
- the previous composition
- generic meme templates

Change at least THREE of:

humor mechanism
protagonist type
setting
composition
medium
camera
text strategy
era
material
scale

for each new VARIANT_SEED.

────────────────────────────────────
FINAL
────────────────────────────────────

Render ONE complete viral visual joke.

Success test:

0.5 sec → viewer recognizes subject
1 sec   → viewer understands situation
2 sec   → joke lands
5 sec   → secondary details reward inspection

The image should feel specifically invented for SUBJECT,
not generated from a reusable cat/mugshot template.
