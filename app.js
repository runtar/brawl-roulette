const BRAWLERS = [
  {
    "id": 1,
    "name": "Шелли",
    "en": "Shelly",
    "rarity": "Стартовый",
    "class": "Урон"
  },
  {
    "id": 2,
    "name": "Кольт",
    "en": "Colt",
    "rarity": "Редкий",
    "class": "Урон"
  },
  {
    "id": 3,
    "name": "Булл",
    "en": "Bull",
    "rarity": "Редкий",
    "class": "Танк"
  },
  {
    "id": 4,
    "name": "Брок",
    "en": "Brock",
    "rarity": "Редкий",
    "class": "Стрелок"
  },
  {
    "id": 5,
    "name": "Барли",
    "en": "Barley",
    "rarity": "Редкий",
    "class": "Артиллерия"
  },
  {
    "id": 6,
    "name": "Нита",
    "en": "Nita",
    "rarity": "Редкий",
    "class": "Урон"
  },
  {
    "id": 7,
    "name": "Эль Примо",
    "en": "El Primo",
    "rarity": "Редкий",
    "class": "Танк"
  },
  {
    "id": 8,
    "name": "Поко",
    "en": "Poco",
    "rarity": "Редкий",
    "class": "Поддержка"
  },
  {
    "id": 9,
    "name": "Роза",
    "en": "Rosa",
    "rarity": "Редкий",
    "class": "Танк"
  },
  {
    "id": 10,
    "name": "Рико",
    "en": "Rico",
    "rarity": "Сверхредкий",
    "class": "Урон"
  },
  {
    "id": 11,
    "name": "Джесси",
    "en": "Jessie",
    "rarity": "Сверхредкий",
    "class": "Контроль"
  },
  {
    "id": 12,
    "name": "Динамайк",
    "en": "Dynamike",
    "rarity": "Сверхредкий",
    "class": "Артиллерия"
  },
  {
    "id": 13,
    "name": "Дэррил",
    "en": "Darryl",
    "rarity": "Сверхредкий",
    "class": "Танк"
  },
  {
    "id": 14,
    "name": "Пенни",
    "en": "Penny",
    "rarity": "Сверхредкий",
    "class": "Артиллерия"
  },
  {
    "id": 15,
    "name": "Тик",
    "en": "Tick",
    "rarity": "Сверхредкий",
    "class": "Артиллерия"
  },
  {
    "id": 16,
    "name": "Карл",
    "en": "Carl",
    "rarity": "Сверхредкий",
    "class": "Урон"
  },
  {
    "id": 17,
    "name": "8-БИТ",
    "en": "8-Bit",
    "rarity": "Сверхредкий",
    "class": "Урон"
  },
  {
    "id": 18,
    "name": "Джеки",
    "en": "Jacky",
    "rarity": "Сверхредкий",
    "class": "Танк"
  },
  {
    "id": 19,
    "name": "Гас",
    "en": "Gus",
    "rarity": "Сверхредкий",
    "class": "Поддержка"
  },
  {
    "id": 20,
    "name": "Бо",
    "en": "Bo",
    "rarity": "Эпический",
    "class": "Контроль"
  },
  {
    "id": 21,
    "name": "Пайпер",
    "en": "Piper",
    "rarity": "Эпический",
    "class": "Стрелок"
  },
  {
    "id": 22,
    "name": "Пэм",
    "en": "Pam",
    "rarity": "Эпический",
    "class": "Поддержка"
  },
  {
    "id": 23,
    "name": "Фрэнк",
    "en": "Frank",
    "rarity": "Эпический",
    "class": "Танк"
  },
  {
    "id": 24,
    "name": "Биби",
    "en": "Bibi",
    "rarity": "Эпический",
    "class": "Танк"
  },
  {
    "id": 25,
    "name": "Беа",
    "en": "Bea",
    "rarity": "Эпический",
    "class": "Стрелок"
  },
  {
    "id": 26,
    "name": "Эмз",
    "en": "Emz",
    "rarity": "Эпический",
    "class": "Контроль"
  },
  {
    "id": 27,
    "name": "Гэйл",
    "en": "Gale",
    "rarity": "Эпический",
    "class": "Контроль"
  },
  {
    "id": 28,
    "name": "Нани",
    "en": "Nani",
    "rarity": "Эпический",
    "class": "Стрелок"
  },
  {
    "id": 29,
    "name": "Колетт",
    "en": "Colette",
    "rarity": "Эпический",
    "class": "Урон"
  },
  {
    "id": 30,
    "name": "Эдгар",
    "en": "Edgar",
    "rarity": "Эпический",
    "class": "Убийца"
  },
  {
    "id": 31,
    "name": "Сту",
    "en": "Stu",
    "rarity": "Эпический",
    "class": "Убийца"
  },
  {
    "id": 32,
    "name": "Белль",
    "en": "Belle",
    "rarity": "Эпический",
    "class": "Стрелок"
  },
  {
    "id": 33,
    "name": "Гром",
    "en": "Grom",
    "rarity": "Эпический",
    "class": "Артиллерия"
  },
  {
    "id": 34,
    "name": "Грифф",
    "en": "Griff",
    "rarity": "Эпический",
    "class": "Контроль"
  },
  {
    "id": 35,
    "name": "Эш",
    "en": "Ash",
    "rarity": "Эпический",
    "class": "Танк"
  },
  {
    "id": 36,
    "name": "Лола",
    "en": "Lola",
    "rarity": "Эпический",
    "class": "Урон"
  },
  {
    "id": 37,
    "name": "Бонни",
    "en": "Bonnie",
    "rarity": "Эпический",
    "class": "Стрелок"
  },
  {
    "id": 38,
    "name": "Сэм",
    "en": "Sam",
    "rarity": "Эпический",
    "class": "Убийца"
  },
  {
    "id": 39,
    "name": "Мэнди",
    "en": "Mandy",
    "rarity": "Эпический",
    "class": "Стрелок"
  },
  {
    "id": 40,
    "name": "Мэйси",
    "en": "Maisie",
    "rarity": "Эпический",
    "class": "Стрелок"
  },
  {
    "id": 41,
    "name": "Хэнк",
    "en": "Hank",
    "rarity": "Эпический",
    "class": "Танк"
  },
  {
    "id": 42,
    "name": "Перл",
    "en": "Pearl",
    "rarity": "Эпический",
    "class": "Урон"
  },
  {
    "id": 43,
    "name": "Ларри и Лори",
    "en": "Larry & Lawrie",
    "rarity": "Эпический",
    "class": "Артиллерия"
  },
  {
    "id": 44,
    "name": "Анджело",
    "en": "Angelo",
    "rarity": "Эпический",
    "class": "Стрелок"
  },
  {
    "id": 45,
    "name": "Берри",
    "en": "Berry",
    "rarity": "Эпический",
    "class": "Поддержка"
  },
  {
    "id": 46,
    "name": "Шейд",
    "en": "Shade",
    "rarity": "Эпический",
    "class": "Убийца"
  },
  {
    "id": 47,
    "name": "Мипл",
    "en": "Meeple",
    "rarity": "Эпический",
    "class": "Контроль"
  },
  {
    "id": 48,
    "name": "Транк",
    "en": "Trunk",
    "rarity": "Эпический",
    "class": "Танк"
  },
  {
    "id": 49,
    "name": "Болт",
    "en": "Bolt",
    "rarity": "Эпический",
    "class": "Танк"
  },
  {
    "id": 50,
    "name": "Мортис",
    "en": "Mortis",
    "rarity": "Мифический",
    "class": "Убийца"
  },
  {
    "id": 51,
    "name": "Тара",
    "en": "Tara",
    "rarity": "Мифический",
    "class": "Урон"
  },
  {
    "id": 52,
    "name": "Джин",
    "en": "Gene",
    "rarity": "Мифический",
    "class": "Контроль"
  },
  {
    "id": 53,
    "name": "Мистер П.",
    "en": "Mr. P",
    "rarity": "Мифический",
    "class": "Контроль"
  },
  {
    "id": 54,
    "name": "Макс",
    "en": "Max",
    "rarity": "Мифический",
    "class": "Поддержка"
  },
  {
    "id": 55,
    "name": "Спраут",
    "en": "Sprout",
    "rarity": "Мифический",
    "class": "Артиллерия"
  },
  {
    "id": 56,
    "name": "Лу",
    "en": "Lou",
    "rarity": "Мифический",
    "class": "Контроль"
  },
  {
    "id": 57,
    "name": "Байрон",
    "en": "Byron",
    "rarity": "Мифический",
    "class": "Поддержка"
  },
  {
    "id": 58,
    "name": "Гавс",
    "en": "Ruffs",
    "rarity": "Мифический",
    "class": "Поддержка"
  },
  {
    "id": 59,
    "name": "Скуик",
    "en": "Squeak",
    "rarity": "Мифический",
    "class": "Контроль"
  },
  {
    "id": 60,
    "name": "Базз",
    "en": "Buzz",
    "rarity": "Мифический",
    "class": "Убийца"
  },
  {
    "id": 61,
    "name": "Фэнг",
    "en": "Fang",
    "rarity": "Мифический",
    "class": "Убийца"
  },
  {
    "id": 62,
    "name": "Ева",
    "en": "Eve",
    "rarity": "Мифический",
    "class": "Урон"
  },
  {
    "id": 63,
    "name": "Джанет",
    "en": "Janet",
    "rarity": "Мифический",
    "class": "Стрелок"
  },
  {
    "id": 64,
    "name": "Отис",
    "en": "Otis",
    "rarity": "Мифический",
    "class": "Контроль"
  },
  {
    "id": 65,
    "name": "Бастер",
    "en": "Buster",
    "rarity": "Мифический",
    "class": "Танк"
  },
  {
    "id": 66,
    "name": "Грей",
    "en": "Gray",
    "rarity": "Мифический",
    "class": "Поддержка"
  },
  {
    "id": 67,
    "name": "R-T",
    "en": "R-T",
    "rarity": "Мифический",
    "class": "Урон"
  },
  {
    "id": 68,
    "name": "Виллоу",
    "en": "Willow",
    "rarity": "Мифический",
    "class": "Контроль"
  },
  {
    "id": 69,
    "name": "Даг",
    "en": "Doug",
    "rarity": "Мифический",
    "class": "Поддержка"
  },
  {
    "id": 70,
    "name": "Чак",
    "en": "Chuck",
    "rarity": "Мифический",
    "class": "Урон"
  },
  {
    "id": 71,
    "name": "Чарли",
    "en": "Charlie",
    "rarity": "Мифический",
    "class": "Контроль"
  },
  {
    "id": 72,
    "name": "Мико",
    "en": "Mico",
    "rarity": "Мифический",
    "class": "Убийца"
  },
  {
    "id": 73,
    "name": "Мелоди",
    "en": "Melodie",
    "rarity": "Мифический",
    "class": "Убийца"
  },
  {
    "id": 74,
    "name": "Лили",
    "en": "Lily",
    "rarity": "Мифический",
    "class": "Убийца"
  },
  {
    "id": 75,
    "name": "Клэнси",
    "en": "Clancy",
    "rarity": "Мифический",
    "class": "Урон"
  },
  {
    "id": 76,
    "name": "Мо",
    "en": "Moe",
    "rarity": "Мифический",
    "class": "Урон"
  },
  {
    "id": 77,
    "name": "Джуджу",
    "en": "Juju",
    "rarity": "Мифический",
    "class": "Артиллерия"
  },
  {
    "id": 78,
    "name": "Олли",
    "en": "Ollie",
    "rarity": "Мифический",
    "class": "Танк"
  },
  {
    "id": 79,
    "name": "Луми",
    "en": "Lumi",
    "rarity": "Мифический",
    "class": "Урон"
  },
  {
    "id": 80,
    "name": "Финкс",
    "en": "Finx",
    "rarity": "Мифический",
    "class": "Контроль"
  },
  {
    "id": 81,
    "name": "Джэ Ён",
    "en": "Jae-Yong",
    "rarity": "Мифический",
    "class": "Поддержка"
  },
  {
    "id": 82,
    "name": "Алли",
    "en": "Alli",
    "rarity": "Мифический",
    "class": "Убийца"
  },
  {
    "id": 83,
    "name": "Мина",
    "en": "Mina",
    "rarity": "Мифический",
    "class": "Урон"
  },
  {
    "id": 84,
    "name": "Зигги",
    "en": "Ziggy",
    "rarity": "Мифический",
    "class": "Контроль"
  },
  {
    "id": 85,
    "name": "Джиджи",
    "en": "Gigi",
    "rarity": "Мифический",
    "class": "Убийца"
  },
  {
    "id": 86,
    "name": "Глоуи",
    "en": "Glowy",
    "rarity": "Мифический",
    "class": "Поддержка"
  },
  {
    "id": 87,
    "name": "Наджия",
    "en": "Najia",
    "rarity": "Мифический",
    "class": "Урон"
  },
  {
    "id": 88,
    "name": "Дамиан",
    "en": "Damian",
    "rarity": "Мифический",
    "class": "Танк"
  },
  {
    "id": 89,
    "name": "Старр Нова",
    "en": "Starr Nova",
    "rarity": "Мифический",
    "class": "Убийца"
  },
  {
    "id": 90,
    "name": "Спайк",
    "en": "Spike",
    "rarity": "Легендарный",
    "class": "Урон"
  },
  {
    "id": 91,
    "name": "Ворон",
    "en": "Crow",
    "rarity": "Легендарный",
    "class": "Убийца"
  },
  {
    "id": 92,
    "name": "Леон",
    "en": "Leon",
    "rarity": "Легендарный",
    "class": "Убийца"
  },
  {
    "id": 93,
    "name": "Сэнди",
    "en": "Sandy",
    "rarity": "Легендарный",
    "class": "Контроль"
  },
  {
    "id": 94,
    "name": "Вольт",
    "en": "Surge",
    "rarity": "Легендарный",
    "class": "Урон"
  },
  {
    "id": 95,
    "name": "Амбер",
    "en": "Amber",
    "rarity": "Легендарный",
    "class": "Контроль"
  },
  {
    "id": 96,
    "name": "Мэг",
    "en": "Meg",
    "rarity": "Легендарный",
    "class": "Танк"
  },
  {
    "id": 97,
    "name": "Честер",
    "en": "Chester",
    "rarity": "Легендарный",
    "class": "Урон"
  },
  {
    "id": 98,
    "name": "Корделиус",
    "en": "Cordelius",
    "rarity": "Легендарный",
    "class": "Убийца"
  },
  {
    "id": 99,
    "name": "Кит",
    "en": "Kit",
    "rarity": "Легендарный",
    "class": "Поддержка"
  },
  {
    "id": 100,
    "name": "Драко",
    "en": "Draco",
    "rarity": "Легендарный",
    "class": "Танк"
  },
  {
    "id": 101,
    "name": "Кэндзи",
    "en": "Kenji",
    "rarity": "Легендарный",
    "class": "Убийца"
  },
  {
    "id": 102,
    "name": "Пирс",
    "en": "Pierce",
    "rarity": "Легендарный",
    "class": "Стрелок"
  },
  {
    "id": 103,
    "name": "Кадзэ",
    "en": "Kaze",
    "rarity": "Ультралегендарный",
    "class": "Убийца"
  },
  {
    "id": 104,
    "name": "Сириус",
    "en": "Sirius",
    "rarity": "Ультралегендарный",
    "class": "Контроль"
  }
];

const RARITIES = ["Все", "Стартовый", "Редкий", "Сверхредкий", "Эпический", "Мифический", "Легендарный", "Ультралегендарный"];
const CLASSES = ["Все", "Урон", "Танк", "Стрелок", "Артиллерия", "Контроль", "Убийца", "Поддержка"];

const state = {
  rarity: new Set(["Все"]),
  class: new Set(["Все"]),
  spinning: false,
  spinCount: 0,
  soundOn: true,
  audio: null,
  tickTimer: null
};

const els = {
  track: document.querySelector("#rouletteTrack"),
  window: document.querySelector("#rouletteWindow"),
  spinBtn: document.querySelector("#spinBtn"),
  soundToggle: document.querySelector("#soundToggle"),
  statusPill: document.querySelector("#statusPill"),
  winnerCard: document.querySelector("#winnerCard"),
  winnerOrb: document.querySelector("#winnerOrb"),
  winnerName: document.querySelector("#winnerName"),
  winnerMeta: document.querySelector("#winnerMeta"),
  availableCount: document.querySelector("#availableCount"),
  spinCount: document.querySelector("#spinCount"),
  lastRarity: document.querySelector("#lastRarity"),
  rarityChips: document.querySelector("#rarityChips"),
  classChips: document.querySelector("#classChips"),
  resetFilters: document.querySelector("#resetFilters"),
  filtersPanel: document.querySelector("#filtersPanel"),
  mobileFilterBtn: document.querySelector("#mobileFilterBtn"),
  applyMobileFilters: document.querySelector("#applyMobileFilters"),
  confetti: document.querySelector("#confetti")
};

function initials(name) {
  if (name === "8-БИТ") return "8B";
  if (name === "R-T") return "RT";
  return name
    .replace(/\./g, "")
    .split(/\s+|-/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0])
    .join("")
    .toUpperCase();
}

function cardTemplate(brawler, winner = false) {
  return `
    <article class="brawler-card ${winner ? "is-winner" : ""}" data-rarity="${brawler.rarity}">
      <div class="brawler-orb">${initials(brawler.name)}</div>
      <h3>${brawler.name}</h3>
      <p>${brawler.rarity} · ${brawler.class}</p>
    </article>
  `;
}

function getFilteredBrawlers() {
  const allRarities = state.rarity.has("Все");
  const allClasses = state.class.has("Все");
  return BRAWLERS.filter(brawler =>
    (allRarities || state.rarity.has(brawler.rarity)) &&
    (allClasses || state.class.has(brawler.class))
  );
}

function renderChips(container, values, group) {
  container.innerHTML = values.map(value => `
    <button type="button" class="chip" data-group="${group}" data-value="${value}" aria-pressed="false">${value}</button>
  `).join("");

  container.addEventListener("click", event => {
    const chip = event.target.closest(".chip");
    if (!chip || state.spinning) return;
    toggleFilter(group, chip.dataset.value);
  });
}

function toggleFilter(group, value) {
  const target = state[group];
  if (value === "Все") {
    target.clear();
    target.add("Все");
  } else {
    target.delete("Все");
    if (target.has(value)) target.delete(value);
    else target.add(value);
    if (!target.size) target.add("Все");
  }
  updateChips();
  updateAvailableCount();
  renderIdleTrack();
}

function updateChips() {
  document.querySelectorAll(".chip").forEach(chip => {
    const active = state[chip.dataset.group].has(chip.dataset.value);
    chip.classList.toggle("active", active);
    chip.setAttribute("aria-pressed", String(active));
  });
}

function updateAvailableCount() {
  els.availableCount.textContent = getFilteredBrawlers().length;
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function shufflePreview(list, size = 18) {
  if (!list.length) return [];
  return Array.from({ length: size }, () => randomFrom(list));
}

function renderIdleTrack() {
  const list = getFilteredBrawlers();
  els.track.style.transition = "none";
  els.track.style.transform = "translateX(0px)";
  els.track.innerHTML = shufflePreview(list).map(brawler => cardTemplate(brawler)).join("");
}

function ensureAudio() {
  if (!state.audio) {
    state.audio = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (state.audio.state === "suspended") state.audio.resume();
}

function playTone(freq, duration = 0.05, type = "square", volume = 0.04) {
  if (!state.soundOn) return;
  ensureAudio();
  const ctx = state.audio;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(volume, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + duration);
}

function playStart() {
  playTone(320, 0.08, "sawtooth", 0.045);
  setTimeout(() => playTone(520, 0.08, "sawtooth", 0.045), 80);
}

function playTick() {
  playTone(900 + Math.random() * 260, 0.035, "square", 0.028);
}

function playWin() {
  [523, 659, 784, 1046].forEach((freq, index) => {
    setTimeout(() => playTone(freq, 0.12, "triangle", 0.055), index * 95);
  });
}

function startTickLoop(duration) {
  const started = performance.now();
  const loop = () => {
    if (!state.spinning) return;
    const progress = Math.min(1, (performance.now() - started) / duration);
    playTick();
    const delay = 42 + progress * 160;
    state.tickTimer = setTimeout(loop, delay);
  };
  loop();
}

function stopTickLoop() {
  if (state.tickTimer) clearTimeout(state.tickTimer);
  state.tickTimer = null;
}

function setSpinning(value) {
  state.spinning = value;
  els.spinBtn.disabled = value;
  els.statusPill.textContent = value ? "крутится" : "готово";
  els.statusPill.classList.toggle("spinning", value);
}

function buildSpinSequence(list, winner) {
  const sequence = [];
  const length = window.matchMedia("(max-width: 680px)").matches ? 42 : 54;
  for (let i = 0; i < length; i += 1) sequence.push(randomFrom(list));
  sequence.push(winner);
  return sequence;
}

function spin() {
  if (state.spinning) return;
  const list = getFilteredBrawlers();
  if (!list.length) return;

  const winner = randomFrom(list);
  const sequence = buildSpinSequence(list, winner);
  const winnerIndex = sequence.length - 1;
  const duration = 4300 + Math.floor(Math.random() * 900);

  setSpinning(true);
  playStart();
  startTickLoop(duration);

  els.track.style.transition = "none";
  els.track.style.transform = "translateX(0px)";
  els.track.innerHTML = sequence.map((brawler, index) => cardTemplate(brawler, index === winnerIndex)).join("");

  requestAnimationFrame(() => {
    const winnerCard = els.track.children[winnerIndex];
    const windowCenter = els.window.clientWidth / 2;
    const cardCenter = winnerCard.offsetLeft + winnerCard.offsetWidth / 2;
    const landing = windowCenter - cardCenter;
    els.track.style.transition = `transform ${duration}ms cubic-bezier(.08,.78,.08,1)`;
    els.track.style.transform = `translateX(${landing}px)`;
  });

  window.setTimeout(() => {
    stopTickLoop();
    setSpinning(false);
    showWinner(winner);
    playWin();
    burstConfetti(winner.rarity);
  }, duration + 80);
}

function showWinner(brawler) {
  state.spinCount += 1;
  els.spinCount.textContent = state.spinCount;
  els.lastRarity.textContent = shortRarity(brawler.rarity);
  els.winnerCard.dataset.rarity = brawler.rarity;
  els.winnerOrb.textContent = initials(brawler.name);
  els.winnerName.textContent = brawler.name;
  els.winnerMeta.textContent = `${brawler.rarity} · ${brawler.class}`;
  document.querySelector(".winner-kicker").textContent = "Выпал боец";
}

function shortRarity(rarity) {
  const names = {
    "Стартовый": "Старт",
    "Редкий": "Редкий",
    "Сверхредкий": "Сверх",
    "Эпический": "Эпик",
    "Мифический": "Мифик",
    "Легендарный": "Легенда",
    "Ультралегендарный": "Ультра"
  };
  return names[rarity] || rarity;
}

function rarityColor(rarity) {
  const colors = {
    "Стартовый": "#ffffff",
    "Редкий": "#4dff8d",
    "Сверхредкий": "#41eaff",
    "Эпический": "#d850ff",
    "Мифический": "#ff5e72",
    "Легендарный": "#ffd749",
    "Ультралегендарный": "#ff4fd8"
  };
  return colors[rarity] || "#ffffff";
}

function burstConfetti(rarity) {
  const canvas = els.confetti;
  const ctx = canvas.getContext("2d");
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const resize = () => {
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();

  const base = rarityColor(rarity);
  const particles = Array.from({ length: 90 }, () => ({
    x: window.innerWidth / 2,
    y: window.innerHeight * 0.34,
    vx: (Math.random() - 0.5) * 12,
    vy: -Math.random() * 8 - 3,
    size: Math.random() * 7 + 4,
    life: Math.random() * 50 + 60,
    color: Math.random() > 0.34 ? base : ["#ffffff", "#41eaff", "#ff4fd8", "#ffd749"][Math.floor(Math.random() * 4)],
    rotate: Math.random() * Math.PI
  }));

  let frame = 0;
  function draw() {
    frame += 1;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.18;
      p.rotate += 0.18;
      p.life -= 1;
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.life / 70);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotate);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.62);
      ctx.restore();
    });
    if (frame < 110) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
  draw();
}

function bindUI() {
  renderChips(els.rarityChips, RARITIES, "rarity");
  renderChips(els.classChips, CLASSES, "class");
  updateChips();

  els.spinBtn.addEventListener("click", spin);

  els.soundToggle.addEventListener("click", () => {
    state.soundOn = !state.soundOn;
    els.soundToggle.setAttribute("aria-pressed", String(state.soundOn));
    els.soundToggle.querySelector("span").textContent = state.soundOn ? "🔊" : "🔇";
    if (state.soundOn) playTone(620, 0.06, "triangle", 0.035);
  });

  els.resetFilters.addEventListener("click", () => {
    state.rarity = new Set(["Все"]);
    state.class = new Set(["Все"]);
    updateChips();
    updateAvailableCount();
    renderIdleTrack();
  });

  els.mobileFilterBtn.addEventListener("click", () => {
    els.filtersPanel.classList.add("open");
  });
  els.applyMobileFilters.addEventListener("click", () => {
    els.filtersPanel.classList.remove("open");
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") els.filtersPanel.classList.remove("open");
    if ((event.key === " " || event.key === "Enter") && document.activeElement === document.body) spin();
  });

  document.addEventListener("click", event => {
    if (!window.matchMedia("(max-width: 680px)").matches) return;
    if (!els.filtersPanel.classList.contains("open")) return;
    const clickedInside = els.filtersPanel.contains(event.target) || els.mobileFilterBtn.contains(event.target);
    if (!clickedInside) els.filtersPanel.classList.remove("open");
  });
}

function revealOnScroll() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

bindUI();
updateAvailableCount();
renderIdleTrack();
revealOnScroll();
