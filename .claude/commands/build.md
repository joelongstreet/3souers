Regenerate all output HTML files from source.

1. Read `_source/_layout.html` to get the template.
2. For each file in `_source/pages/`, in this order:
   - `index.html` → `index.html`
   - `1.html` → `1/index.html`
   - `2.html` → `2/index.html`
   - `3.html` → `3/index.html`
   - `4.html` → `4/index.html`
   - `people-jane.html` → `people/jane/index.html`
   - `people-ruby.html` → `people/ruby/index.html`
   - `people-lucy.html` → `people/lucy/index.html`
   - `people-mommy.html` → `people/mommy/index.html`
   - `people-daddy.html` → `people/daddy/index.html`
   - `people-rufus.html` → `people/rufus/index.html`
3. For each page, follow the generation rules in CLAUDE.md to fill in all `{{PLACEHOLDER}}` values and write the output file.
4. After writing all files, confirm how many were written and note any issues.
