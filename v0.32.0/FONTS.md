# Fonts in the browser build

The browser has no system fonts. The web build of TraceDraw brings free
fonts whose licences allow redistribution with software, in two ways.

## Bundled into the module

Always there, loaded with the page:

| Fonts | Licence |
|---|---|
| Liberation Sans, Serif, Mono | SIL Open Font License 1.1 |
| DejaVu Sans | Bitstream Vera Fonts licence and public domain changes |
| Noto Sans Devanagari, Noto Sans Bengali | SIL Open Font License 1.1 |

## The font folder

The published page has a `fonts/` folder (built by `web/font_folder.py`
from the list in `web/fonts.txt`). The page reads its list when it
starts and fetches a family's files the first time a drawing's text
needs it: text set in that family, text set in a family it stands in
for (Carlito for Calibri, Caladea for Cambria, Gelasio for Georgia, the
TeX Gyre faces for Palatino, Bookman, Century Schoolbook, Century
Gothic and Zapf Chancery, Comic Neue for Comic Sans ...), or letters of
a script only it has (Chinese, Japanese, Korean, Arabic, Hebrew, Thai).
The font lists show these families from the start. With the interface in Chinese
or Japanese, the page also fetches Noto Sans SC, TC or JP when it starts,
for the menus and dialogs. `fonts/licences/`
holds the licence of every font in the folder.

| Fonts | Licence |
|---|---|
| Families from the google/fonts collection (Carlito, Caladea, Gelasio, Comic Neue, EB Garamond, Open Sans, Roboto, Montserrat, Lato, Poppins, Inter, Noto Sans and Serif, Noto Sans Arabic, Hebrew, Thai, SC, TC, JP and KR, and about ninety more; see `web/fonts.txt`) | SIL Open Font License 1.1, Apache License 2.0 (Roboto Slab) or Ubuntu Font Licence 1.0 (Ubuntu, Ubuntu Mono) |
| TeX Gyre Pagella, Bonum, Schola, Adventor, Chorus, Heros Cn | GUST Font License |
| DejaVu Serif, DejaVu Sans Mono | Bitstream Vera Fonts licence and public domain changes |

## The font catalog

Every other family of the google/fonts collection (about 2,000, under
the SIL Open Font License 1.1, the Apache License 2.0 or the Ubuntu Font
Licence 1.0) is listed in `fonts/catalog.json` (built by
`web/font_catalog.py`) with the paths of its files at the commit
`fonts.txt` pins. The page fetches a family's files from that commit
through GitHub's file server (`raw.githubusercontent.com`) the first time
a drawing's text needs it or the pointer rests on it in a font list; each
family's licence sits next to its files in that repository. The page
does not copy these files.

The desktop builds bundle no fonts: they use the fonts installed on the
computer.
