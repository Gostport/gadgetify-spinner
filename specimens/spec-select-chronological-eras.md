spec AS (SELECT chronological_eras(topic) er, mascot(topic) ma, spine_word(topic) sp,
                two_inks(topic) ik FROM input)
SELECT tee_mockup(totem=>stack(er, ma, sp), inks=>ik, negative=>0.5,
                  garment=>fabric_realism(weave=>TRUE)) AS totem_timeline_tee FROM spec
-- T₁: CHECK ( tiers chronological AND connected silhouette )
-- T₂: CHECK ( mascot present AND spine legible )
-- T₃: CHECK ( two inks AND negative ≈ 0.5 )
-- T₄: CHECK ( garment mockup with weave )
-- T₅: CHECK ( era cues match years )
