# Brawl Roulette

Фанатская рулетка бойцов Brawl Stars для случайного выбора бойца.

## Что внутри

- `index.html` — вся страница, стили, логика, звуки и база бойцов в одном файле.
- `vercel.json` — базовая конфигурация для Vercel.
- `.gitignore` — чтобы не загружать служебные файлы.

## Быстрая проверка локально

Открой `index.html` двойным кликом в браузере.

Или запусти локальный сервер:

```bash
python3 -m http.server 3000
```

После этого открой в браузере `http://localhost:3000`.

## Загрузка на Vercel через GitHub

1. Создай новый репозиторий на GitHub.
2. Загрузи туда файлы из этой папки.
3. Открой Vercel и нажми `New Project`.
4. Выбери свой репозиторий.
5. Framework Preset оставь как `Other` или `No Framework`.
6. Build Command оставь пустым.
7. Output Directory оставь пустым.
8. Нажми `Deploy`.

## Загрузка через Vercel CLI

```bash
npm i -g vercel
vercel login
cd brawl-roulette-vercel
vercel --prod
```

После команды Vercel даст ссылку на сайт.

## Как менять текст на сайте

Открой `index.html` и найди нужный текст через поиск по файлу.

## Как обновить бойцов

В `index.html` найди массив `BRAWLERS` и обнови список бойцов.
