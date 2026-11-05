// A teardown is not "the object broken up." It is a mapping with an inverse.

Let A = {a₁ … aₙ}  the parts of the ASSEMBLED object   (left panel)
Let K = {k₁ … kₘ}  the slots of the KNOLLED layout      (right panel)

Define φ : A → K,  φ(aᵢ) = the slot occupied by part aᵢ

TEARDOWN AXIOM:  φ is a BIJECTION
  (i)   injective  — no two parts share a slot
  (ii)  surjective — no slot is empty, no part is unplaced
  ⇒ n = m exactly.

COROLLARY 1 (NO ORPHANS):   ∀a ∈ A, ∃k ∈ K : φ(a) = k
COROLLARY 2 (NO PHANTOMS):  ∀k ∈ K, ∃a ∈ A : φ(a) = k
COROLLARY 3 (COMPLETE DISASSEMBLY):
   ∀ aᵢ, aⱼ ∈ A : φ(aᵢ) ≠ φ(aⱼ) ∧ ¬subassembly_intact(aᵢ, aⱼ)
   // if two parts still touch as a unit on the right panel, the teardown is incomplete

VERIFICATION:
   checksum_left  = Σ mass(aᵢ) over A
   checksum_right = Σ mass(kⱼ) over K
   assert checksum_left == checksum_right    // mass is conserved too, not just count

// ═══ PART B: THE TAXONOMIC LATTICE SOLVER ═══
// Given A, find the coordinate assignment c : A → ℝ² that satisfies every
// hard constraint while optimizing the layout objective.

HARD CONSTRAINTS (non-negotiable):
  C1  ∀i≠j : rect(c(aᵢ), dims(aᵢ)) ∩ rect(c(aⱼ), dims(aⱼ)) = ∅   // no overlap
  C2  ∀i   : clearance(c(aᵢ), nearest_neighbor) ≥ g_min            // min gutter
  C3  ∀i   : rotation(aᵢ) ∈ {0°, 90°}                              // 90° alignment
  C4  tier(aᵢ) < tier(aⱼ)  ⇒  y(c(aᵢ)) < y(c(aⱼ))                 // tier order top→bottom
  C5  same_class(aᵢ,aⱼ)    ⇒  aligned_to_shared_column(aᵢ,aⱼ)     // identical parts in ranks
  C6  aspect_ratio(bounding_box(K)) ∈ [0.9, 1.6]                    // fits the right panel

SOFT OBJECTIVE (maximize):
  J(c) = 0.34 · row_regularity(c)      // rows share a common baseline rail
       + 0.24 · tier_readability(c)    // tier bands visually distinct, gutters clear
       + 0.18 · size_gradient(c)       // within tier: large → small, left → right
       + 0.12 · symmetry_balance(c)    // visual mass balanced about the vertical axis
       + 0.12 · compactness(c)         // minimal wasted ground; generous but not sparse

SOLVER:
  1. classify every aᵢ into T1…T5                     (satisfies C4 by construction)
  2. within each tier, sort by (-area, name)           (satisfies C5, boosts size_gradient)
  3. pack rows left→right at pitch p, wrap at panel width
  4. insert tier gutters = 2p between bands            (boosts tier_readability)
  5. center each row on the vertical axis              (boosts symmetry_balance)
  6. while J(c) not converged:
       nudge parts along row rail to even the spacing   (boosts row_regularity)
       re-check C1, C2 after every nudge                (never trade a hard constraint for J)

// ═══ PART C: WHY THIS BEATS "ORGANIZED CHAOS" ═══
// "Organized chaos" is unfalsifiable — any scatter can claim to satisfy it.
// A solved lattice is falsifiable: C1–C6 either hold or they don't,
// and J(c) tells you how good the arrangement is.
// The result reads as ENGINEERED, because it was.

RENDER: {{TOPIC}}. Solve φ, then solve c. Two bijections, one teardown plate.
