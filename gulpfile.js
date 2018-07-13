// npm install --save-dev gulp-sass gulp-autoprefixer gulp-babel babel-core babel-preset-env gulp-uglify gulp-concat
var gulp = require('gulp'),
    sass = require('gulp-sass'), //Подключаем Sass пакет
    autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматиче
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    csso   = require('gulp-csso'),
    babel = require('gulp-babel');

    gulp.task('sass', function () { // Создаем таск "sass"
        return gulp.src('src/css/style.scss') // Берем источник
            .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
            .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7', 'Safari 8'], {cascade: true})) // Создаем префиксы
            .pipe(csso())
            .pipe(gulp.dest('dist/css')) // Выгружаем результата в папку
    });

    gulp.task('js', function () { // Создаем таск "sass"
        return gulp.src([
            'src/js/scripts/init.js',
        ])
            .pipe(concat('index.min.js')) // Собираем их в кучу в новом файле libs.min.js
            .pipe(uglify()) // Сжимаем JS файл
            .pipe(gulp.dest('dist/js')); // Выгружаем в папку app/js
    });

    gulp.task('default', function () {
        gulp.watch('src/css/**/*.scss', ['sass']); // Наблюдение за sass файлами
        gulp.watch('src/js/**/*.js',['js']);
    });