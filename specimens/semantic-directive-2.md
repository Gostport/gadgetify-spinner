<!-- CANVAS -->
    <rect width="100%" height="100%" fill="# F5F5DC" /> <!-- Cream Paper -->
    <rect class="border-frame" stroke="#000000" stroke-width="thick" fill="none" />
    
    <!-- TOP HEMISPHERE: THE LIGHT -->
    <g id="upright-realm" fill="#000000">
        <semantic_directive>
            Draw a highly intricate, symmetrical woodcut illustration of "{{TOPIC}}". Include a central divine figure, majestic animals on the left and right, and pristine classical architecture.
        </semantic_directive>
    </g>

    <!-- BOTTOM HEMISPHERE: THE DARK (Mirrored & Inverted) -->
    <!-- The transform tag physically flips the geometry upside down -->
    <g id="reversed-realm" transform="translate(0, 1000) scale(1, -1)" fill="#000000">
        <semantic_directive>
            Draw the exact mathematical mirrored composition of the top half, but CORRUPTED into "[DARK_CONCEPT]". The figure becomes a skull, the animals become skeletons, the architecture is shattered.
        </semantic_directive>
    </g>
    
    <!-- RENDER RULE: Output as a breathtaking, high-contrast, flat graphic design. No gradients. No gray. -->
</SVG_Duality_Card_Generator>
