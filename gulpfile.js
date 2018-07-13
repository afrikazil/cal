// npm install --save-dev gulp-sass gulp-autoprefixer gulp-babel babel-core babel-preset-env
var gulp = require('gulp'),
    sass = require('gulp-sass'), //Подключаем Sass пакет
    autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматиче
    babel = require('gulp-babel');

    gulp.task('sass', function () { // Создаем таск "sass"
        return gulp.src('src/css/style.scss') // Берем источник
            .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
            .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7', 'Safari 8'], {cascade: true})) // Создаем префиксы
            .pipe(csso())
            .pipe(gulp.dest('dest/css')) // Выгружаем результата в папку
    });

//
// .pipe(babel({
//     presets: ['env']
// }))
//     .pipe(gulp.dest('dist'))