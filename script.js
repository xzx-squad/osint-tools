/*
  ==========================================
  OSINT CATALOG — ДАННЫЕ КАТАЛОГА
  ==========================================
  Чтобы добавить/изменить инструмент, редактируй
  массив TOOLS ниже. Никакой базы данных не нужно.
*/

const TOOLS = [
  // Поиск и мониторинг
  {
    category: "Поиск и мониторинг",
    name: "Google",
    url: "https://www.google.com/",
    icon: "G",
    description: "Поисковая система"
  },
  {
    category: "Поиск и мониторинг",
    name: "Yandex",
    url: "https://yandex.com/",
    icon: "Я",
    description: "Поиск и веб-сервисы"
  },
  {
    category: "Поиск и мониторинг",
    name: "DuckDuckGo",
    url: "https://duckduckgo.com/",
    icon: "D",
    description: "Поиск"
  },
  {
    category: "Поиск и мониторинг",
    name: "Brave Search",
    url: "https://search.brave.com/",
    icon: "B",
    description: "Независимый поиск"
  },
  {
    category: "Поиск и мониторинг",
    name: "SearXNG",
    url: "https://searx.space/",
    icon: "S",
    description: "Метапоиск"
  },
  {
    category: "Поиск и мониторинг",
    name: "Startpage",
    url: "https://www.startpage.com/",
    icon: "S",
    description: "Приватный поиск"
  },
  {
    category: "Поиск и мониторинг",
    name: "Google Scholar",
    url: "https://scholar.google.com/",
    icon: "G",
    description: "Научный поиск"
  },
  {
    category: "Поиск и мониторинг",
    name: "arXiv",
    url: "https://arxiv.org/",
    icon: "X",
    description: "Научные публикации"
  },

  // Люди и контакты
  {
    category: "Люди и контакты",
    name: "Hunter",
    url: "https://hunter.io/",
    icon: "H",
    description: "Поиск рабочих email"
  },
  {
    category: "Люди и контакты",
    name: "Have I Been Pwned",
    url: "https://haveibeenpwned.com/",
    icon: "P",
    description: "Проверка утечек аккаунтов"
  },
    {
    category: "Люди и контакты",
    name: "Truecaller",
    url: "https://www.truecaller.com/",
    icon: "P",
    description: "Проверка базы данных номеров"
  },

  // Соцсети и мессенджеры
  {
    category: "Соцсети и мессенджеры",
    name: "Telegram",
    url: "https://web.telegram.org/",
    icon: "T",
    description: "Мессенджер"
  },
  {
    category: "Соцсети и мессенджеры",
    name: "Reddit",
    url: "https://www.reddit.com/",
    icon: "R",
    description: "Социальная платформа"
  },

  // Домены, сеть и угрозы
  {
    category: "Домены, сеть и угрозы",
    name: "SecurityTrails",
    url: "https://securitytrails.com/",
    icon: "S",
    description: "DNS и доменная информация"
  },
  {
    category: "Домены, сеть и угрозы",
    name: "crt.sh",
    url: "https://crt.sh/",
    icon: "C",
    description: "Certificate Transparency"
  },
  {
    category: "Домены, сеть и угрозы",
    name: "VirusTotal",
    url: "https://www.virustotal.com/",
    icon: "V",
    description: "Анализ файлов, URL и доменов"
  },

  // Гео и объекты
  {
    category: "Гео и объекты",
    name: "OpenStreetMap",
    url: "https://www.openstreetmap.org/",
    icon: "M",
    description: "Открытая карта"
  },
  {
    category: "Гео и объекты",
    name: "Google Maps",
    url: "https://maps.google.com/",
    icon: "M",
    description: "Карты и объекты"
  },

  // Медиа и файлы
  {
    category: "Медиа и файлы",
    name: "ExifTool",
    url: "https://exiftool.org/",
    icon: "E",
    description: "Метаданные файлов"
  },
  {
    category: "Медиа и файлы",
    name: "InVID",
    url: "https://www.invid-project.eu/",
    icon: "I",
    description: "Анализ и проверка видео"
  },

  // Реестры и бизнес
  {
    category: "Реестры и бизнес",
    name: "OpenCorporates",
    url: "https://opencorporates.com/",
    icon: "O",
    description: "Данные о компаниях"
  },

  // Крипто и блокчейн
  {
    category: "Крипто и блокчейн",
    name: "Etherscan",
    url: "https://etherscan.io/",
    icon: "Ξ",
    description: "Ethereum explorer"
  },
  {
    category: "Крипто и блокчейн",
    name: "Blockchain.com Explorer",
    url: "https://www.blockchain.com/explorer",
    icon: "₿",
    description: "Blockchain explorer"
  },

  // Рабочая среда
  {
    category: "Рабочая среда",
    name: "CyberChef",
    url: "https://gchq.github.io/CyberChef/",
    icon: "C",
    description: "Инструменты преобразования данных"
  },

  // Искусственный интеллект
  {
    category: "Искусственный интеллект",
    name: "Hugging Face",
    url: "https://huggingface.co/",
    icon: "HF",
    description: "Модели и AI-инструменты"
  },

  // OPSEC и обучение
  {
    category: "OPSEC и обучение",
    name: "OWASP",
    url: "https://owasp.org/",
    icon: "O",
    description: "Безопасность и обучение"
  },

  // Код и репозитории
  {
    category: "Код и репозитории",
    name: "GitHub",
    url: "https://github.com/",
    icon: "GH",
    description: "Репозитории и код"
  },
  {
    category: "Код и репозитории",
    name: "GitLab",
    url: "https://gitlab.com/",
    icon: "GL",
    description: "Репозитории и CI/CD"
  },

  // Дорки
  {
    category: "Дорки",
    name: "Google Advanced Search",
    url: "https://www.google.com/advanced_search",
    icon: "G",
    description: "Расширенный поиск"
  },

  // Порты
  {
    category: "Порты",
    name: "Shodan",
    url: "https://www.shodan.io/",
    icon: "S",
    description: "Поиск публично доступных сервисов"
  },
  {
    category: "Порты",
    name: "Censys",
    url: "https://search.censys.io/",
    icon: "C",
    description: "Поиск интернет-хостов и сертификатов"
  },

  // Зеркала
  {
    category: "Зеркала",
    name: "Archive.today",
    url: "https://archive.today/",
    icon: "A",
    description: "Архив веб-страниц"
  },
  {
    category: "Зеркала",
    name: "Wayback Machine",
    url: "https://web.archive.org/",
    icon: "W",
    description: "Веб-архив"
  }
];

const state = {
  category: "all",
  query: "",
  alphabetical: true
};

const catalog = document.getElementById("catalog");
const categoryNav = document.getElementById("categoryNav");
const searchInput = document.getElementById("searchInput");
const empty = document.getElementById("empty");
const toolCount = document.getElementById("toolCount");
const categoryCount = document.getElementById("categoryCount");
const allCount = document.getElementById("allCount");

const categories = [...new Set(TOOLS.map(tool => tool.category))];

function getCategoryCounts() {
  return categories.reduce((result, category) => {
    result[category] = TOOLS.filter(tool => tool.category === category).length;
    return result;
  }, {});
}

function renderCategoryNav() {
  const counts = getCategoryCounts();

  categoryNav.innerHTML = categories.map(category => `
    <button class="category ${state.category === category ? "active" : ""}"
            data-category="${escapeHtml(category)}">
      <span>${escapeHtml(category)}</span>
      <span class="count">${counts[category]}</span>
    </button>
  `).join("");

  document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      render();
    });
  });

  allCount.textContent = TOOLS.length;
}

function filteredTools() {
  const query = state.query.toLowerCase().trim();

  let result = TOOLS.filter(tool => {
    const categoryMatch =
      state.category === "all" || tool.category === state.category;

    const searchMatch =
      !query ||
      tool.name.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      tool.category.toLowerCase().includes(query);

    return categoryMatch && searchMatch;
  });

  if (state.alphabetical) {
    result = [...result].sort((a, b) =>
      a.name.localeCompare(b.name, "ru")
    );
  }

  return result;
}

function render() {
  renderCategoryNav();

  const tools = filteredTools();
  const grouped = {};

  tools.forEach(tool => {
    if (!grouped[tool.category]) grouped[tool.category] = [];
    grouped[tool.category].push(tool);
  });

  catalog.innerHTML = Object.entries(grouped).map(([category, items]) => `
    <section class="category-block">
      <div class="category-heading">
        <h2>${escapeHtml(category)}</h2>
        <span>${items.length}</span>
      </div>

      <div class="tools">
        ${items.map(tool => `
          <a class="tool"
             href="${escapeAttribute(tool.url)}"
             target="_blank"
             rel="noopener noreferrer">
            <div class="tool-icon">${escapeHtml(tool.icon || "⌁")}</div>
            <div class="tool-body">
              <div class="tool-name">${escapeHtml(tool.name)}</div>
              <div class="tool-desc">${escapeHtml(tool.description || "")}</div>
              <div class="tool-url">${escapeHtml(new URL(tool.url).hostname)}</div>
            </div>
          </a>
        `).join("")}
      </div>
    </section>
  `).join("");

  empty.classList.toggle("hidden", tools.length !== 0);

  toolCount.textContent = tools.length;
  categoryCount.textContent = categories.length;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  render();
});

document.getElementById("sortBtn").addEventListener("click", event => {
  state.alphabetical = !state.alphabetical;
  event.currentTarget.textContent = state.alphabetical ? "A–Я" : "Исходный";
  render();
});

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "osint-theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

if (localStorage.getItem("osint-theme") === "light") {
  document.body.classList.add("light");
}

document.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }

  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    state.query = "";
    render();
    searchInput.blur();
  }
});

render();

const adminDialog = document.getElementById("adminDialog");
const adminLoginView = document.getElementById("adminLoginView");
const adminWorkspace = document.getElementById("adminWorkspace");
const adminLoginForm = document.getElementById("adminLoginForm");
const adminLoginError = document.getElementById("adminLoginError");
const adminStatus = document.getElementById("adminStatus");
const blockedIpList = document.getElementById("blockedIpList");
const adminLogList = document.getElementById("adminLogList");

async function adminRequest(url, options = {}) {
  const response = await fetch(url, {
    credentials: "same-origin",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    }
  });
  let result = {};
  try {
    result = await response.json();
  } catch {
    result = {};
  }
  if (!response.ok) throw new Error(result.error || "Не удалось выполнить запрос.");
  return result;
}

function showAdminLogin(message = "") {
  adminLoginView.hidden = false;
  adminWorkspace.hidden = true;
  adminLoginError.textContent = message;
  adminLoginError.hidden = !message;
}

function showAdminWorkspace() {
  adminLoginView.hidden = true;
  adminWorkspace.hidden = false;
  adminLoginError.hidden = true;
}

function renderBlockedIps(ips) {
  blockedIpList.replaceChildren();

  if (ips.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "admin-list-empty";
    emptyItem.textContent = "Заблокированных адресов нет.";
    blockedIpList.append(emptyItem);
    return;
  }

  ips.forEach(ip => {
    const item = document.createElement("li");
    const address = document.createElement("span");
    const removeButton = document.createElement("button");
    address.textContent = ip;
    removeButton.className = "admin-secondary";
    removeButton.type = "button";
    removeButton.textContent = "Снять блокировку";
    removeButton.addEventListener("click", async () => {
      try {
        await adminRequest(`/api/admin/blocked-ips/${encodeURIComponent(ip)}`, { method: "DELETE" });
        await loadAdminData();
        setAdminStatus(`Блокировка для ${ip} снята.`);
      } catch (error) {
        setAdminStatus(error.message, true);
      }
    });
    item.append(address, removeButton);
    blockedIpList.append(item);
  });
}

function renderAdminLogs(logs) {
  adminLogList.replaceChildren();

  if (logs.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 3;
    cell.className = "admin-list-empty";
    cell.textContent = "Записей пока нет.";
    row.append(cell);
    adminLogList.append(row);
    return;
  }

  logs.forEach(entry => {
    const row = document.createElement("tr");
    const timestamp = document.createElement("td");
    const address = document.createElement("td");
    const event = document.createElement("td");
    timestamp.textContent = new Intl.DateTimeFormat("ru-RU", {
      dateStyle: "short",
      timeStyle: "short"
    }).format(new Date(entry.at));
    address.textContent = entry.ip;
    event.textContent = entry.blocked ? "Заблокирован" : "Посещение";
    row.append(timestamp, address, event);
    adminLogList.append(row);
  });
}

function setAdminStatus(message, isError = false) {
  adminStatus.textContent = message;
  adminStatus.classList.toggle("admin-error", isError);
}

async function loadAdminData() {
  const data = await adminRequest("/api/admin");
  renderBlockedIps(data.blockedIps);
  renderAdminLogs(data.logs);
}

async function openAdminPanel() {
  if (!adminDialog.open) adminDialog.showModal();
  showAdminLogin();

  try {
    const session = await adminRequest("/api/session");
    if (!session.authenticated) return;
    showAdminWorkspace();
    await loadAdminData();
  } catch {
    showAdminLogin("Не удалось связаться с сервером. Запустите сайт через Node.js-сервер.");
  }
}

document.getElementById("adminBtn").addEventListener("click", openAdminPanel);
document.getElementById("adminCloseBtn").addEventListener("click", () => adminDialog.close());

adminDialog.addEventListener("click", event => {
  if (event.target === adminDialog) adminDialog.close();
});

adminLoginForm.addEventListener("submit", async event => {
  event.preventDefault();
  const submitButton = adminLoginForm.querySelector('[type="submit"]');
  submitButton.disabled = true;

  try {
    await adminRequest("/api/login", {
      method: "POST",
      body: JSON.stringify({ password: document.getElementById("adminPassword").value })
    });
    adminLoginForm.reset();
    showAdminWorkspace();
    await loadAdminData();
    setAdminStatus("Вход выполнен.");
  } catch (error) {
    adminLoginError.textContent = error.message;
    adminLoginError.hidden = false;
  } finally {
    submitButton.disabled = false;
  }
});

document.getElementById("blockIpForm").addEventListener("submit", async event => {
  event.preventDefault();
  const input = document.getElementById("blockIpInput");

  try {
    await adminRequest("/api/admin/blocked-ips", {
      method: "POST",
      body: JSON.stringify({ ip: input.value })
    });
    const ip = input.value.trim();
    input.value = "";
    await loadAdminData();
    setAdminStatus(`Адрес ${ip} добавлен в блок-лист.`);
  } catch (error) {
    setAdminStatus(error.message, true);
  }
});

document.getElementById("clearLogsBtn").addEventListener("click", async () => {
  if (!confirm("Удалить все записи журнала?")) return;

  try {
    await adminRequest("/api/admin/logs", { method: "DELETE" });
    await loadAdminData();
    setAdminStatus("Журнал очищен.");
  } catch (error) {
    setAdminStatus(error.message, true);
  }
});

document.getElementById("adminLogoutBtn").addEventListener("click", async () => {
  try {
    await adminRequest("/api/logout", { method: "POST", body: "{}" });
    showAdminLogin("Вы вышли из панели администратора.");
  } catch (error) {
    setAdminStatus(error.message, true);
  }
});

if (window.location.pathname === "/admin") openAdminPanel();