# Chrome Web Store — Submission Assets Guide

This document outlines everything you need to submit **Eclyzer Hub** to the Chrome Web Store.

---

## Extension Details

| Field              | Value                                                        |
|--------------------|--------------------------------------------------------------|
| **Name**           | Eclyzer Hub                                                  |
| **Version**        | 1.0.0                                                        |
| **Category**       | Productivity (or Developer Tools)                            |
| **Language**       | English                                                      |
| **Website**        | https://eclyzer.net                                          |

---

## Short Description (132 chars max)

```
Quick access to Eclyzer.net, Eclyzer AI, and Eclyzer tools like Markdown Viewer — right from your browser toolbar.
```

---

## Detailed Description

```
Eclyzer Hub is a lightweight browser extension that gives you instant access to the Eclyzer ecosystem.

With one click, open:
• Eclyzer.net — The main Eclyzer website
• Eclyzer AI — AI-powered assistant
• Markdown Viewer — Preview and read markdown files
• GitHub — View source code and projects

Features:
• Clean, modern dark interface
• Zero permissions required — your data stays private
• No tracking, no analytics, no ads
• Lightweight — no frameworks, instant popup
• Works on Chrome and Microsoft Edge

Eclyzer Hub is built for developers and students who want fast shortcuts to Eclyzer services without cluttering their browser.

Privacy-first: This extension does not collect, store, or transmit any user data. See our privacy policy for details.
```

---

## Icons Required

| Size     | File              | Usage                        |
|----------|-------------------|------------------------------|
| 16×16    | `icons/icon-16.png`   | Browser toolbar (small)      |
| 32×32    | `icons/icon-32.png`   | Browser toolbar (2x)         |
| 48×48    | `icons/icon-48.png`   | Extensions management page   |
| 128×128  | `icons/icon-128.png`  | Chrome Web Store listing     |

All icons should be PNG format with transparent background.

---

## Screenshots Required

Chrome Web Store requires **1–5 screenshots** (1280×800 or 640×400 pixels).

### Recommended screenshots to prepare:

1. **Popup overview** — Show the full popup with all sections visible
2. **Hover state** — Show a button being hovered with the subtle animation
3. **Toolbar icon** — Show the extension pinned in the Chrome toolbar

### How to capture:

1. Install the extension locally via `chrome://extensions`
2. Click the extension icon to open the popup
3. Use Chrome DevTools to resize if needed
4. Capture with Windows Snipping Tool or Chrome's built-in screenshot tool
5. Resize to 1280×800 px

---

## Promotional Images (Optional)

| Size       | Usage                    |
|------------|--------------------------|
| 440×280    | Small promotional tile   |
| 920×680    | Large promotional tile   |
| 1400×560   | Marquee promotional      |

These are optional but recommended for better store visibility.

---

## Privacy Policy

- Use the contents of `PRIVACY.md` in the project root
- Host the privacy policy at a public URL (e.g., on eclyzer.net or a GitHub gist)
- Paste the URL in the Chrome Web Store Developer Dashboard

---

## Permission Justification

Since this extension uses **zero permissions** (`"permissions": []`), no justification is needed during the review process.

The extension:
- Does not access tabs
- Does not read page content
- Does not use storage
- Does not make network requests

This makes the review process straightforward.

---

## Single Purpose Description

When asked to describe the single purpose of your extension:

```
Eclyzer Hub provides quick-access shortcuts to Eclyzer web services (Eclyzer.net, Eclyzer AI, and Eclyzer tools) from the browser toolbar popup.
```

---

## Submission Checklist

- [ ] ZIP file created (manifest.json, popup.html, popup.css, popup.js, icons/)
- [ ] All icons are correct sizes (16, 32, 48, 128)
- [ ] At least 1 screenshot prepared (1280×800 or 640×400)
- [ ] Short description written (under 132 chars)
- [ ] Detailed description written
- [ ] Privacy policy hosted at public URL
- [ ] Category selected (Productivity or Developer Tools)
- [ ] Tested on Chrome and Edge
- [ ] No console errors
- [ ] Developer account registered ($5 one-time fee)
