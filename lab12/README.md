# Лабораторна робота №12 - Git workflow

**Студент:** Собко Ігор Олександрович  
**Група:** 301-ТН

---

## Підготовка

```bash
# 1. Увійти в папку з лаб. 10 (flex, grid)
cd шлях/до/lab10

# 2. Ініціалізувати локальний репозиторій
git init

# 3. Перший коміт
git add .
git commit -m "Version 1.0.0"

# 4. Створити та перейти на гілку develop
git checkout -b develop

# 5. Підключити GitHub (після створення репозиторію на сайті)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin master
git push -u origin develop
```

---

## Завдання 1 - register.html

```bash
# Перебуваючи на develop, створити гілку task_1.12
git checkout -b task_1.12

# Додати файл register.html
# Після кожного поля - коміт:
git add register.html
git commit -m "Add input: surname (Прізвище)"
git commit -m "Add input: firstname (Ім'я)"
git commit -m "Add input: patronymic (По батькові)"
git commit -m "Add input: login (Логін)"
git commit -m "Add input: password (Пароль)"
git commit -m "Add input: confirm password (Підтвердження)"
git commit -m "Add input: birthdate (Дата народження)"
git commit -m "Add input: gender (Стать)"
git commit -m "Add input: phone (Телефон)"
git commit -m "Add input: email (Email)"
git commit -m "Add submit button and form complete"

# Злити task_1.12 у develop
git checkout develop
git merge task_1.12

# Відправити на GitHub
git push origin develop
```

---

## Завдання 2 - git_commands.html

```bash
# Від develop створити нову гілку
git checkout develop
git checkout -b git_commands

# Додати файл git_commands.html
# Після кожного розділу команд - коміт:
git add git_commands.html
git commit -m "Add Git config commands"
git commit -m "Add Git init and clone commands"
git commit -m "Add Git basic (staging, commit) commands"
git commit -m "Add Git branch commands"
git commit -m "Add Git remote commands"
git commit -m "Add Git log commands"
git commit -m "Add Git restore and reset commands"

# Злити з develop (гілку НЕ видаляти!)
git checkout develop
git merge git_commands
git push origin develop
git push --all   # відправити всі гілки
```

---

## Deploy на Netlify

1. Зайти на [netlify.com](https://netlify.com) → Log in with GitHub
2. New site from Git → вибрати репозиторій
3. Branch to deploy: **develop**
4. Build command: залишити порожнім
5. Publish directory: `.` (крапка)
6. Deploy site

Або через Netlify Drop: перетягнути папку з файлами на [app.netlify.com/drop](https://app.netlify.com/drop)

---

## Завдання 3 - Груповий репозиторій

```bash
# Перший за списком студент:
# 1. Створює репозиторій group_301 на GitHub
# 2. Клонує його:
git clone https://github.com/USERNAME/group_301.git
cd group_301

# 3. Створює файли:
# group_301.html + style.css
# В <h1> записує: 01 "Собко Ігор Олександрович"
git add .
git commit -m "Перший за списком, студент Собко Ігор Олександрович, завдання виконав"
git push origin main

# Наступний студент робить fork репозиторію та додає свій рядок
```
