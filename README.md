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

Spinner v1.0 — data layer: 16 specimens, 60 topics.
