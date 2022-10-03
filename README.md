# Тестовое задание в five-corners

## Скрипты

##### Установка зависимостей

```shell script
yarn
```

##### Сборка

```shell script
yarn prod
```

```shell script
yarn dev
```

##### Запуск сервера для разработки

```shell script
yarn start
```

##### Запуск линтера

```shell script
yarn eslint
```

```shell script
yarn stylelint
```

##### Запуск prettier для проекта

```shell script
yarn format
```

## Организация структуры проекта

- build/ - сюда складывается билд верстки после сборки
- src/ - исходники кода проекта
- - images/ - контентные картинки, которые подключаются непосредственно из html/
- - js/ - исходники JS-кода
- - - index.js - точка входа для приложения. Все остальные ваши файлы/папки долдны импортироваться или подключаться через rigger сюда
- - - libs.js - файл, из которого рекомендуется подключать все JS-библиотеки. Сам файл подлючается в самом начале index.js
- - - components/ - тут размещаются файлы с кодом уже для отдельно взятых компонентов. Один компонент - один файл.
- - style/ - папка для всех стилей проекта (в сборке используется SCSS)
- - - style.scss - точка входа для всех стилей. Все остальные файлы подключаются отсюда
- - - blocks/ - файлы со стилями блоков (по БЭМ). Один файл - один блок. Блоки можно группировать по папкам для удобства.
- - - common/ -папка для файлов с общими стилями проекта (типа шрифтов, body etc)
- - - \_constants.scss - константы для сблрки
- - - \_functions.scss - всякие функции
- - - \_libs.scss - файл, из которого подключаются стили сторонних библиотек
- - - \_mixins.scss - миксины
- - templates/ - папка для Pug файлов
- - fonts/ - сюда кладем шрифты. При сборке они просто копируются в билд
- - конфиг файлы (.babelrc, .eslintrc, .stylelintrc, gulpfile.babel.js, package.json)
