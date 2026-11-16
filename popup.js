const shortcuts = [
  {
    title: "Situs utama Eclyzer",
    detail: "eclyzer.com",
    url: "https://eclyzer.com/",
    icon: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>'
  },
  {
    title: "Eclyzer AI",
    detail: "Asisten AI",
    url: "https://ai.eclyzer.com/",
    icon: '<path d="m12 3 2.3 6.7L21 12l-6.7 2.3L12 21l-2.3-6.7L3 12l6.7-2.3L12 3Z"/>'
  },
  {
    title: "Eclyzer Home Lab",
    detail: "Status server dan layanan",
    url: "https://home.eclyzer.com/",
    icon: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01m0 9h.01M11 7.5h6m-6 9h6"/>'
  },
  {
    title: "Markdown Studio",
    detail: "Tulis dan pratinjau Markdown",
    url: "https://markdown.eclyzer.com/",
    icon: '<path d="M5 3h9l5 5v13H5zM14 3v6h5M8 13h8m-8 4h6"/>'
  },
  {
    title: "Eclyzer API / Router",
    detail: "Banyak model lewat satu API",
    url: "https://router.eclyzer.site/",
    icon: '<path d="M3 12h6m6 0h6m-9-3V5m0 14v-4"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M10 5h4m-4 14h4"/>'
  },
  {
    title: "Eclink",
    detail: "Kelola profil agen AI di Windows",
    url: "https://eclink.eclyzer.com/",
    icon: '<path d="M10 13.5 14 9.5m-5 6-1.2 1.2a3 3 0 0 1-4.2-4.2L8 8.1a3 3 0 0 1 4.2 0m-1.4 7.8a3 3 0 0 0 4.2 0l4.4-4.4a3 3 0 0 0-4.2-4.2L14 8.5"/>'
  }
];

const template = document.querySelector("#shortcut");
const featured = document.querySelector("#featured");
const tools = document.querySelector("#tools");

function createShortcut({ title, detail, url, icon }) {
  const link = template.content.firstElementChild.cloneNode(true);
  link.href = url;
  link.querySelector("strong").textContent = title;
  link.querySelector(".shortcut-detail").textContent = detail;
  link.querySelector(".shortcut-icon").innerHTML = `<svg viewBox="0 0 24 24">${icon}</svg>`;
  return link;
}

const [website, ...services] = shortcuts;
featured.append(createShortcut(website));

for (const service of services) {
  const item = document.createElement("li");
  item.append(createShortcut(service));
  tools.append(item);
}
