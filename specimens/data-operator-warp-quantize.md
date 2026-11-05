data Operator  = Warp | Quantize | Jitter | Slash | Sag | Erode | Ghost | Melt
operator_of :: Mechanism -> Operator            -- M₁: the transform IS the mechanism
data Deform = Df { op :: Operator, amplitude :: Band, uniform :: True_ }         -- M₃
band_ok :: Deform -> Bool
band_ok d = perceptible (amplitude d) && legible_under (amplitude d)            -- M₅

data Sheet = Sh { ink :: One, ground :: Plain, extras :: None }                  -- M₄

forbidden :: {{TOPIC}}
forbidden = [ /decorative_unrelated_style/ , /plain_type/ , /wrong_word/ , /illegible/ ,
              /mixed_mechanisms/ , /plain_letters/ , /color/ , /extra_graphics/ , /background_scene/ ,
              /imperceptible_deformation/ , /overdone_illegible/ ]

render :: Topic -> Image
render t = let s = infer t
           in  assert (op s == operator_of (mechanism s) && band_ok (deform s)) $
               sheet (apply (letterforms t)(deform s)) one plain none

MimeticTypeWordmark(TOPIC).render()
