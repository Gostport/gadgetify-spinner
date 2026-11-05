2x2 grid, 16:9, do this for 4 famous decades: // p5.js GENERATIVE KINETIC POSTER
// TARGET_SUBJECT: "{{TOPIC}}" // ASSETS: "[THEMATIC_ICONS]"

function draw() {
  background(255); // Pure white
  
  // 1. ANCHOR GENERATION
  renderStencilPortrait("{{TOPIC}}", align=RIGHT, contrast=MAX);
  
  // 2. HORIZONTAL VELOCITY FIELD (The Smear)
  // Extract pixels from the portrait and drag them left across the X-axis
  for (let i = 0; i < 1000; i++) {
    let streak = new VectorPath();
    streak.color = "AI_INFER(Sampled portrait colors + vibrant Cyan/Red/Yellow)";
    streak.velocity = createVector(-50, 0); // Strict horizontal movement LEFT
    streak.thickness = random(5, 30);
    streak.draw();
  }

  // 3. FOREGROUND ELEMENTS
  renderText("{{TOPIC}}", style="Heavy Italic, White Fill, Black Stroke", angle=-10);
  spawnVectorIcons("[THEMATIC_ICONS]", blending_mode="MULTIPLY");
}

/* RENDER EXECUTION: 
Translate this generative code into a final, polished 2D graphic design masterpiece. The stark contrast between the rigid, detailed portrait and the violent, horizontal color streaks is the core aesthetic. 
*/
