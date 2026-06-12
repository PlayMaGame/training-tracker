# Training Tracker

Папка `server/` содержит всё для запуска.

## Быстрый способ — Railway (бесплатно, без карты)

1. Зайдите на https://railway.app → **Start a New Project**
2. Выберите **Deploy from GitHub repo**
3. Залейте папку `server/` в GitHub
4. Railway сам обнаружит `package.json` и запустит сервер
5. Готово! Railway даст URL вида `tracker.up.railway.app`

## Локальный запуск (для теста)

```bash
cd server
npm install
npm start
```

Откройте http://localhost:3000

## База данных

Данные хранятся в файле `data.json` на сервере.  
Админка: тройной клик по заголовку "Очередь" → пароль `runni123`
