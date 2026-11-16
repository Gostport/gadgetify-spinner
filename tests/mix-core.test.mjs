// Ticket 02 seam tests — Mix Compose (pure core extracted from index.html)
// Run: node tests/mix-core.test.mjs
import { readFileSync } from "node:fs";
import assert from "node:assert";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const m = html.match(/\/\/ == MIX CORE[\s\S]*?\/\/ == END MIX CORE ==/);
assert(m, "MIX CORE block not found in index.html");
const { MIX_SLOTS, mixBases, mixComposeText, mixFillersForSlot, mixActiveFillers, mixDetectFights, mixComposeMix, mixFightKey, mixLocks, mixMakeRecipe, mixApplyRecipe, mixRecipeCard, mixRenderCBlock, mixSpinMix, mixCleanText } = new Function(
  m[0] + "\nreturn { MIX_SLOTS, mixBases, mixComposeText, mixFillersForSlot, mixActiveFillers, mixDetectFights, mixComposeMix, mixFightKey, mixLocks, mixMakeRecipe, mixApplyRecipe, mixRecipeCard, mixRenderCBlock, mixSpinMix, mixCleanText };"
)();

const data = JSON.parse(readFileSync(new URL("../fillers.json", import.meta.url), "utf8"));
const fillers = data.fillers;

// 1. Bases = the dissected sources, nothing else
const bases = mixBases(fillers);
assert(bases.includes("op-art-ribbons"), "op-art base present");
assert(bases.includes("semantic-wordmark-compiler"), "wordmark base present");
assert(bases.includes("personified-collage-poster"), "personified base present");

// 2. Op-Art compose: every filler the base owns appears, in canonical slot order
const out = mixComposeText(fillers, "op-art-ribbons", "robot");
assert(out.startsWith("SUBJECT: robot\n"), "subject line first, bound");
let lastIdx = -1;
for (const slot of MIX_SLOTS) {
  const owned = fillers.filter(f => f.source === "op-art-ribbons" && f.slot === slot);
  for (const f of owned) {
    const idx = out.indexOf("[" + slot.toUpperCase() + " — " + f.name);
    assert(idx > lastIdx, `block ${f.id} present and in canonical order`);
    lastIdx = idx;
    for (const seg of f.segments) assert(out.includes(seg.text), `segment of ${f.id} present`);
  }
}

// 3. Honest empties: Wordmark has Lettering, no Face block anywhere
const wm = mixComposeText(fillers, "semantic-wordmark-compiler", "velvet");
assert(wm.includes("[LETTERING — "), "wordmark lettering block present");
assert(!wm.includes("[FACE — "), "wordmark has no face block");

// 4. Empty subject leaves the {{TOPIC}} flag, same convention as v1
const unbound = mixComposeText(fillers, "op-art-ribbons", "");
assert(unbound.startsWith("SUBJECT: {{TOPIC}}\n"), "unbound subject stays a visible flag");

// 5. Ticket 03 — an override swaps exactly one slot (the ROBOT shape:
//    Op-Art base + Wordmark lettering), everything else inherited
const robot = mixComposeText(fillers, "op-art-ribbons", "robot", { Lettering: "wordmark-lettering" });
assert(robot.includes("[LETTERING — Illustrated wordmark compiler · from semantic-wordmark-compiler]"),
  "override lettering block present with its source named");
assert(robot.includes("[PALETTE — Pure black / pure white · from op-art-ribbons]"),
  "inherited palette block still present");
assert(robot.indexOf("[LETTERING") < robot.indexOf("[PALETTE"),
  "canonical order holds with an override in place");

// 6. Ticket 03 — an override REPLACES the base's filler in that slot
const swapped = mixComposeText(fillers, "personified-collage-poster", "migration", { Palette: "opart-palette" });
assert(swapped.includes("[PALETTE — Pure black / pure white · from op-art-ribbons]"), "override palette present");
assert(!swapped.includes("Semantic saturated palette"), "base palette fully replaced, not merged");

// 7. Slot inventory helper sees the whole pilot corpus
assert(mixFillersForSlot(fillers, "Palette").length >= 10, "palette column is well populated");
assert(mixFillersForSlot(fillers, "Face").length >= 3, "face column has the checkpoint + figma faces");

// 8. Ticket 04 — a Base alone never fights itself (same-source overlap is by design)
for (const b of bases) {
  assert(mixDetectFights(mixActiveFillers(fillers, b, {})).length === 0, "base " + b + " has no self-fights");
}

// 9. Ticket 04 — cross-source claim overlap fires a fight naming the property.
//    Personified base + Op-Art surface pick: opart-surface claims Surface+Composition;
//    personified-composition claims Composition → fight over Composition.
const act = mixActiveFillers(fillers, "personified-collage-poster", { Surface: "opart-surface" });
const fights = mixDetectFights(act);
assert(fights.some(f => f.property === "Composition"), "composition fight detected");
assert(fights.every(f => f.property !== "Palette"), "no phantom palette fight");

// 10. Ticket 04 — unresolved fight marks the output as a DRAFT
const draft = mixComposeMix(fillers, "personified-collage-poster", "migration", { Surface: "opart-surface" }, {});
assert(draft.unresolved > 0 && draft.text.includes("DRAFT"), "unresolved fight → draft marker");
assert(draft.text.includes("[FIGHT REPORT]"), "fight report included");

// 11. Ticket 04 — winner demotes the loser: only the contested segments are removed.
//     Fight over Composition: personified-composition wins → opart-surface loses its
//     Composition segment but KEEPS its Surface segment.
const key = mixFightKey("Composition", "opart-surface", "personified-composition");
const res = { [key]: "personified-composition" };
const settled = mixComposeMix(fillers, "personified-collage-poster", "migration", { Surface: "opart-surface" }, res);
assert(settled.unresolved === 0 || settled.fights.every(f => res[f.key]), "all fights resolved");
assert(!settled.text.includes("DRAFT"), "resolved mix is not a draft");
assert(!settled.text.includes("Optical depth is engineered"), "loser's contested (Composition) segment is removed");
assert(settled.text.includes("Generate 80\u2013260 continuous black-and-white ribbons"), "loser keeps its non-contested (Surface) segment");
// 12. Ticket 05 — a Lock renders FIRST in canonical form, before SUBJECT,
//     and a lock-only source is not offered as a Base
const locked = mixComposeMix(fillers, "personified-collage-poster", "a famous chef", {}, {}, "memelegend-lock-identity");
assert(locked.text.includes("[LOCK — Identity Lock"), "lock block present");
assert(locked.text.indexOf("[LOCK") < locked.text.indexOf("SUBJECT:"), "lock renders before subject and slots");
assert(locked.lock === "memelegend-lock-identity", "lock id recorded in the result");
assert(!bases.includes("hyperreal-meme-legend"), "lock-only source is not a base");
assert(mixLocks(fillers).length === 1, "exactly one lock in the pilot data");

// 13. Ticket 05 — requirement flags are advisory: they fire with the requirement
//     text, compose still succeeds; a mix with no requirements shows no flags
const flagged = mixComposeMix(fillers, "personified-collage-poster", "migration", {}, {}, null);
assert(flagged.flags.some(f => f.filler === "Friendly circular-eye face"), "face requirement flagged");
assert(flagged.text.includes("SUBJECT: migration"), "compose succeeds despite flags");
const clean = mixComposeMix(fillers, "op-art-ribbons", "robot", {}, {}, null);
assert(clean.flags.length === 0, "no requirements → no flags");

// 14. Ticket 05 — the Lock never fights (it constrains; it is not a slot pick)
assert(locked.fights.every(f => f.a !== "memelegend-lock-identity" && f.b !== "memelegend-lock-identity"),
  "lock appears in no fight");

// 15. Ticket 06 — recipe round-trip: state → recipe → JSON → applied state →
//     byte-identical composed output (fight resolution and lock included)
const rKey = mixFightKey("Composition", "opart-surface", "personified-composition");
const origPicks = { Surface: "opart-surface" }, origRes = { [rKey]: "personified-composition" };
const recipe = mixMakeRecipe(fillers, "personified-collage-poster", "migration", origPicks, origRes, "memelegend-lock-identity");
const revived = mixApplyRecipe(fillers, JSON.parse(JSON.stringify(recipe)));
assert(revived, "recipe survives JSON round-trip");
const before = mixComposeMix(fillers, "personified-collage-poster", "migration", origPicks, origRes, "memelegend-lock-identity").text;
const after = mixComposeMix(fillers, revived.base, revived.subject, revived.picks, revived.resolutions, revived.lock).text;
assert(before === after, "loaded recipe reproduces byte-identical output");

// 16. Ticket 06 — the card credits every pick, the lock, and fight resolutions
const card = mixRecipeCard(fillers, recipe, { "personified-collage-poster": "Personified Collage Poster", "op-art-ribbons": "Op-Art Ribbons", "hyperreal-meme-legend": "Hyperreal Meme Legend" });
assert(card.includes("RECIPE — migration · base: Personified Collage Poster"), "card header names subject and base");
assert(card.includes("Surface: Continuous ribbon field (from Op-Art Ribbons, pick)"), "card lists the pick with its source");
assert(card.includes("Lock: Identity Lock"), "card lists the lock");
assert(card.includes("Fight over Composition"), "card records the fight resolution");
assert(card.includes("Sources:"), "card credits sources");

// 17. Ticket 06 — import hygiene: unknown ids are dropped, never crash
const dirty = mixApplyRecipe(fillers, { kind: "spinner-recipe", version: 1, base: "op-art-ribbons", subject: "x",
  picks: { Palette: "no-such-filler", Face: "opart-face" }, resolutions: { "k": "ghost" }, lock: "ghost-lock" });
assert(dirty && !("Palette" in dirty.picks) && dirty.picks.Face === "opart-face" && dirty.lock === null,
  "unknown ids dropped, known ids kept");
assert(mixApplyRecipe(fillers, { kind: "something-else" }) === null, "foreign JSON rejected");

// 18. Ticket 07 — C-block render: fixed positions, (master) on C1, every kept
//     segment present exactly once, Format becomes the eta tail
const rend = mixRenderCBlock(fillers, "personified-collage-poster", "migration", {}, {}, null);
assert(rend.text.includes("C\u2081  IDENTITY + FACE (master)"), "C1 carries (master)");
assert(rend.text.indexOf("C\u2081") < rend.text.indexOf("C\u2084") && rend.text.indexOf("C\u2084") < rend.text.indexOf("C\u2085"),
  "blocks in fixed C order");
assert(rend.text.includes("\u03B7 HONEST RENDER"), "eta tail present");
for (const f of mixActiveFillers(fillers, "personified-collage-poster", {})) {
  for (const seg of f.segments) {
    const n = rend.text.split(seg.text).length - 1;
    assert(n === 1, "segment of " + f.id + " appears exactly once in the render (got " + n + ")");
  }
}

// 19. Ticket 07 — Lock renders at C0; no lock → no C0 anywhere
const rendLock = mixRenderCBlock(fillers, "personified-collage-poster", "a famous chef", {}, {}, "memelegend-lock-identity");
assert(rendLock.text.includes("C\u2080"), "lock renders at C0");
assert(!rend.text.includes("C\u2080"), "no lock → no C0");

// 20. Ticket 07 — the render honors demotion exactly like canonical compose
const rKey2 = mixFightKey("Composition", "opart-surface", "personified-composition");
const rendDem = mixRenderCBlock(fillers, "personified-collage-poster", "migration",
  { Surface: "opart-surface" }, { [rKey2]: "personified-composition" }, null);
assert(!rendDem.text.includes("Optical depth is engineered"), "demoted segment absent from render");
assert(rendDem.text.includes("Generate 80\u2013260 continuous"), "kept segment present in render");

// 21. Ticket 08 — Spin a Mix over 200 seeded rolls: picks are always real
//     fillers in the right slot; a spin reported clean truly has no fights;
//     an unclean spin's fights are reported, never hidden
let seed = 42;
const lcg = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;
const byIdT = {}; fillers.forEach(f => { byIdT[f.id] = f; });
let cleanCount = 0;
for (let i = 0; i < 200; i++) {
  const spun = mixSpinMix(fillers, lcg);
  assert(bases.includes(spun.base), "spin base is a real base");
  for (const [slot, id] of Object.entries(spun.picks)) {
    assert(byIdT[id] && byIdT[id].slot === slot, "spin pick " + id + " is a real " + slot + " filler");
    assert(byIdT[id].source !== spun.base, "spin picks are foreign to the base");
  }
  const realFights = mixDetectFights(mixActiveFillers(fillers, spun.base, spun.picks));
  assert(realFights.length === spun.fights.length, "reported fights match detected fights");
  if (spun.clean) { cleanCount++; assert(realFights.length === 0, "clean spin has zero fights"); }
}
assert(cleanCount > 100, "most spins land clean (got " + cleanCount + "/200)");

// 22. Ticket 08 — a spun mix saves and reloads as a recipe like any hand mix
const spunOnce = mixSpinMix(fillers, lcg);
const spunRecipe = mixMakeRecipe(fillers, spunOnce.base, "test subject", spunOnce.picks, {}, null);
const spunBack = mixApplyRecipe(fillers, JSON.parse(JSON.stringify(spunRecipe)));
assert(spunBack && spunBack.base === spunOnce.base && JSON.stringify(spunBack.picks) === JSON.stringify(spunOnce.picks),
  "spun mix round-trips through a recipe");

// 23. v2.2 — clean copy: no provenance, no fight report, content intact;
//     the canonical copy still carries the bookkeeping (guard both ways)
const cleanFight = mixCleanText(fillers, "personified-collage-poster", "migration",
  { Surface: "opart-surface" }, { [rKey]: "personified-composition" }, null);
assert(!cleanFight.text.includes("\u00B7 from"), "clean copy has no provenance");
assert(!cleanFight.text.includes("[FIGHT REPORT]"), "clean copy has no fight report");
assert(!cleanFight.text.includes("fully demoted"), "clean copy has no demotion bookkeeping");
assert(cleanFight.text.includes("[SURFACE \u2014 Continuous ribbon field]"), "clean headers keep slot + filler name only");
assert(cleanFight.text.includes("Generate 80\u2013260 continuous"), "clean copy keeps the content");
const canonFight = mixComposeMix(fillers, "personified-collage-poster", "migration",
  { Surface: "opart-surface" }, { [rKey]: "personified-composition" }, null);
assert(canonFight.text.includes("[FIGHT REPORT]") && canonFight.text.includes("\u00B7 from"),
  "canonical copy still carries bookkeeping");

// 24. v2.2 — a fully demoted filler vanishes from the clean copy entirely
const tiny = [
  { id: "a-sf", name: "Alpha surface", slot: "Surface", source: "src-a", provenance: "gadgetify",
    claims: ["Surface", "Background"], requires: [], weight: 100,
    segments: [{ property: "Surface", text: "Alpha texture." }, { property: "Background", text: "Alpha page is the world." }] },
  { id: "b-bg", name: "Beta backdrop", slot: "Background", source: "src-b", provenance: "gadgetify",
    claims: ["Background"], requires: [], weight: 100, segments: [{ property: "Background", text: "Beta void." }] },
  { id: "a-ch", name: "Alpha hero", slot: "Character", source: "src-a", provenance: "gadgetify",
    claims: ["Character"], requires: [], weight: 100, segments: [{ property: "Character", text: "Alpha hero." }] }
];
const tinyKey = mixFightKey("Background", "a-sf", "b-bg");
const tinyRes = { [tinyKey]: "a-sf" };
const tinyCanon = mixComposeMix(tiny, "src-a", "x", { Background: "b-bg" }, tinyRes, null);
assert(tinyCanon.text.includes("fully demoted"), "canonical shows the fully-demoted placeholder");
const tinyClean = mixCleanText(tiny, "src-a", "x", { Background: "b-bg" }, tinyRes, null);
assert(!tinyClean.text.includes("Beta backdrop") && !tinyClean.text.includes("Beta void."),
  "fully demoted filler leaves no trace in the clean copy");
assert(tinyClean.text.includes("Alpha page is the world."), "the winner's content is in the clean copy");

// 25. v2.2 — Lock header is cleaned too
const cleanLock = mixCleanText(fillers, "personified-collage-poster", "a famous chef", {}, {}, "memelegend-lock-identity");
assert(cleanLock.text.includes("[LOCK \u2014 Identity Lock"), "clean lock header present");
assert(!cleanLock.text.includes("from hyperreal-meme-legend"), "clean lock header has no provenance");

console.log("mix-core tests: ALL PASS (" + fillers.length + " fillers, " + bases.length + " bases)");
