type Deviation = Vector FaceSpace
amplify :: MeanFace -> Deviation -> Alpha -> Face
amplify μ δ α = μ + α * δ                              -- amplify DEVIATION, not features (C₁)
-- δ is sparse: one dominant axis; the rest follow  (C₁)

-- C₂: the claim is a LINEAR resource — used by every element, exactly one of them
element :: Claim -> Element -> (Element, ())           -- each element must consume the claim; none left over

-- C₅: caption is a turn, not a description
caption :: Image -> Beat
turn :: Beat -> Bool;  turn b = b /= describe image    -- caption ⊥ description

-- C₄: the metaphor carries its literal physics as a witness
data Metaphor = M { conceit :: Scene, mechanics :: Proof }   -- a metaphor without a mechanics proof won't build

forbidden :: {{TOPIC}}
forbidden = [ /photo_accurate ∧ one_cartoon_feature/ , /amplify_average/ , /labels_everywhere/ ,
              /metaphor_collapses_literal/ , /caption_restates_image/ , /three_arguments/ ,
              /P_inverted/ , /no_weight_bearing/ , /silhouette_unrecognisable/ ]

render :: Target -> Claim -> Panel
render t c = let (δ,axis)=dominant t; α=held_below_collapse t
             in  assert (sil==prop==gesture==t && mechanics (metaphor c) && turn (caption c)) $
                 panel (amplify μ δ α) (stage (power c)) (load_bearing c) (caption c)
