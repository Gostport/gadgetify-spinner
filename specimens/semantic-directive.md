<!-- CANVAS -->
    <rect width="100%" height="100%" fill="# FFFFFF" />
    
    <defs>
        <!-- AI INFERENCE: Define the cutting mask -->
        <mask id="typographic-knockout">
            <rect width="100%" height="100%" fill="white" /> <!-- Visible area -->
            
            <semantic_directive fill="black">
                Select the middle letter of the word "{{TOPIC}}". Extend its stem straight down into the center of the canvas. At the bottom of the stem, draw a tiny silhouette of AI_INFER(an icon relating to [OBJECT]).
            </semantic_directive>
        </mask>
    </defs>

    <!-- THE COLORED BASE SHAPE -->
    <g mask="url(# typographic-knockout)">
        <semantic_directive fill="AI_INFER(Bright thematic accent color)">
            Draw the flat, solid bottom half of a "[OBJECT]".
        </semantic_directive>
    </g>

    <!-- THE BLACK TYPOGRAPHY -->
    <g fill="#000000">
        <semantic_directive>
            Draw the bold letters "{{TOPIC}}" warping perfectly to form the top half of the "[OBJECT]". The middle letter seamlessly connects to the invisible mask cutout below it.
        </semantic_directive>
    </g>
    
    <!-- RENDER RULE: No shading. No 3D. Execute as a flawless 2-color vector illusion. -->
</SVG_Gestalt_Logo_Generator>
