# ⚡ Быстрая шпаргалка - Git команды

## 🚀 Первая загрузка на GitHub

```bash
# 1. Инициализация
git init
git add .
git commit -m "Initial commit: Dating app with AI"

# 2. Создайте репозиторий на github.com, затем:
git remote add origin https://github.com/ваш-username/название-репо.git
git branch -M main
git push -u origin main
```

## 🔄 Обновление кода

```bash
git add .
git commit -m "Описание изменений"
git push
```

## 📋 Полезные команды

```bash
# Проверить статус
git status

# Посмотреть историю
git log --oneline

# Отменить изменения
git restore имя-файла

# Создать новую ветку
git checkout -b новая-ветка

# Переключиться на ветку
git checkout main
```

## 🔒 Проверка безопасности

```bash
# ОБЯЗАТЕЛЬНО проверьте перед push:
git status

# Если видите .env - УДАЛИТЕ его:
git rm --cached .env
echo ".env" >> .gitignore
git add .gitignore
git commit -m "Remove .env from git"
```

## 🌐 Быстрый деплой

### Railway (1 минута)
```bash
# 1. Зайдите на railway.app
# 2. "Deploy from GitHub"
# 3. Добавьте OPENAI_API_KEY в Environment Variables
# 4. Готово!
```

### Vercel
```bash
npm i -g vercel
vercel login
vercel
# Следуйте инструкциям
```

## 💡 Частые проблемы

### "Permission denied (publickey)"
```bash
# Сгенерируйте SSH ключ:
ssh-keygen -t ed25519 -C "your_email@example.com"
# Добавьте ключ на GitHub: Settings → SSH keys
```

### "Updates were rejected"
```bash
git pull origin main --rebase
git push
```

### Забыли добавить .gitignore
```bash
git rm -r --cached .
git add .
git commit -m "Fix gitignore"
git push
```

## 📱 Следующий шаг

После загрузки на GitHub:
1. Обновите URL в README
2. Добавьте скриншоты
3. Задеплойте на Railway
4. Поделитесь ссылкой! 🎉
