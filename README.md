# Система бронювання квитків

Веб-застосунок для перегляду розкладу потягів та бронювання квитків. Розроблений у межах лабораторних робіт 9 та 10.

## Стек технологій

- **React 18** + **Vite**
- **React Router v6** — маршрутизація між сторінками
- **CSS Modules** — стилізація (mobile-first)
- **react-toastify** — сповіщення
- **localStorage** — збереження бронювань

## Функціонал

### Лабораторна 9 — Список потягів
- Відображення списку рейсів у адаптивній сітці (1 / 2 / 3 колонки)
- Пошук та фільтрація за маршрутом або номером потяга (`filter()`, `map()`)
- Компонент `TrainCard` з даними рейсу та кнопкою бронювання

### Лабораторна 10 — Бронювання місць
- Маршрутизація: `/` — список потягів, `/booking/:trainId` — бронювання
- Вибір вагона (`WagonSelector`)
- Інтерактивна схема місць плацкарту 54 місця (`SeatMap`)
  - Вільне — зелений, Обране — синій, Заброньоване — червоний
- Форма з валідацією: Ім'я, Телефон, Email (`BookingForm`)
- Глобальний стан через `useContext` (`BookingContext`)
- Збереження бронювань у `localStorage` (`BookingService`)
- Toast-сповіщення при успішному бронюванні

## Структура проєкту

```
src/
├── components/
│   ├── TrainCard.jsx / .module.css
│   ├── TrainList.jsx / .module.css
│   ├── WagonSelector.jsx / .module.css
│   ├── SeatMap.jsx / .module.css
│   └── BookingForm.jsx / .module.css
├── context/
│   └── BookingContext.jsx
├── data/
│   └── trains.js
├── pages/
│   ├── Home.jsx / .module.css
│   └── Booking.jsx / .module.css
├── services/
│   └── BookingService.js
├── App.jsx
└── main.jsx
```

## Запуск проєкту

```bash
npm install
npm run dev
```

## Історія комітів

| Коміт | Опис |
|-------|------|
| `init: setup React project with Vite` | Ініціалізація проєкту |
| `build: create logical folder structure for Lab 9` | Структура папок |
| `feat: add mock data for train routes` | Mock-дані потягів |
| `feat: implement TrainCard component` | Картка потяга |
| `feat: implement TrainList component` | Список потягів |
| `feat: setup Home page to display trains` | Головна сторінка |
| `feat: add search and filter functionality for trains` | Пошук і фільтр |
| `feat: setup react-router navigation` | Маршрутизація |
| `build: create component files for booking system` | Структура бронювання |
| `feat: implement WagonSelector component` | Вибір вагона |
| `feat: implement interactive SeatMap with color indication` | Схема місць |
| `feat: create BookingForm with fields validation` | Форма з валідацією |
| `feat: integrate global state and booking storage logic` | Глобальний стан |
| `feat: add success booking notifications` | Toast-сповіщення |

