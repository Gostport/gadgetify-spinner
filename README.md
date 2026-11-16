# Gadgetify Spinner

A static web app that picks a random gadgetify prompt specimen, binds it to a
topic (randomized or user-chosen), rolls any dice the specimen calls for with a
real RNG, and hands back the finished prompt ready to paste into an image
model. The library lives in this repo; the page just fetches its siblings.

Specimens are Kip's filed @gadgetify prompt references, cleaned down to the
runnable template only — grader notes and run records stay in the skill
references, distilled here to the short `flaws` list in the manifest
(available in the UI, never part of the generated output).

## File layout

```
index.html        the app (single static page)
manifest.json     specimen index: id, title, kind, binding, topic hint,
                  pools, flaws, filed date
topics.json       the topic bank, 12 per category × 5 categories
specimens/        one .md per specimen — the runnable prompt template only
```

## How binding works

- `{{TOPIC}}` in a template is replaced by the chosen topic (binding:
  `"replace"`).
- Binding `"header"` means the template has no topic slot (a normative spec
  or an input-less engine); the app prepends the topic as a header line.
- `{{ROLL:movements}}` / `{{ROLL:engines}}` are replaced by a real random
  draw from the pools declared in the manifest (`poolDraw` says how many).

## Adding a new specimen

1. Drop the cleaned template into `specimens/<slug>.md`, with `{{TOPIC}}`
   wherever the topic binds.
2. Add one entry to `manifest.json` (`id` = the slug, `file` =
   `specimens/<slug>.md`, plus kind, binding, topicHint, flaws, filed date;
   `pools`/`poolDraw` only if the specimen draws from pools).
3. Nothing else — the page reads the manifest at load.

## Version

Spinner v1.5 — data layer: 174 specimens, 60 topics, 9 slot banks,
plus examples.json (example runs on file).
Changelog: v1.5 (2026-11-05) examples — a prompt can now carry example
runs: select one in the page and its image shows in the Engine section
with the params used (topic, format, model, date). First ten are from
Kip's Gemini spins of Nov 5, 2026, with params from his exported spin
history. Images are downscaled copies hosted on the ibid-make site
under spinner-examples/ — the GitHub App push path for this repo is
text-only, so binaries live where the binary pipeline already works.
v1.4 (2026-11-05) prompt finder — the engine list in the
page is now sorted alphabetically by title and searchable: a search
box above the dropdown filters the 174 prompts by name (or id) as you
type, with a match count; Enter loads the first match; a spin that
lands outside the current filter clears the search so the pick is
always visible in the list.
v1.3 (2026-11-05) data massage (hidden_files/build_v13.py,
report in hidden_files/massage-report.md; pre-massage backup kept in
hidden_files/specimens-pre-v13-backup): stripped baked-in format
directives (88 substitutions — "2x2 grid, 16:9" lead chunks, ASPECT
RATIO lines, platform-line ratios, ratio= attributes) and gadgetify's
own run topics (35 "do this for <his topic>:" lead clauses, 7 bare
lead topics, 4 topic-bearing preamble lines, the CATEGORY = Broadway
Musicals definition, which is now CATEGORY = {{TOPIC}}). Kept:
miniature model scales (1:87 etc.), layout-as-content grids, code
identifiers, and code-level format defaults — those are flagged in
the massage report for a possible deeper pass.
v1.2 (2026-11-05) input guidance — v1.1 bound every input as a
generic "topic," but most specimens' original slot is narrower ([WORD],
[DISH_NAME], [CITY_NAME], [FIGURE]…), so random topics often didn't fit.
v1.2 recovers each specimen's original slot from the v1.1 build report,
adds a `wants` field (slot, bank, label, example) to the manifest plus a
`banks.json` of slot-matched value banks: the page now states what each
engine actually wants, shows an example, and rolls random values from
the matching bank. 63 specimens get slot-specific banks; 85 stay on the
generic topic bank; 26 are header-bound and say so.
v1.1 (2026-11-05) bulk-ingested the TwExport CSV pool — of 305
posts / 198 extracted prompts: 158 added (134 topic-slot adapters, 24
header-bound), 9 already present as v1.0 specimens, 17 exact duplicates,
14 skipped (mid-spec excerpts, fixed-subject runs, photo/artifact-input
specs, stubs). Bulk entries are adapter-bound and flagged as such in their
`flaws`; they have not been hand-tested like the original sixteen.
v1.0 — initial release: 16 hand-curated specimens.

## Changelog

- **v2.3** (Nov 16, 2026) — Subject advice in the Mixer: from the selected parts' own requirements, the panel names the kind of subject the mix wants (a word, a public figure, an event…) and offers clickable topic suggestions from the banks. Picks outrank inherited parts; the Lock outranks all.
- **v2.2** (Nov 16, 2026) — Clean copy for running: a button that produces the mix with all Mixer bookkeeping removed (no provenance attributions, no fully-demoted blocks, no fight report, no DRAFT stamp) — the text to paste into an image model. Canonical copy unchanged.
- **v2.1** (Nov 16, 2026) — UI cleanup: footer changelog removed, Mixer slots are compact dropdowns with a one-line detail readout, Recipes and the C-block render live in collapsible sections, Spin History collapses too. No behaviour change.
- **v2.0** (Nov 16, 2026) — the Slot Mixer (below).

## Mix mode (v2.0)

Beside Spin, the page has a Mix mode: prompts dissected into **slot fillers**
(`fillers.json` — 86 fillers from 18 pilot specimens) can be combined
graphically. Pick a Base, swap fillers per slot, settle claim **fights**
(the loser is demoted to its non-conflicting segments), optionally apply an
**Identity Lock**, and save the mix as a **Recipe** (browser storage, JSON
export/import, plain-text card). A composed mix can also be rendered into
gadgetify's C-block dialect. Design record: `SPEC-v2.0.md`, `CONTEXT.md`,
`docs/adr/`, tickets in `.scratch/spinner-v2-slot-mixer/issues/`.
