# Eclyzer Hub — Browser Extension

**Quick access to Eclyzer.com, Eclyzer AI, and Eclyzer tools from your browser toolbar.**

Eclyzer Hub is a lightweight Chromium-based browser extension (Manifest V3) that serves as the official launcher for the Eclyzer ecosystem. One click opens any Eclyzer service in a new tab — no login, no tracking, no permissions needed.

---

## Features

- 🌐 **Eclyzer.com** — Open the main website instantly
- ✦ **Eclyzer AI** — Launch the AI assistant
- 📄 **Eclyzer Markdown Studio** — Write and preview markdown
- **Eclyzer Home Lab** — Check server and service status
- **Eclyzer API / Router** — Access models through one API
- **Eclink** — Manage AI agent profiles on Windows
- 🔒 **Zero permissions** — No access to your tabs, history, or browsing data
- ⚡ **Lightweight** — No frameworks, no dependencies, instant popup

---

## Project Structure

```
Ekstensi-Browser-Eclyzer/
├── manifest.json          # Extension manifest (MV3)
├── popup.html             # Popup UI shell
├── popup.css              # Styles (light and dark themes)
├── popup.js               # Logic & link config
├── logo.png               # Original Eclyzer logo
├── README.md              # This file
├── PRIVACY.md             # Privacy policy
├── ECLYZER_HUB_EXTENSION_PRD.md  # Product requirements
├── icons/
│   ├── logo.png           # Original logo copy
│   ├── icon-16.png        # Toolbar icon
│   ├── icon-32.png        # Toolbar icon (2x)
│   ├── icon-48.png        # Extensions page icon
│   └── icon-128.png       # Chrome Web Store icon
└── store-assets/
    └── README.md           # Store submission guide
```

---

## Install (Local — Chrome)

1. Open Chrome and go to `chrome://extensions`
2. Enable **Developer Mode** (toggle in the top-right corner)
3. Click **Load unpacked**
4. Select the `Ekstensi-Browser-Eclyzer` folder
5. The Eclyzer Hub icon appears in your toolbar — click it to open

> **Tip:** Pin the extension for quick access by clicking the puzzle icon in the toolbar and pinning "Eclyzer Hub".

---

## Install (Local — Microsoft Edge)

1. Open Edge and go to `edge://extensions`
2. Enable **Developer Mode** (toggle in the bottom-left)
3. Click **Load unpacked**
4. Select the `Ekstensi-Browser-Eclyzer` folder
5. Done! Click the Eclyzer Hub icon in the toolbar

---

## Edit shortcuts

Edit the `shortcuts` array in `popup.js`. Each entry has a title, detail, HTTPS URL, and icon. The first entry is featured at the top. Reload the extension to preview changes.

---

## How to Change the Logo / Icon

1. Replace `logo.png` in the project root with your new logo
2. Resize the logo to the following sizes and place them in `icons/`:
   - `icon-16.png` — 16×16 px
   - `icon-32.png` — 32×32 px
   - `icon-48.png` — 48×48 px
   - `icon-128.png` — 128×128 px
3. Also copy the new logo to `icons/logo.png`
4. Reload the extension

You can use any image editor or online tool like [Favicon.io](https://favicon.io/) to resize.

---

## How to Package for Chrome Web Store

1. Make sure all files are finalized and icons are correct
2. Create a ZIP of the project folder:
   ```
   # Include these files:
   manifest.json, popup.html, popup.css, popup.js, icons/
   ```
3. **Do NOT include**: `README.md`, `PRIVACY.md`, `store-assets/`, `ECLYZER_HUB_EXTENSION_PRD.md`, `.git/`
4. Go to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
5. Create a new item and upload the ZIP
6. Fill in the store listing details (see `store-assets/README.md`)
7. Submit for review

---

## Privacy & Permissions

Eclyzer Hub requires **zero browser permissions**.

- ✅ Does not read your browsing data
- ✅ Does not access your tabs or history
- ✅ Does not inject scripts into web pages
- ✅ Does not collect or transmit any user data
- ✅ Does not use analytics or tracking
- ✅ Does not connect to external servers
- ✅ Only opens official Eclyzer links in new tabs

See [PRIVACY.md](PRIVACY.md) for the full privacy policy.

---

## Tech Stack

- **Manifest V3** (Chrome / Edge compatible)
- **HTML** — Semantic popup structure
- **CSS** — Adaptive light and dark themes, no frameworks
- **JavaScript** — Vanilla, no dependencies
- **No build step** — Load directly as unpacked extension

---

## Browser Compatibility

| Browser          | Status     |
|------------------|------------|
| Google Chrome    | ✅ Supported |
| Microsoft Edge   | ✅ Supported |
| Brave            | ✅ Should work |
| Opera            | ✅ Should work |
| Vivaldi          | ✅ Should work |

---

## Links

- Website: [eclyzer.com](https://eclyzer.com)
- Eclyzer AI: [ai.eclyzer.com](https://ai.eclyzer.com)
- GitHub: [github.com/hisyamnurx](https://github.com/hisyamnurx)

---

## License

© 2026 Eclyzer. All rights reserved.
