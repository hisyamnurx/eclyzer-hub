/**
 * Eclyzer Hub — Popup Logic
 * All links are defined in ECLYZER_LINKS config below.
 * To add/edit/remove a tool, simply update the config array.
 */

// ============================================
// CONFIGURATION — Edit links here
// ============================================

const ECLYZER_LINKS = [
  {
    id: "eclyzer-net",
    title: "Eclyzer",
    description: "Main website",
    url: "https://eclyzer.net",
    category: "main",
    icon: "logo"
  },
  {
    id: "eclyzer-ai",
    title: "Eclyzer AI",
    description: "AI assistant",
    url: "https://ai.eclyzer.net",
    category: "main",
    icon: "logo"
  },
  {
    id: "markdown-viewer",
    title: "Markdown Viewer",
    description: "Preview markdown files",
    url: "https://eclyzer.net/tools/markdown",
    category: "tools",
    icon: "document"
  },
  {
    id: "github",
    title: "GitHub",
    description: "Project and source code",
    url: "https://github.com/hisyamnurx",
    category: "links",
    icon: "github"
  }
];

// Category display order and labels
const CATEGORIES = [
  { key: "main",  label: "Main" },
  { key: "tools", label: "Tools" },
  { key: "links", label: "Links" }
];

// ============================================
// SVG ICONS — Lightweight inline icons
// ============================================

const ICONS = {
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>`,

  sparkle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/>
  </svg>`,

  document: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>`,

  github: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>`,

  message: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>`
};

const EXTERNAL_LINK_SVG = `<svg class="link-btn-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
  <polyline points="15 3 21 3 21 9"></polyline>
  <line x1="10" y1="14" x2="21" y2="3"></line>
</svg>`;

// ============================================
// RENDERING
// ============================================

/**
 * Safely open a URL in a new tab.
 * Uses window.open with security flags.
 */
function openLink(url) {
  try {
    window.open(url, "_blank", "noopener,noreferrer");
  } catch (err) {
    // Silently fail — do not crash the popup
  }
}

/**
 * Create a single link button element.
 */
function createLinkButton(item) {
  const btn = document.createElement("button");
  btn.className = "link-btn";
  btn.type = "button";
  btn.id = `btn-${item.id}`;
  btn.setAttribute("aria-label", `Open ${item.title}`);
  btn.title = item.description || item.title;

  // Icon
  const iconEl = document.createElement("span");
  iconEl.className = "link-btn-icon";
  if (item.icon === "logo") {
    const img = document.createElement("img");
    img.src = "icons/icon-48.png";
    img.alt = "";
    img.width = 18;
    img.height = 18;
    img.className = "link-btn-logo";
    iconEl.appendChild(img);
  } else {
    iconEl.innerHTML = ICONS[item.icon] || ICONS.globe;
  }
  iconEl.setAttribute("aria-hidden", "true");

  // Content
  const contentEl = document.createElement("span");
  contentEl.className = "link-btn-content";

  const titleEl = document.createElement("span");
  titleEl.className = "link-btn-title";
  titleEl.textContent = item.title;
  contentEl.appendChild(titleEl);

  if (item.description) {
    const descEl = document.createElement("span");
    descEl.className = "link-btn-desc";
    descEl.textContent = item.description;
    contentEl.appendChild(descEl);
  }

  // Arrow
  const arrowEl = document.createElement("span");
  arrowEl.className = "link-btn-arrow";
  arrowEl.innerHTML = EXTERNAL_LINK_SVG;
  arrowEl.setAttribute("aria-hidden", "true");

  btn.appendChild(iconEl);
  btn.appendChild(contentEl);
  btn.appendChild(arrowEl);

  btn.addEventListener("click", () => openLink(item.url));

  return btn;
}

/**
 * Group links by category and render sections.
 */
function renderPopup() {
  const container = document.getElementById("popup-content");
  if (!container) return;

  // Group links by category
  const grouped = {};
  for (const link of ECLYZER_LINKS) {
    if (!grouped[link.category]) {
      grouped[link.category] = [];
    }
    grouped[link.category].push(link);
  }

  // Render each category section in order
  for (const cat of CATEGORIES) {
    const items = grouped[cat.key];
    if (!items || items.length === 0) continue;

    const section = document.createElement("section");
    section.className = "section";

    const label = document.createElement("div");
    label.className = "section-label";
    label.textContent = cat.label;
    section.appendChild(label);

    const itemsContainer = document.createElement("div");
    itemsContainer.className = "section-items";

    for (const item of items) {
      itemsContainer.appendChild(createLinkButton(item));
    }

    section.appendChild(itemsContainer);
    container.appendChild(section);
  }
}

// ============================================
// INIT
// ============================================

document.addEventListener("DOMContentLoaded", renderPopup);
