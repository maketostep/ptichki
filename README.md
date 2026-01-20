# Лендинг с элементами администрирования для женского сообщества "Птички"
Веб-приложение на React с использованием Vite и Tailwind CSS для сайта, посвящённого мероприятиям, афишам и партнёрам.
# Часть №1 - Front-End
Вторая часть с Back-end находится в приватном репозитории, для того чтобы увидеть её структуру, реализацию API и прочее обратитесь ко мне, перейдя в раздел [Контакты](#контакты).
## Оглавление

- [Описание](#описание)
- [Технологии](#технологии)
- [Структура проекта](#структура-проекта)
- [Запуск проекта](#запуск-проекта)
- [Скрипты](#скрипты)
- [Контакты](#контакты)

## Описание

Проект представляет собой современное одностраничное приложение (SPA) для отображения афиш, информации о мероприятиях, партнёрах и обратной связи. Включает административную панель для управления контентом.

## Технологии

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PostCSS](https://postcss.org/)
- [ESLint](https://eslint.org/)

## Структура проекта

```
src/
	App.jsx                # Главный компонент приложения
	main.jsx               # Точка входа
	index.css              # Глобальные стили
	admin/                 # Компоненты и страницы админ-панели
		AdminLayout.jsx
		AfishaAdmin.jsx
		Login.jsx
		PartnersAdmin.jsx
		PrivateRoute.jsx
	assets/                # Шрифты и изображения
	components/            # UI и бизнес-компоненты
		ContactBlock.jsx
		FAQBlock.jsx
		Form.jsx
		HeroBlock.jsx
		InformationBlock.jsx
		PartnersBlock.jsx
		PosterBlock.jsx
		home/                # Компоненты главной страницы
		mobile/              # Мобильные компоненты
		ui/                  # Универсальные UI-компоненты
	context/               # React Context (например, ModalContext)
	pages/                 # Страницы приложения
	services/              # API-сервисы
		api.js
		partnersService.js
		postersService.js
		sendFormData.js
	utils/                 # Вспомогательные функции
		navigation.js
public/                  # Публичные файлы (favicon, index.html и др.)
```

## Запуск проекта

1. Установите зависимости:
   ```bash
   npm install
   ```
2. Запустите проект в режиме разработки:
   ```bash
   npm run dev
   ```
3. Откройте [http://localhost:5173](http://localhost:5173) в браузере.

## Скрипты

- `npm run dev` — запуск в режиме разработки
- `npm run build` — сборка проекта
- `npm run preview` — предпросмотр production-сборки
- `npm run lint` — проверка кода линтером

## Контакты

Для связи по вопросам разработки и поддержки обращайтесь к владельцу репозитория.

- Telegram — [@make2step](https://t.me/make2step)
- Email — team@wavewebstudio.ru
