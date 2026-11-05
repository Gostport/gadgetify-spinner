input(work) AS ( VALUES ({{TOPIC}}) ),
spec AS ( SELECT title(work) tt, iconic_figure(work) fg, integration_mode(work) md,
                 negative_lines(work) ng, caption(work) cp FROM input ),
mark AS ( SELECT fuse(fg, tt, md) AS m FROM spec )

SELECT emblem_render( m, carve_negatives(m, ng), ink=>'black', ground=>'neutral', caption=>serif_caps(cp) )
       AS epic_emblem
FROM spec, mark
-- E₁: CHECK ( integration mode applied AND connected(S ∪ W) = 1 )
-- E₂: CHECK ( figure iconic of work AND heraldic pose )
-- E₃: CHECK ( binary ink AND negative lines interior )
-- E₄: CHECK ( word legible AND silhouette coherent )
-- E₅: CHECK ( serif caps caption AND neutral ground )
-- forbidden rows (word beside figure / generic figure / gray / illegible / no caption) violate CHECKs
;
