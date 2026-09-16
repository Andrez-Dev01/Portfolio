# Portfolio redesign preview

Side-by-side preview of the Stitch redesign, personalized with content from the original portfolio. The root site is unchanged.

## Open locally

From the repo root:

```bash
py -m http.server 5173 --directory redesign
```

Then open `http://127.0.0.1:5173/`.

## File layout

| Path | Role |
|------|------|
| `index.html` | Markup + Tailwind CDN config |
| `css/base.css` | Fade-in animations and base resets |
| `js/nav.js` | Bubble navigation |
| `js/fab.js` | Contact FAB visibility |
| `js/animations.js` | Scroll fade-ins |
| `js/metrics.js` | Coursework counter |
| `js/main.js` | Initializes all modules |
| `assets/` | Header, logos, pokeapi, zip, profile |

## Mapped from original

- Nav: Home / About / Portfolio / Contact
- Name, MJC bio, percussion/WGI background
- Pokemon Card API project + zip download
- Coursework list
- Facebook, Instagram, GitHub, email
