# 3 Sœurs

A site for the Longstreet family's little library project. Built in Kansas City, as a family.

---

## How this works

Content lives in `_source/pages/`. Claude reads those files and generates the final HTML. You never edit the output HTML files directly — they get overwritten whenever you rebuild.

To rebuild after any change, open Claude Code and run:

```
/build
```

That's it. Claude regenerates all 11 pages.

---

## Making changes

### Edit a page's text

Open the relevant file in `_source/pages/` and edit the HTML content directly. Then run `/build`.

| Page | Source file |
|---|---|
| Home | `_source/pages/index.html` |
| Library 1 (Holly St.) | `_source/pages/1.html` |
| Library 2 (Académie Lafayette) | `_source/pages/2.html` |
| Library 3 (Louanne Hein) | `_source/pages/3.html` |
| Library 4 (Grandma Mary & Papa Mark) | `_source/pages/4.html` |
| Jane | `_source/pages/people-jane.html` |
| Ruby | `_source/pages/people-ruby.html` |
| Lucy | `_source/pages/people-lucy.html` |
| Mommy | `_source/pages/people-mommy.html` |
| Daddy | `_source/pages/people-daddy.html` |
| Rufus | `_source/pages/people-rufus.html` |

### Change something on every page (header, footer, `<head>` tags)

Edit `_source/_layout.html`, then run `/build`.

### Change styles

Edit `styles.css` directly. No rebuild needed — CSS is linked, not embedded.

### Change component behavior (form, cards, shell)

Edit the relevant file in `components/`. No rebuild needed.

---

## Adding a new library page

Tell Claude something like:

> Add a new library page for library 5. It's called "For the Rosedale Library." The description is "Built for a neighborhood branch that always had the best used book pile." Use these poster images: alternate.jpg, poster.jpg, alternate-2.jpg. Write a short paragraph about it in the same tone as the other library pages.

Claude will:
1. Create `_source/pages/5.html`
2. Add a `<page-card>` for it in `_source/pages/index.html`
3. Generate `5/index.html` and update `index.html`

You'll need to create the `5/` directory and add the image files yourself before deploying.

---

## Adding a new person page

Same idea — just tell Claude who it's for, give them the content, and it handles the source file, the card on the home page, and the generated output.

---

## Deploying

This is a plain static site. Drag the whole folder to your host, or push to whatever deployment you're using. Nothing needs to compile or build outside of Claude — the output HTML files are already final.

The `_source/` folder doesn't need to be deployed but it doesn't hurt anything if it is.
