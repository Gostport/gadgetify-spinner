// Ticket 10 — compose the 3 control mixes through the shipped MIX CORE.
// Writes the composed prompts + recipes to hidden_files/acceptance/.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import assert from "node:assert";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const m = html.match(/\/\/ == MIX CORE[\s\S]*?\/\/ == END MIX CORE ==/);
const core = new Function(m[0] + "\nreturn { mixComposeMix, mixMakeRecipe, mixFightKey, mixRecipeCard };")();
const fillers = JSON.parse(readFileSync(new URL("../fillers.json", import.meta.url), "utf8")).fillers;
const manifest = JSON.parse(readFileSync(new URL("../manifest.json", import.meta.url), "utf8"));
const titles = {}; manifest.specimens.forEach(s => { titles[s.id] = s.title; });
mkdirSync(new URL("../hidden_files/acceptance/", import.meta.url), { recursive: true });
const out = (name, text) => writeFileSync(new URL("../hidden_files/acceptance/" + name, import.meta.url), text);

// 1 — ROBOT recipe: Op-Art base + Figma kawaii face + Wordmark lettering
const robot = core.mixComposeMix(fillers, "op-art-ribbons", "robot",
  { Face: "figma-face", Lettering: "wordmark-lettering" }, {}, null);
assert(robot.unresolved === 0, "ROBOT mix composes clean");
out("01-robot.prompt.txt", robot.text);
out("01-robot.recipe.json", JSON.stringify(core.mixMakeRecipe(fillers, "op-art-ribbons", "robot",
  { Face: "figma-face", Lettering: "wordmark-lettering" }, {}, null), null, 2) + "\n");
out("01-robot.card.txt", core.mixRecipeCard(fillers, core.mixMakeRecipe(fillers, "op-art-ribbons", "robot",
  { Face: "figma-face", Lettering: "wordmark-lettering" }, {}, null), titles));

// 2 — Comedy Icons recipe: Honest Caricature base + carnival lettering + Identity Lock
const iconsPicks = { Lettering: "personified-lettering" };
const icons = core.mixComposeMix(fillers, "honest-caricature-laws",
  "comedy legends Jim Carrey, Mr. Bean, Sylvester Stallone, and Arnold Schwarzenegger, each as an iconic collectible poster portrait with their name and an epithet title",
  iconsPicks, {}, "memelegend-lock-identity");
assert(icons.unresolved === 0, "Comedy Icons mix composes clean");
out("02-comedy-icons.prompt.txt", icons.text);
out("02-comedy-icons.recipe.json", JSON.stringify(core.mixMakeRecipe(fillers, "honest-caricature-laws",
  "comedy legends Jim Carrey, Mr. Bean, Sylvester Stallone, and Arnold Schwarzenegger, each as an iconic collectible poster portrait with their name and an epithet title",
  iconsPicks, {}, "memelegend-lock-identity"), null, 2) + "\n");
out("02-comedy-icons.card.txt", core.mixRecipeCard(fillers, core.mixMakeRecipe(fillers, "honest-caricature-laws",
  "comedy legends Jim Carrey, Mr. Bean, Sylvester Stallone, and Arnold Schwarzenegger, each as an iconic collectible poster portrait with their name and an epithet title",
  iconsPicks, {}, "memelegend-lock-identity"), titles));

// 3 — Deliberate-fight recipe: Personified base + Op-Art surface; the Composition
//     fight is resolved for Personified, demoting Op-Art's depth segment
const fKey = core.mixFightKey("Composition", "opart-surface", "personified-composition");
const fightRes = { [fKey]: "personified-composition" };
const fight = core.mixComposeMix(fillers, "personified-collage-poster", "migration",
  { Surface: "opart-surface" }, fightRes, null);
assert(fight.unresolved === 0, "fight mix resolves fully");
assert(fight.text.includes("[FIGHT REPORT]"), "fight report present in composed output");
assert(!fight.text.includes("Optical depth is engineered"), "demoted segment absent from the run prompt");
out("03-fight.prompt.txt", fight.text);
out("03-fight.recipe.json", JSON.stringify(core.mixMakeRecipe(fillers, "personified-collage-poster", "migration",
  { Surface: "opart-surface" }, fightRes, null), null, 2) + "\n");
out("03-fight.card.txt", core.mixRecipeCard(fillers, core.mixMakeRecipe(fillers, "personified-collage-poster", "migration",
  { Surface: "opart-surface" }, fightRes, null), titles));

console.log("acceptance compose: 3 mixes written (robot clean, icons clean, fight resolved + demoted)");
