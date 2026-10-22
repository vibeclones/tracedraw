# tracedraw (Vibeclones mirror)

Hosted copies of the browser version of [TraceDraw](https://github.com/igtoth/tracedraw), an open-source, clean-room vector editor in pure Rust that opens CorelDRAW `.cdr` files, from [igtoth](https://github.com/igtoth). The code is theirs; this repo only hosts it. The project's own web app is at https://igtoth.github.io/tracedraw/ (the newest version only), and it also ships desktop apps for Windows, macOS and Linux.

- Latest: `/tracedraw/latest/`
- A specific version: `/tracedraw/v<version>/`, for example `/tracedraw/v0.9.0/`
- Version list: `/tracedraw/versions.json`

The project publishes its browser build only on its own page, not with its releases. So a scheduled workflow builds each release tag from source with the same steps as the project's own web job (the Rust toolchain and wasm-bindgen versions that tag's own workflow pins, then the page, font folder and help), and keeps the result under `v<version>/`. The page uses only relative paths, so it is kept exactly as built.

**License:** TraceDraw is MIT OR Apache-2.0. Every version folder includes both license files and a `SOURCE.txt` naming the release it was built from. The full source for each version is at https://github.com/igtoth/tracedraw (tag `v<version>`).
