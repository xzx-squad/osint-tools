const TOOLS = [
  // Поиск и мониторинг
  {
    category: "Поиск и мониторинг",
    name: "Google",
    url: "https://www.google.com/",
    icon: "G",
    description: "Поисковая система."
  },
  {
    category: "Поиск и мониторинг",
    name: "Yandex",
    url: "https://yandex.com/",
    icon: "Я",
    description: "Поиск и веб-сервисы."
  },
  {
    category: "Поиск и мониторинг",
    name: "DuckDuckGo",
    url: "https://duckduckgo.com/",
    icon: "D",
    description: "Поиск."
  },
  {
    category: "Поиск и мониторинг",
    name: "Brave Search",
    url: "https://search.brave.com/",
    icon: "B",
    description: "Независимый поиск."
  },
  {
    category: "Поиск и мониторинг",
    name: "SearXNG",
    url: "https://searx.space/",
    icon: "S",
    description: "Метапоиск."
  },
  {
    category: "Поиск и мониторинг",
    name: "Startpage",
    url: "https://www.startpage.com/",
    icon: "S",
    description: "Приватный поиск."
  },
  {
    category: "Поиск и мониторинг",
    name: "Google Scholar",
    url: "https://scholar.google.com/",
    icon: "G",
    description: "Научный поиск."
  },
  {
    category: "Поиск и мониторинг",
    name: "arXiv",
    url: "https://arxiv.org/",
    icon: "X",
    description: "Научные публикации."
  },

  // Люди и контакты
  {
    category: "Люди и контакты",
    name: "Hunter",
    url: "https://hunter.io/",
    icon: "H",
    description: "Поиск рабочих email-адресов."
  },
  {
    category: "Люди и контакты",
    name: "Have I Been Pwned",
    url: "https://haveibeenpwned.com/",
    icon: "P",
    description: "Проверка, появлялись ли аккаунты в утечках данных."
  },
  {
    category: "Люди и контакты",
    name: "Truecaller",
    url: "https://www.truecaller.com/",
    icon: "P",
    description: "База данных для поиска номеров телефонов."
  },
    {
    category: "Люди и контакты",
    name: "SMSC HLR Lookup",
    url: "https://smsc.ru/testhlr/",
    icon: "P",
    description: "Проверка номера телефона и его оператора."
  },
    {
    category: "Люди и контакты",
    name: "E-Caller",
    url: "https://www.e-caller.com/",
    icon: "P",
    description: "Проверка номера телефона и его оператора"
  },
   {
    category: "Люди и контакты",
    name: "HackCheck",
    url: "https://hackcheck.io/",
    icon: "P",
    description: "Проверка утечек данных и поиск информации о пользователях."
  },
   {
    category: "Люди и контакты",
    name: "Dehashed",
    url: "https://www.dehashed.com/",
    icon: "P",
    description: "Проверка утечек данных и поиск информации о пользователях."
  },
   {
    category: "Люди и контакты",
    name: "OSINTKit",
    url: "https://osintkit.net/",
    icon: "P",
    description: "Проверка утечек данных и поиск информации о русских жителях, совершивших преступления в Украине."
  },
  
  // Соцсети и мессенджеры
  {
    category: "Соцсети и мессенджеры",
    name: "TGCollector",
    url: "https://www.tgcollector.com/",
    icon: "T",
    description: "Сбор данных из Telegram."
  },
  {
    category: "Соцсети и мессенджеры",
    name: "TgramSearch",
    url: "https://tgramsearch.com/",
    icon: "R",
    description: "Удобный поиск по Telegram-каналам и группам."
  },
  {
    category: "Соцсети и мессенджеры",
    name: "Telescan",
    url: "https://github.com/pielco11/telescan",
    icon: "T",
    description: "Инструмент для анализа Telegram-каналов и групп."
  },
    {
    category: "Соцсети и мессенджеры",
    name: "Signal",
    url: "https://signal.org/",
    icon: "S",
    description: "Мессенджер с открытым исходным кодом и сквозным шифрованием."
  },

  // Домены, сеть и угрозы
  {
    category: "Домены, сеть и угрозы",
    name: "who.is",
    url: "https://who.is/",
    icon: "W",
    description: "Информация о владельцах доменов и IP-адресах."
  },
  {
    category: "Домены, сеть и угрозы",
    name: "onion lookup",
    url: "https://onion.ail-project.org/",
    icon: "O",
    description: "Поиск информации о .onion доменах и их владельцах."
  },
  {
    category: "Домены, сеть и угрозы",
    name: "VirusTotal",
    url: "https://www.virustotal.com/",
    icon: "V",
    description: "Анализ файлов, URL и доменов."
  },

  // Гео и объекты
  {
    category: "Гео и объекты",
    name: "OpenStreetMap",
    url: "https://www.openstreetmap.org/",
    icon: "M",
    description: "Открытая карта."
  },
  {
    category: "Гео и объекты",
    name: "Google Maps",
    url: "https://maps.google.com/",
    icon: "M",
    description: "Карта и спутниковые снимки."
  },
  {
    category: "Гео и объекты",
    name: "2GIS",
    url: "https://2gis.ru/",
    icon: "2",
    description: "Карта и справочник организаций."
  },
  {
    category: "Гео и объекты",
    name: "Автокод",
    url: "https://avtocod.ru/",
    icon: "2",
    description: "Проверка автомобилей по VIN, гос. номеру и другим параметрам."
  },
  {
    category: "Гео и объекты",
    name: "Nperf 5G Coverage Map",
    url: "https://www.nperf.com/en/map/5g",
    icon: "2",
    description: "Карта покрытия 5G в разных странах."
  },
    {
    category: "Гео и объекты",
    name: "Alerts.in.ua",
    url: "https://alerts.in.ua/",
    icon: "2",
    description: "Карта боевых действий в Украине."
  },

  // Медиа и файлы
  {
    category: "Медиа и файлы",
    name: "ExifTool",
    url: "https://exiftool.org/",
    icon: "E",
    description: "Метаданные файлов."
  },
  {
    category: "Медиа и файлы",
    name: "InVID",
    url: "https://www.invid-project.eu/",
    icon: "I",
    description: "Анализ и проверка видео."
  },

  // Реестры и бизнес
  {
    category: "Реестры и бизнес",
    name: "OpenCorporates",
    url: "https://opencorporates.com/",
    icon: "O",
    description: "Данные о компаниях."
  },

  // Крипто и блокчейн
  {
    category: "Крипто и блокчейн",
    name: "Etherscan",
    url: "https://etherscan.io/",
    icon: "Ξ",
    description: "Ethereum explorer."
  },
  {
    category: "Крипто и блокчейн",
    name: "Blockchain.com Explorer",
    url: "https://www.blockchain.com/explorer",
    icon: "₿",
    description: "Blockchain explorer."
  },

  // Рабочая среда
  {
    category: "Рабочая среда",
    name: "ZodiacGraph",
    url: "https://zodiacgraph.netlify.app/",
    icon: "Z",
    description: "Инструмент для визуализации связей и анализа данных."
  },
  {
    category: "Рабочая среда",
    name: "Obsidian",
    url: "https://obsidian.md/",
    icon: "O",
    description: "Мощный инструмент для заметок и организации знаний."
  },
  {
    category: "Рабочая среда",
    name: "Miro",
    url: "https://miro.com/",
    icon: "M",
    description: "Платформа для совместной работы и визуализации идей."
  },
  {
    category: "Рабочая среда",
    name: "OSINT Framework",
    url: "https://osintframework.com/",
    icon: "M",
    description: "Фреймворк для OSINT-ресурсов и инструментов."
  },

  // Искусственный интеллект
  {
    category: "Искусственный интеллект",
    name: "Hugging Face",
    url: "https://huggingface.co/",
    icon: "HF",
    description: "Модели и AI-инструменты."
  },

  // OPSEC и обучение
  {
    category: "OPSEC и обучение",
    name: "OWASP",
    url: "https://owasp.org/",
    icon: "O",
    description: "Безопасность и обучение."
  },
  {
    category: "OPSEC и обучение",
    name: "Tor",
    url: "https://torproject.org/",
    icon: "T",
    description: "Анонимный доступ и защита конфиденциальности."
  },

  // Код и репозитории
  {
    category: "Код и репозитории",
    name: "Nmap",
    url: "https://nmap.org/book/man.html",
    icon: "N",
    description: "Сканирование сетей и анализ уязвимостей."
  },
  {
    category: "Код и репозитории",
    name: "ISC SANS",
    url: "https://isc.sans.edu/rssfeed_full.xml",
    icon: "I",
    description: "Новости и анализ по кибербезопасности."
  },
  {
    category: "Код и репозитории",
    name: "GitHub",
    url: "https://github.com/",
    icon: "GH",
    description: "Репозитории и код."
  },
  {
    category: "Код и репозитории",
    name: "GitLab",
    url: "https://gitlab.com/",
    icon: "GL",
    description: "Репозитории и CI/CD."
  },

  // Дорки
  {
    category: "Дорки",
    name: "Google Advanced Search",
    url: "https://www.google.com/advanced_search",
    icon: "G",
    description: "Расширенный поиск."
  },

  // Порты
  {
    category: "Порты",
    name: "Shodan",
    url: "https://www.shodan.io/",
    icon: "S",
    description: "Поиск публично доступных сервисов."
  },
  {
    category: "Порты",
    name: "Censys",
    url: "https://search.censys.io/",
    icon: "C",
    description: "Поиск интернет-хостов и сертификатов."
  },

  // Зеркала
  {
    category: "Зеркала",
    name: "FindHomo",
    url: "https://www.findhomo.com/",
    icon: "З",
    description: "Поиск людей и открытых данных по профильным записям."
  },
  {
    category: "Зеркала",
    name: "FunStat/Telelog",
    url: "https://funstat.info/",
    icon: "З",
    description: "Анализ Telegram-каналов, групп и статистики активности аудитории."
  },
  {
    category: "Зеркала",
    name: "Oko Search",
    url: "https://okosearch.com/",
    icon: "З",
    verified: true,
    description: "Ищет данные по открытым источником по номеру телефона, ФИО, почта и т.д"
  },

  // Веб-архивы
  {
    category: "Веб-архивы",
    name: "Archive.today",
    url: "https://archive.today/",
    icon: "A",
    description: "Архив веб-страниц."
  },
  {
    category: "Веб-архивы",
    name: "Wayback Machine",
    url: "https://web.archive.org/",
    icon: "W",
    description: "Веб-архив."
  }
];

const FAVORITES_STORAGE_KEY = "osint-favorites";
const RECENT_STORAGE_KEY = "osint-recent-tools";

function loadFavorites() {
  try {
    const savedNames = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || "[]");
    const knownNames = new Set(TOOLS.map(tool => tool.name));
    return new Set(Array.isArray(savedNames) ? savedNames.filter(name => knownNames.has(name)) : []);
  } catch {
    return new Set();
  }
}

function loadRecentTools() {
  try {
    const savedNames = JSON.parse(localStorage.getItem(RECENT_STORAGE_KEY) || "[]");
    const knownNames = new Set(TOOLS.map(tool => tool.name));
    return Array.isArray(savedNames) ? savedNames.filter(name => knownNames.has(name)).slice(0, 5) : [];
  } catch {
    return [];
  }
}

const state = {
  category: "all",
  view: "cards",
  query: "",
  alphabetical: true,
  favorites: loadFavorites(),
  recent: loadRecentTools()
};

const CATEGORY_TRANSLATIONS = {
  ru: {
    "Поиск и мониторинг": "Поиск и мониторинг",
    "Люди и контакты": "Люди и контакты",
    "Соцсети и мессенджеры": "Соцсети и мессенджеры",
    "Домены, сеть и угрозы": "Домены, сеть и угрозы",
    "Гео и объекты": "Гео и объекты",
    "Медиа и файлы": "Медиа и файлы",
    "Реестры и бизнес": "Реестры и бизнес",
    "Крипто и блокчейн": "Крипто и блокчейн",
    "Рабочая среда": "Рабочая среда",
    "Искусственный интеллект": "Искусственный интеллект",
    "OPSEC и обучение": "OPSEC и обучение",
    "Код и репозитории": "Код и репозитории",
    "Дорки": "Дорки",
    "Порты": "Порты",
    "Зеркала": "Зеркала",
    "Веб-архивы": "Веб-архивы"
  },
  en: {
    "Поиск и мониторинг": "Search & Monitoring",
    "Люди и контакты": "People & Contacts",
    "Соцсети и мессенджеры": "Social Networks & Messengers",
    "Домены, сеть и угрозы": "Domains, Network & Threats",
    "Гео и объекты": "Geo & Places",
    "Медиа и файлы": "Media & Files",
    "Реестры и бизнес": "Registries & Business",
    "Крипто и блокчейн": "Crypto & Blockchain",
    "Рабочая среда": "Workspace",
    "Искусственный интеллект": "Artificial Intelligence",
    "OPSEC и обучение": "OPSEC & Training",
    "Код и репозитории": "Code & Repositories",
    "Дорки": "Dorks",
    "Порты": "Ports",
    "Зеркала": "Mirrors",
    "Веб-архивы": "Web Archives"
  }
};

const UI_TEXT = {
  ru: {
    categories: "Категории",
    allTools: "Все инструменты",
    viewCards: "Карточки",
    viewFolders: "Папки",
    backToFolders: "Все папки",
    folderToolCount: "инструментов",
    favorites: "Избранное",
    addFavorite: "Добавить в избранное",
    removeFavorite: "Убрать из избранного",
    recentlyOpened: "Недавно открытые",
    clearRecent: "Очистить",
    heroText: "Каталог инструментов OSINT.",
    toolsText: "инструментов",
    categoriesText: "категорий",
    searchPlaceholder: "Поиск инструмента...",
    emptyTitle: "Ничего не найдено",
    emptyText: "Попробуй изменить запрос или выбрать другую категорию.",
    emptyFavoritesTitle: "Избранное пока пусто",
    emptyFavoritesText: "Сохраняй полезные инструменты здесь, чтобы быстро находить их позже.",
    telegramLink: "Telegram-канал",
    sortAlphabetical: "А–Я",
    sortOriginal: "По добавлению",
    loadingTools: "Загружаем инструменты..."
  },
  en: {
    categories: "Categories",
    allTools: "All tools",
    viewCards: "Cards",
    viewFolders: "Folders",
    backToFolders: "All folders",
    folderToolCount: "tools",
    favorites: "Favorites",
    addFavorite: "Add to favorites",
    removeFavorite: "Remove from favorites",
    recentlyOpened: "Recently opened",
    clearRecent: "Clear",
    heroText: "A lightweight OSINT tool catalog for the team.",
    toolsText: "tools",
    categoriesText: "categories",
    searchPlaceholder: "Search tool...",
    emptyTitle: "Nothing found",
    emptyText: "Try a different query or choose another category.",
    emptyFavoritesTitle: "No favorites yet",
    emptyFavoritesText: "Save useful tools here to find them quickly later.",
    telegramLink: "Telegram channel",
    sortAlphabetical: "A–Z",
    sortOriginal: "As added",
    loadingTools: "Loading tools..."
  }
};

const LOADING_FACTS = [
  {
    ru: "OSINT — это сбор и анализ информации из открытых источников.",
    en: "OSINT is the collection and analysis of information from open sources."
  },
  {
    ru: "Метаданные фото иногда содержат модель камеры, дату съёмки и координаты.",
    en: "Photo metadata can sometimes include the camera model, capture date, and coordinates."
  },
  {
    ru: "Веб-архивы помогают находить сохранённые копии страниц прошлых лет.",
    en: "Web archives can help find saved copies of pages from previous years."
  },
  {
    ru: "DNS связывает доменные имена с техническими записями, например IP-адресами.",
    en: "DNS links domain names to technical records, such as IP addresses."
  },
  {
    ru: "Хеш файла помогает проверить, совпадает ли его содержимое с известной копией.",
    en: "A file hash can help verify whether its contents match a known copy."
  },
  {
    ru: "Поиск по изображению помогает находить похожие публикации, но сам по себе не доказывает источник.",
    en: "Reverse image search can find similar posts, but does not by itself prove the source."
  }
];

function chooseLoadingFactIndex() {
  const storageKey = "osint-loading-fact";
  const randomIndex = () => Math.floor(Math.random() * LOADING_FACTS.length);

  try {
    const previousIndex = Number(sessionStorage.getItem(storageKey));
    let nextIndex = randomIndex();

    if (Number.isInteger(previousIndex) && previousIndex >= 0 &&
        previousIndex < LOADING_FACTS.length && LOADING_FACTS.length > 1) {
      nextIndex = Math.floor(Math.random() * (LOADING_FACTS.length - 1));
      if (nextIndex >= previousIndex) nextIndex += 1;
    }

    sessionStorage.setItem(storageKey, String(nextIndex));
    return nextIndex;
  } catch (error) {
    if (error instanceof DOMException && error.name === "SecurityError") {
      return randomIndex();
    }
    throw error;
  }
}

const loadingFactIndex = chooseLoadingFactIndex();
const easterEggToast = document.getElementById("easterEggToast");
const easterEggTitle = document.getElementById("easterEggTitle");
const easterEggMessage = document.getElementById("easterEggMessage");
const easterEggClose = document.getElementById("easterEggClose");

const TOOL_NAMES_EN = {
  "Автокод": "Avtocod",
  "E-Caller": "E-Caller",
  "HackCheck": "HackCheck",
  "Dehashed": "Dehashed",
  "OSINTKit": "OSINTKit",
  "TGCollector": "TGCollector",
  "TgramSearch": "TgramSearch",
  "Telescan": "Telescan",
  "FindHomo": "FindHomo",
  "FunStat/Telelog": "FunStat/Telelog",
  "Зеркало": "Mirror"
};

const TOOL_DESCRIPTIONS_EN = {
  "Google": "Search engine.",
  "Yandex": "Search and web services.",
  "DuckDuckGo": "Search engine.",
  "Brave Search": "Independent search engine.",
  "SearXNG": "Meta-search engine.",
  "Startpage": "Private search engine.",
  "Google Scholar": "Academic search.",
  "arXiv": "Research publications.",
  "Hunter": "Find professional email addresses.",
  "Have I Been Pwned": "Check whether accounts have appeared in data breaches.",
  "Truecaller": "Phone number lookup database.",
  "SMSC HLR Lookup": "Check a phone number and its carrier.",
  "E-Caller": "Check a phone number and its operator.",
  "HackCheck": "Check data leaks and user information.",
  "Dehashed": "Search data leaks and user records.",
  "OSINTKit": "Search breach data and information about Russian citizens involved in crimes in Ukraine.",
  "TGCollector": "Collect data from Telegram.",
  "TgramSearch": "Search Telegram channels and groups.",
  "Telescan": "Analyze Telegram channels and groups.",
  "Signal": "Open-source messaging app with end-to-end encryption.",
  "who.is": "Domain and IP address ownership information.",
  "onion lookup": "Find information about .onion domains and their owners.",
  "VirusTotal": "Analyze files, URLs, and domains.",
  "OpenStreetMap": "Open map.",
  "Google Maps": "Maps and satellite imagery.",
  "2GIS": "Map and business directory.",
  "Автокод": "Vehicle check by VIN, license plate and other parameters.",
  "Nperf 5G Coverage Map": "5G coverage map across countries.",
  "Alerts.in.ua": "Map of combat actions in Ukraine.",
  "ExifTool": "File metadata.",
  "InVID": "Video analysis and verification.",
  "OpenCorporates": "Company data.",
  "Etherscan": "Ethereum explorer.",
  "Blockchain.com Explorer": "Blockchain explorer.",
  "ZodiacGraph": "Visualize connections and analyze data.",
  "Obsidian": "Note-taking and knowledge management.",
  "Miro": "Collaborative workspace for visualizing ideas.",
  "OSINT Framework": "OSINT resource and tool framework.",
  "Hugging Face": "AI models and tools.",
  "OWASP": "Security resources and training.",
  "Tor": "Anonymous access and privacy protection.",
  "Nmap": "Network scanning and vulnerability analysis.",
  "ISC SANS": "Cybersecurity news and analysis.",
  "GitHub": "Code and repositories.",
  "GitLab": "Repositories and CI/CD.",
  "Google Advanced Search": "Advanced search.",
  "Shodan": "Find publicly accessible internet-connected services.",
  "Censys": "Search internet hosts and certificates.",
  "FindHomo": "People search and profile data discovery service.",
  "FunStat/Telelog": "Telegram channel and group analytics with audience and activity statistics.",
  "Oko Search": "Search open-source information using a phone number, full name, email address, and more.",
  "Зеркало": "Mirror view for reading and analyzing web pages.",
  "Archive.today": "Web page archive.",
  "Wayback Machine": "Web archive."
};

function getToolName(tool) {
  if (getCurrentLanguage() === "en") {
    return TOOL_NAMES_EN[tool.name] || tool.name;
  }

  return tool.name;
}

function getToolDescription(tool) {
  if (getCurrentLanguage() === "en") {
    return TOOL_DESCRIPTIONS_EN[tool.name] || tool.description || "";
  }

  return tool.description || "";
}

function getCurrentLanguage() {
  return document.body.dataset.lang || "ru";
}

function translateCategory(category) {
  return CATEGORY_TRANSLATIONS[getCurrentLanguage()][category] || category;
}

function toolCountWord(count) {
  if (getCurrentLanguage() === "en") return count === 1 ? "tool" : "tools";

  const lastTwoDigits = count % 100;
  const lastDigit = count % 10;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return "инструментов";
  if (lastDigit === 1) return "инструмент";
  if (lastDigit >= 2 && lastDigit <= 4) return "инструмента";
  return "инструментов";
}

function applyLanguage(lang) {
  const textBundle = UI_TEXT[lang] || UI_TEXT.ru;

  document.body.dataset.lang = lang;
  document.documentElement.lang = lang === "en" ? "en" : "ru";

  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.textContent = lang === "en" ? "RU" : "EN";
  }

  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.dataset.i18n;
    if (textBundle[key]) {
      node.textContent = textBundle[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(node => {
    const key = node.dataset.i18nPlaceholder;
    if (textBundle[key]) {
      node.placeholder = textBundle[key];
    }
  });

  const catalogLoading = document.getElementById("catalogLoading");
  if (catalogLoading) {
    catalogLoading.textContent = textBundle.loadingTools;
  }

  const loadingFact = document.getElementById("loadingFact");
  if (loadingFact) {
    loadingFact.textContent = LOADING_FACTS[loadingFactIndex][lang] || LOADING_FACTS[loadingFactIndex].ru;
  }

  updateSortButton();

  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    const isLight = document.body.classList.contains("light");
    themeBtn.title = lang === "en" ? "Toggle theme" : "Переключить тему";
    themeBtn.setAttribute("aria-label", lang === "en" ? "Toggle theme" : "Переключить тему");
    themeBtn.setAttribute("aria-pressed", String(isLight));
  }

  render();
}

const catalog = document.getElementById("catalog");
const categoryNav = document.getElementById("categoryNav");
const searchInput = document.getElementById("searchInput");
const empty = document.getElementById("empty");
const toolCount = document.getElementById("toolCount");
const categoryCount = document.getElementById("categoryCount");
const allCount = document.getElementById("allCount");
const favoritesCount = document.getElementById("favoritesCount");
const favoritesToggle = document.getElementById("favoritesToggle");
const recentSection = document.getElementById("recentSection");
const recentToolsContainer = document.getElementById("recentTools");
const catalogLoading = document.getElementById("catalogLoading");
const loadingScreen = document.getElementById("loadingScreen");

const categories = [...new Set(TOOLS.map(tool => tool.category))];
const categoryCounts = TOOLS.reduce((counts, tool) => {
  counts[tool.category] = (counts[tool.category] || 0) + 1;
  return counts;
}, {});

function renderCategoryNav() {
  document.querySelector('.sidebar > .category[data-category="all"]')
    .classList.toggle("active", state.category === "all");
  favoritesToggle.setAttribute("aria-pressed", String(state.category === "favorites"));

  categoryNav.innerHTML = categories.map(category => `
    <button class="category ${state.category === category ? "active" : ""}"
            data-category="${escapeHtml(category)}">
      <span>${escapeHtml(translateCategory(category))}</span>
      <span class="count">${categoryCounts[category]}</span>
    </button>
  `).join("");

  allCount.textContent = TOOLS.length;
  favoritesCount.textContent = state.favorites.size;
}

function filteredTools() {
  const query = state.query.toLowerCase().trim();

  let result = TOOLS.filter(tool => {
    const categoryMatch = state.category === "all" ||
      (state.category === "favorites"
        ? state.favorites.has(tool.name)
        : tool.category === state.category);

    const searchMatch =
      !query ||
      getToolName(tool).toLowerCase().includes(query) ||
      (tool.description || "").toLowerCase().includes(query) ||
      getToolDescription(tool).toLowerCase().includes(query) ||
      tool.category.toLowerCase().includes(query);

    return categoryMatch && searchMatch;
  });

  if (state.alphabetical) {
    result = [...result].sort((a, b) =>
      getToolName(a).localeCompare(getToolName(b), undefined, { sensitivity: "base" })
    );
  }

  return result;
}

let renderVersion = 0;
let renderFrame = 0;
const RENDER_BATCH_SIZE = 12;

function finishLoadingScreen() {
  if (!loadingScreen || loadingScreen.classList.contains("is-hidden")) return;

  window.showAgreementScreen();
  loadingScreen.classList.add("is-hidden");
  loadingScreen.setAttribute("aria-hidden", "true");
}

function renderToolCard(tool) {
  const isFavorite = state.favorites.has(tool.name);
  const favoriteLabel = isFavorite ? UI_TEXT[getCurrentLanguage()].removeFavorite : UI_TEXT[getCurrentLanguage()].addFavorite;

  return `
    <article class="tool">
      <a class="tool-link"
         href="${escapeAttribute(tool.url)}"
        data-tool-name="${escapeAttribute(tool.name)}"
         target="_blank"
         rel="noopener noreferrer">
        <div class="tool-icon">${escapeHtml(tool.icon || "⌁")}</div>
        <div class="tool-body">
          <div class="tool-name">
            <span class="tool-name-text">${escapeHtml(getToolName(tool))}</span>
            ${tool.verified ? '<img class="verified-icon" src="verifed.png" alt="Verified" title="Verified">' : ""}
          </div>
          <div class="tool-desc">${escapeHtml(getToolDescription(tool))}</div>
          <div class="tool-url">${escapeHtml(new URL(tool.url).hostname)}</div>
        </div>
      </a>
      <button class="favorite-btn${isFavorite ? " is-favorite" : ""}"
              type="button"
              data-favorite="${escapeAttribute(tool.name)}"
              aria-label="${escapeAttribute(favoriteLabel)}"
              aria-pressed="${isFavorite}"
              title="${escapeAttribute(favoriteLabel)}"><span aria-hidden="true">${isFavorite ? "★" : "☆"}</span></button>
    </article>
  `;
}

function renderRecentTools() {
  const recentItems = state.recent
    .map(name => TOOLS.find(tool => tool.name === name))
    .filter(Boolean);
  const shouldShow = recentItems.length > 0 && !state.query.trim() && state.category === "all";

  recentSection.hidden = !shouldShow;
  recentToolsContainer.innerHTML = shouldShow ? recentItems.map(renderToolCard).join("") : "";
}

function render() {
  const version = ++renderVersion;

  if (renderFrame) {
    cancelAnimationFrame(renderFrame);
    renderFrame = 0;
  }
  renderRecentTools();
  renderCategoryNav();

  const tools = filteredTools();
  const grouped = {};

  tools.forEach(tool => {
    if (!grouped[tool.category]) grouped[tool.category] = [];
    grouped[tool.category].push(tool);
  });

  const viewButtons = [
    [document.getElementById("cardsViewBtn"), "cards"],
    [document.getElementById("foldersViewBtn"), "folders"]
  ];
  viewButtons.forEach(([button, view]) => {
    button.classList.toggle("active", state.view === view);
    button.setAttribute("aria-pressed", String(state.view === view));
  });

  const showFolderGrid = state.view === "folders" && state.category === "all";

  if (showFolderGrid) {
    const textBundle = UI_TEXT[getCurrentLanguage()] || UI_TEXT.ru;
    catalog.innerHTML = `<div class="folder-grid">${Object.entries(grouped).map(([category, items]) => `
      <button class="folder-card" type="button" data-folder-category="${escapeAttribute(category)}">
        <span class="folder-art" aria-hidden="true"><span></span></span>
        <span class="folder-card-copy">
          <strong>${escapeHtml(translateCategory(category))}</strong>
          <span>${items.length} ${toolCountWord(items.length)}</span>
        </span>
        <span class="folder-open-mark" aria-hidden="true">›</span>
      </button>
    `).join("")}</div>`;
  } else {
    const backButton = state.view === "folders" && state.category !== "favorites"
      ? `<button class="folder-back" type="button" data-folder-back><span aria-hidden="true">←</span> ${UI_TEXT[getCurrentLanguage()].backToFolders}</button>`
      : "";
    catalog.innerHTML = backButton + Object.entries(grouped).map(([category, items]) => `
      <section class="category-block">
        <div class="category-heading">
          <h2>${escapeHtml(translateCategory(category))}</h2>
          <span>${items.length}</span>
        </div>

        <div class="tools" data-category="${escapeAttribute(category)}"></div>
      </section>
    `).join("");
  }

  empty.classList.toggle("hidden", tools.length !== 0);
  const textBundle = UI_TEXT[getCurrentLanguage()] || UI_TEXT.ru;
  const showEmptyFavorites = state.category === "favorites" && state.favorites.size === 0 && !state.query.trim();
  empty.querySelector("h3").textContent = showEmptyFavorites ? textBundle.emptyFavoritesTitle : textBundle.emptyTitle;
  empty.querySelector("p").textContent = showEmptyFavorites ? textBundle.emptyFavoritesText : textBundle.emptyText;
  catalogLoading.classList.toggle("hidden", showFolderGrid || tools.length <= RENDER_BATCH_SIZE);
  catalog.setAttribute("aria-busy", String(!showFolderGrid && tools.length > RENDER_BATCH_SIZE));

  toolCount.textContent = tools.length;
  toolCount.nextElementSibling.textContent = toolCountWord(tools.length);
  categoryCount.textContent = new Set(tools.map(tool => tool.category)).size;

  if (tools.length === 0) {
    finishLoadingScreen();
    return;
  }

  if (showFolderGrid) {
    finishLoadingScreen();
    return;
  }

  const toolContainers = new Map(
    [...catalog.querySelectorAll(".tools")].map(container => [container.dataset.category, container])
  );
  let nextToolIndex = 0;

  const appendBatch = () => {
    if (version !== renderVersion) return;

    const batchByCategory = new Map();
    const batchEnd = Math.min(nextToolIndex + RENDER_BATCH_SIZE, tools.length);
    for (; nextToolIndex < batchEnd; nextToolIndex += 1) {
      const tool = tools[nextToolIndex];
      const batch = batchByCategory.get(tool.category) || [];
      batch.push(renderToolCard(tool));
      batchByCategory.set(tool.category, batch);
    }

    batchByCategory.forEach((cards, category) => {
      toolContainers.get(category).insertAdjacentHTML("beforeend", cards.join(""));
    });

    if (nextToolIndex < tools.length) {
      renderFrame = requestAnimationFrame(appendBatch);
    } else {
      renderFrame = 0;
      catalogLoading.classList.add("hidden");
      catalog.setAttribute("aria-busy", "false");
      finishLoadingScreen();
    }
  };

  appendBatch();
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

function updateSortButton() {
  const sortBtn = document.getElementById("sortBtn");
  if (!sortBtn) return;

  const textBundle = UI_TEXT[getCurrentLanguage()] || UI_TEXT.ru;
  sortBtn.textContent = state.alphabetical ? textBundle.sortAlphabetical : textBundle.sortOriginal;
}

function updateFavoriteButton(button, isFavorite) {
  const textBundle = UI_TEXT[getCurrentLanguage()] || UI_TEXT.ru;
  const label = isFavorite ? textBundle.removeFavorite : textBundle.addFavorite;
  button.classList.toggle("is-favorite", isFavorite);
  button.setAttribute("aria-label", label);
  button.setAttribute("aria-pressed", String(isFavorite));
  button.title = label;
  button.querySelector("span").textContent = isFavorite ? "★" : "☆";
}

function recordRecentTool(toolName) {
  state.recent = [toolName, ...state.recent.filter(name => name !== toolName)].slice(0, 5);
  try {
    localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(state.recent));
  } catch {}

  requestAnimationFrame(renderRecentTools);
}

searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  render();
});

document.querySelector(".sidebar").addEventListener("click", event => {
  const button = event.target.closest(".category");
  if (!button || !button.dataset.category) return;

  state.category = button.dataset.category;
  render();
});

favoritesToggle.addEventListener("click", () => {
  state.category = state.category === "favorites" ? "all" : "favorites";
  render();
});

function handleToolCardClick(event) {
  const link = event.target.closest(".tool-link");
  if (link) {
    recordRecentTool(link.dataset.toolName);
    return;
  }

  const button = event.target.closest(".favorite-btn");
  if (!button) return;

  const toolName = button.dataset.favorite;
  const isFavorite = !state.favorites.has(toolName);
  if (isFavorite) {
    state.favorites.add(toolName);
  } else {
    state.favorites.delete(toolName);
  }

  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify([...state.favorites]));
  } catch {}

  favoritesCount.textContent = state.favorites.size;
  updateFavoriteButton(button, isFavorite);
  if (state.category === "favorites") {
    render();
  }
}

catalog.addEventListener("click", handleToolCardClick);
catalog.addEventListener("click", event => {
  const folder = event.target.closest("[data-folder-category]");
  if (folder) {
    state.category = folder.dataset.folderCategory;
    render();
    return;
  }

  if (event.target.closest("[data-folder-back]")) {
    state.category = "all";
    render();
  }
});
recentToolsContainer.addEventListener("click", handleToolCardClick);

document.getElementById("clearRecent").addEventListener("click", () => {
  state.recent = [];
  try {
    localStorage.removeItem(RECENT_STORAGE_KEY);
  } catch {}
  renderRecentTools();
});

document.getElementById("sortBtn").addEventListener("click", () => {
  state.alphabetical = !state.alphabetical;
  updateSortButton();
  render();
});

document.getElementById("cardsViewBtn").addEventListener("click", () => {
  state.view = "cards";
  render();
});

document.getElementById("foldersViewBtn").addEventListener("click", () => {
  state.view = "folders";
  state.category = "all";
  render();
});

const langToggle = document.getElementById("langToggle");

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLang = getCurrentLanguage() === "en" ? "ru" : "en";
    applyLanguage(nextLang);
  });
}

applyLanguage("ru");

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  themeBtn.setAttribute("aria-pressed", String(isLight));
  localStorage.setItem("osint-theme", isLight ? "light" : "dark");
});

if (localStorage.getItem("osint-theme") === "light") {
  document.body.classList.add("light");
  themeBtn.setAttribute("aria-pressed", "true");
}

const OSINT_GAME_ROUNDS = [
  {
    id: "wayback",
    question: {
      ru: "Старая страница исчезла. Где искать сохранённую копию сайта?",
      en: "An old page disappeared. Where can you look for a saved copy?"
    },
    answers: [
      { ru: "Wayback Machine", en: "Wayback Machine" },
      { ru: "Shodan", en: "Shodan" },
      { ru: "ExifTool", en: "ExifTool" }
    ],
    correctIndex: 0,
    explanation: {
      ru: "Wayback Machine хранит снимки страниц из веб-архива.",
      en: "Wayback Machine stores snapshots of pages in a web archive."
    }
  },
  {
    id: "exiftool",
    question: {
      ru: "На фото могут остаться дата съёмки и модель камеры. Чем проверить метаданные?",
      en: "A photo may retain its capture date and camera model. Which tool checks its metadata?"
    },
    answers: [
      { ru: "OpenStreetMap", en: "OpenStreetMap" },
      { ru: "ExifTool", en: "ExifTool" },
      { ru: "Hunter", en: "Hunter" }
    ],
    correctIndex: 1,
    explanation: {
      ru: "ExifTool читает метаданные файлов, если они сохранились.",
      en: "ExifTool reads file metadata when it is present."
    }
  },
  {
    id: "censys",
    question: {
      ru: "Нужно изучить публичные TLS-сертификаты и связанные с доменом хосты. Что выбрать?",
      en: "You need to inspect public TLS certificates and hosts associated with a domain. What should you use?"
    },
    answers: [
      { ru: "Censys", en: "Censys" },
      { ru: "Archive.today", en: "Archive.today" },
      { ru: "Obsidian", en: "Obsidian" }
    ],
    correctIndex: 0,
    explanation: {
      ru: "Censys индексирует публичные интернет-хосты и TLS-сертификаты.",
      en: "Censys indexes publicly visible internet hosts and TLS certificates."
    }
  },
  {
    id: "hunter",
    question: {
      ru: "Есть домен компании; нужно найти публично указанные рабочие email-адреса. Какой сервис подойдёт?",
      en: "You have a company domain and need to find publicly listed work email addresses. Which service fits?"
    },
    answers: [
      { ru: "Hunter", en: "Hunter" },
      { ru: "Censys", en: "Censys" },
      { ru: "ExifTool", en: "ExifTool" }
    ],
    correctIndex: 0,
    explanation: {
      ru: "Hunter помогает находить публичные рабочие контакты по домену.",
      en: "Hunter helps find publicly listed work contacts by domain."
    }
  },
  {
    id: "virustotal",
    question: {
      ru: "Нужно проверить репутацию URL по результатам нескольких источников безопасности. Что выбрать?",
      en: "You need reputation signals for a URL from multiple security sources. What should you use?"
    },
    answers: [
      { ru: "VirusTotal", en: "VirusTotal" },
      { ru: "OpenCorporates", en: "OpenCorporates" },
      { ru: "Wayback Machine", en: "Wayback Machine" }
    ],
    correctIndex: 0,
    explanation: {
      ru: "VirusTotal собирает сигналы о файлах и URL из разных источников.",
      en: "VirusTotal aggregates signals about files and URLs from multiple sources."
    }
  },
  {
    id: "opencorporates",
    question: {
      ru: "Где искать публичные регистрационные сведения о компании из разных юрисдикций?",
      en: "Where can you look up public company registration records across jurisdictions?"
    },
    answers: [
      { ru: "OpenCorporates", en: "OpenCorporates" },
      { ru: "OpenStreetMap", en: "OpenStreetMap" },
      { ru: "Google Scholar", en: "Google Scholar" }
    ],
    correctIndex: 0,
    explanation: {
      ru: "OpenCorporates собирает открытые данные о компаниях и реестрах.",
      en: "OpenCorporates aggregates open company and registry data."
    }
  },
  {
    id: "openstreetmap",
    question: {
      ru: "Есть координаты места. Как посмотреть улицы и объекты рядом на открытой карте?",
      en: "You have coordinates for a place. Which open map can show nearby streets and features?"
    },
    answers: [
      { ru: "OpenStreetMap", en: "OpenStreetMap" },
      { ru: "Hunter", en: "Hunter" },
      { ru: "Archive.today", en: "Archive.today" }
    ],
    correctIndex: 0,
    explanation: {
      ru: "OpenStreetMap — открытая карта с улицами и географическими объектами.",
      en: "OpenStreetMap is an open map of streets and geographic features."
    }
  },
  {
    id: "scholar",
    question: {
      ru: "Нужно найти научные публикации и авторов по теме. Какой поисковик подойдёт?",
      en: "You need research papers and authors on a topic. Which search service fits?"
    },
    answers: [
      { ru: "Google Scholar", en: "Google Scholar" },
      { ru: "Shodan", en: "Shodan" },
      { ru: "Truecaller", en: "Truecaller" }
    ],
    correctIndex: 0,
    explanation: {
      ru: "Google Scholar индексирует научные работы и сведения об авторах.",
      en: "Google Scholar indexes academic works and author information."
    }
  }
];

let osintGameRounds = [];
let previousOsintGameOrder = "";

function shuffleOsintGameRounds() {
  const rounds = [...OSINT_GAME_ROUNDS];

  for (let index = rounds.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [rounds[index], rounds[swapIndex]] = [rounds[swapIndex], rounds[index]];
  }

  let order = rounds.map(round => round.id).join(",");
  if (rounds.length > 1 && order === previousOsintGameOrder) {
    rounds.push(rounds.shift());
    order = rounds.map(round => round.id).join(",");
  }
  previousOsintGameOrder = order;
  return rounds;
}

const osintGameScreen = document.getElementById("osintGameScreen");
const osintGameTitle = document.getElementById("osintGameTitle");
const osintGameEyebrow = document.getElementById("osintGameEyebrow");
const osintGameRound = document.getElementById("osintGameRound");
const osintGameScore = document.getElementById("osintGameScore");
const osintGameProgress = document.getElementById("osintGameProgress");
const osintGameQuestion = document.getElementById("osintGameQuestion");
const osintGameChoices = document.getElementById("osintGameChoices");
const osintGameFeedback = document.getElementById("osintGameFeedback");
const osintGameNext = document.getElementById("osintGameNext");
const osintGameClose = document.getElementById("osintGameClose");
const doxSequence = ["KeyD", "KeyO", "KeyX"];
const swatSequence = ["KeyS", "KeyW", "KeyA", "KeyT"];
const osintSequence = ["KeyO", "KeyS", "KeyI", "KeyN", "KeyT"];
const konamiSequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];
let doxSequenceIndex = 0;
let swatSequenceIndex = 0;
let osintSequenceIndex = 0;
let easterEggSequenceIndex = 0;
let osintGameRoundIndex = 0;
let osintGamePoints = 0;
let osintGameAnswered = false;
let osintGameFinished = false;
let osintGameReturnFocus = null;

function gameText(value) {
  return value[getCurrentLanguage()] || value.ru;
}

function updateOsintGameScore() {
  const lang = getCurrentLanguage();
  osintGameScore.textContent = lang === "en" ? `Score ${osintGamePoints}` : `Очки ${osintGamePoints}`;
}

function renderOsintGameRound() {
  const lang = getCurrentLanguage();
  const round = osintGameRounds[osintGameRoundIndex];
  osintGameTitle.textContent = lang === "en" ? "Open-source trail" : "Следы в открытых источниках";
  osintGameEyebrow.textContent = lang === "en" ? "OSINT / FIELD TEST" : "OSINT / ПОЛЕВАЯ ПРОВЕРКА";
  osintGameRound.textContent = lang === "en"
    ? `CASE ${String(osintGameRoundIndex + 1).padStart(2, "0")} / ${String(osintGameRounds.length).padStart(2, "0")}`
    : `ДОСЬЕ ${String(osintGameRoundIndex + 1).padStart(2, "0")} / ${String(osintGameRounds.length).padStart(2, "0")}`;
  osintGameQuestion.textContent = gameText(round.question);
  osintGameChoices.innerHTML = round.answers.map((answer, index) => `
    <button class="game-choice" type="button" data-choice="${index}">
      <span class="game-choice-key">0${index + 1}</span>
      <span>${escapeHtml(gameText(answer))}</span>
    </button>
  `).join("");
  osintGameFeedback.hidden = true;
  osintGameNext.hidden = true;
  osintGameNext.textContent = lang === "en" ? "Next" : "Дальше";
  osintGameProgress.style.width = `${(osintGameRoundIndex / osintGameRounds.length) * 100}%`;
  osintGameAnswered = false;
  updateOsintGameScore();
}

function openOsintGame() {
  const siteShell = document.getElementById("siteShell");
  osintGameReturnFocus = document.activeElement;
  osintGameRounds = shuffleOsintGameRounds();
  osintGameRoundIndex = 0;
  osintGamePoints = 0;
  osintGameFinished = false;
  renderOsintGameRound();
  osintGameScreen.hidden = false;
  document.body.classList.add("game-open");
  siteShell.inert = true;
  siteShell.setAttribute("aria-hidden", "true");
  osintGameClose.setAttribute("aria-label", getCurrentLanguage() === "en" ? "Close game" : "Закрыть игру");
  osintGameChoices.querySelector(".game-choice")?.focus();
}

function closeOsintGame() {
  const siteShell = document.getElementById("siteShell");
  osintGameScreen.hidden = true;
  document.body.classList.remove("game-open");
  siteShell.inert = false;
  siteShell.removeAttribute("aria-hidden");

  if (osintGameReturnFocus instanceof HTMLElement && osintGameReturnFocus !== document.body && osintGameReturnFocus.isConnected) {
    osintGameReturnFocus.focus();
  } else {
    document.querySelector(".brand").focus();
  }
}

function chooseOsintGameAnswer(index) {
  if (osintGameAnswered || osintGameFinished) return;

  const lang = getCurrentLanguage();
  const round = osintGameRounds[osintGameRoundIndex];
  const correct = index === round.correctIndex;
  osintGameAnswered = true;
  if (correct) osintGamePoints += 1;

  [...osintGameChoices.querySelectorAll(".game-choice")].forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === round.correctIndex) button.classList.add("is-correct");
    if (buttonIndex === index && !correct) button.classList.add("is-wrong");
  });

  osintGameFeedback.textContent = `${correct
    ? (lang === "en" ? "Correct." : "Верно.")
    : (lang === "en" ? "Not quite." : "Не совсем.")} ${gameText(round.explanation)}`;
  osintGameFeedback.hidden = false;
  osintGameProgress.style.width = `${((osintGameRoundIndex + 1) / osintGameRounds.length) * 100}%`;
  osintGameNext.textContent = osintGameRoundIndex === osintGameRounds.length - 1
    ? (lang === "en" ? "Results" : "Результат")
    : (lang === "en" ? "Next" : "Дальше");
  osintGameNext.hidden = false;
  updateOsintGameScore();
  osintGameNext.focus();
}

function advanceOsintGame() {
  if (osintGameFinished) {
    osintGameRounds = shuffleOsintGameRounds();
    osintGameRoundIndex = 0;
    osintGamePoints = 0;
    osintGameFinished = false;
    renderOsintGameRound();
    osintGameChoices.querySelector(".game-choice")?.focus();
    return;
  }

  if (osintGameRoundIndex < osintGameRounds.length - 1) {
    osintGameRoundIndex += 1;
    renderOsintGameRound();
    osintGameChoices.querySelector(".game-choice")?.focus();
    return;
  }

  const lang = getCurrentLanguage();
  osintGameFinished = true;
  osintGameTitle.textContent = lang === "en" ? "Case closed" : "Дело раскрыто";
  osintGameRound.textContent = lang === "en" ? "RESULT" : "ИТОГ";
  osintGameQuestion.textContent = lang === "en"
    ? `You identified ${osintGamePoints} of ${osintGameRounds.length} tools.`
    : `Ты правильно определил(а) ${osintGamePoints} из ${osintGameRounds.length} инструментов.`;
  osintGameChoices.innerHTML = "";
  osintGameFeedback.hidden = true;
  osintGameProgress.style.width = "100%";
  osintGameNext.textContent = lang === "en" ? "Play again" : "Сыграть ещё";
  updateOsintGameScore();
  osintGameNext.focus();
}

osintGameChoices.addEventListener("click", event => {
  const choice = event.target.closest(".game-choice");
  if (choice) chooseOsintGameAnswer(Number(choice.dataset.choice));
});

osintGameNext.addEventListener("click", advanceOsintGame);
osintGameClose.addEventListener("click", closeOsintGame);
osintGameScreen.addEventListener("click", event => {
  if (event.target === osintGameScreen) closeOsintGame();
});

document.addEventListener("keydown", event => {
  if (!osintGameScreen.hidden) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeOsintGame();
    } else if (!osintGameAnswered && /^[1-3]$/.test(event.key)) {
      event.preventDefault();
      chooseOsintGameAnswer(Number(event.key) - 1);
    } else if (osintGameAnswered && event.key === "Enter") {
      event.preventDefault();
      advanceOsintGame();
    }
    return;
  }

  if (easterEggToast.classList.contains("is-warning")) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeEasterEggWarning();
      return;
    }
    if (event.key === "Tab") {
      event.preventDefault();
      easterEggClose.focus();
      return;
    }
  }

  const typingTarget = event.target instanceof HTMLElement &&
    (event.target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName));

  if (typingTarget) {
    easterEggSequenceIndex = 0;
    doxSequenceIndex = 0;
    swatSequenceIndex = 0;
    osintSequenceIndex = 0;
  } else if (!["Shift", "Control", "Alt", "Meta"].includes(event.key)) {
    const expectedDoxKey = doxSequence[doxSequenceIndex];
    doxSequenceIndex = event.code === expectedDoxKey
      ? doxSequenceIndex + 1
      : (event.code === doxSequence[0] ? 1 : 0);

    if (doxSequenceIndex === doxSequence.length) {
      doxSequenceIndex = 0;
      showEasterEgg("dox");
    }

    const expectedSwatKey = swatSequence[swatSequenceIndex];
    swatSequenceIndex = event.code === expectedSwatKey
      ? swatSequenceIndex + 1
      : (event.code === swatSequence[0] ? 1 : 0);

    if (swatSequenceIndex === swatSequence.length) {
      swatSequenceIndex = 0;
      showEasterEgg("swat");
    }

    const expectedOsintKey = osintSequence[osintSequenceIndex];
    osintSequenceIndex = event.code === expectedOsintKey
      ? osintSequenceIndex + 1
      : (event.code === osintSequence[0] ? 1 : 0);

    if (osintSequenceIndex === osintSequence.length) {
      osintSequenceIndex = 0;
      openOsintGame();
    }

    const expectedKey = konamiSequence[easterEggSequenceIndex];
    easterEggSequenceIndex = event.code === expectedKey ? easterEggSequenceIndex + 1 : (event.code === konamiSequence[0] ? 1 : 0);

    if (easterEggSequenceIndex === konamiSequence.length) {
      easterEggSequenceIndex = 0;
      showEasterEgg("konami");
    }
  }

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }

  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    state.query = "";
    searchInput.blur();
  }
});

let easterEggToastTimer = 0;
let easterEggHideTimer = 0;
let archiveModeTimer = 0;
let easterEggReturnFocus = null;

function closeEasterEggWarning() {
  easterEggToast.classList.remove("is-warning", "is-visible");
  document.body.classList.remove("easter-egg-warning-open");
  easterEggToast.removeAttribute("aria-modal");
  easterEggToast.setAttribute("role", "status");
  easterEggToast.setAttribute("aria-live", "polite");
  easterEggHideTimer = window.setTimeout(() => {
    easterEggToast.hidden = true;
    if (easterEggReturnFocus instanceof HTMLElement) easterEggReturnFocus.focus();
    easterEggReturnFocus = null;
  }, 220);
}

easterEggClose.addEventListener("click", closeEasterEggWarning);
easterEggToast.addEventListener("click", event => {
  if (event.target === easterEggToast && easterEggToast.classList.contains("is-warning")) {
    closeEasterEggWarning();
  }
});

function showEasterEgg(type) {
  const lang = getCurrentLanguage();
  const messages = {
    konami: {
      title: { ru: "Архивный режим включён", en: "Archive mode enabled" },
      message: null
    },
    dox: {
      title: { ru: "Вы нашли DOX", en: "You found DOX" },
      message: {
        ru: "Доксинг — публикация чужих личных данных без согласия. Это нарушает приватность и может повлечь гражданскую или уголовную ответственность в зависимости от страны и обстоятельств. Не используйте данные для травли или угроз.",
        en: "Doxxing is publishing someone's private information without consent. It violates privacy and may lead to civil or criminal liability, depending on local law and circumstances. Never use personal data to harass or threaten someone."
      }
    },
    swat: {
      title: { ru: "Вы нашли SWAT", en: "You found SWAT" },
      message: {
        ru: "Сваттинг — заведомо ложное сообщение об опасности, чтобы вызвать экстренные службы к чужому адресу. Это может привести к травмам или гибели людей и повлечь уголовное наказание. Не делайте ложных вызовов.",
        en: "Swatting is making a knowingly false emergency report to send responders to someone else's address. It can cause serious injury or death and may result in criminal penalties. Never make a false emergency call."
      }
    },
    logo: {
      title: { ru: "Досье №007 открыто", en: "Case file 007 opened" },
      message: null
    }
  };
  const content = messages[type] || messages.logo;
  const fact = LOADING_FACTS[Math.floor(Math.random() * LOADING_FACTS.length)];
  const isWarning = type === "dox" || type === "swat";

  easterEggTitle.textContent = content.title[lang];
  easterEggMessage.textContent = content.message
    ? content.message[lang]
    : fact[lang] || fact.ru;
  window.clearTimeout(easterEggHideTimer);
  easterEggToast.classList.toggle("is-warning", isWarning);
  if (isWarning) {
    easterEggReturnFocus = document.activeElement;
    document.body.classList.add("easter-egg-warning-open");
    easterEggToast.setAttribute("role", "alertdialog");
    easterEggToast.setAttribute("aria-modal", "true");
    easterEggToast.setAttribute("aria-labelledby", "easterEggTitle");
    easterEggToast.setAttribute("aria-describedby", "easterEggMessage");
    easterEggToast.removeAttribute("aria-live");
    easterEggClose.textContent = lang === "en" ? "Close" : "Закрыть";
  } else {
    easterEggToast.setAttribute("role", "status");
    easterEggToast.removeAttribute("aria-modal");
    easterEggToast.removeAttribute("aria-labelledby");
    easterEggToast.removeAttribute("aria-describedby");
    easterEggToast.setAttribute("aria-live", "polite");
  }
  easterEggToast.hidden = false;
  easterEggToast.classList.remove("is-visible");
  requestAnimationFrame(() => easterEggToast.classList.add("is-visible"));

  window.clearTimeout(easterEggToastTimer);
  if (isWarning) {
    easterEggClose.focus();
  } else {
    easterEggToastTimer = window.setTimeout(() => {
      easterEggToast.classList.remove("is-visible");
      easterEggHideTimer = window.setTimeout(() => {
        easterEggToast.hidden = true;
      }, 220);
    }, 5200);
  }

  if (type === "konami") {
    document.body.classList.add("easter-egg-mode");
    window.clearTimeout(archiveModeTimer);
    archiveModeTimer = window.setTimeout(() => {
      document.body.classList.remove("easter-egg-mode");
    }, 7500);
  }
}

let brandClickCount = 0;
let brandClickTimer = 0;

document.querySelector(".brand").addEventListener("click", () => {
  brandClickCount += 1;
  window.clearTimeout(brandClickTimer);
  brandClickTimer = window.setTimeout(() => {
    brandClickCount = 0;
  }, 1800);

  if (brandClickCount >= 5) {
    brandClickCount = 0;
    showEasterEgg("logo");
  }
});

render();