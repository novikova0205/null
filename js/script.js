'use strict';
/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

for (let i = 5; i<=10; i++){
    console.log(i);
}

for (let i = 20; i>=10; i--){
    if (i===13){
        break;
    }
    console.log(i);
}

for (let i = 2; i<=10; i+=2){
    console.log(i);
}

let i = 2;
while (i < 16) {
    i++;
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i=5; i<=10; i++){
        arrayOfNumbers[i - 5] =i
    }
    console.log(arrayOfNumbers);
    // Не трогаем
    return arrayOfNumbers;

    function firstTask() {
        const arr = [3, 5, 8, 16, 20, 23, 50];
        const result = [];
    
        for (let i = 0; i < arr.length; i++) {
            result[i] = arr[i];
        }
    
        console.log(result);
        return result;
    }
    firstTask();

    function secondTask() {
        const data = [5, 10, 'Shopping', 20, 'Homework'];
    
        for (let i = 0; i < data.length; i++) {
            if (typeof data[i] === 'number') {
                data[i] *= 2; // Увеличиваем число в два раза
            } else if (typeof data[i] === 'string') {
                data[i] += ' - done'; // Добавляем " - done" к строке
            }
        }
    
        return data;
    }
    
    console.log(secondTask()); // [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

    function thirdTask() {
        const data = [5, 10, 'Shopping', 20, 'Homework'];
        const result = [];
        for (let i = data.length - 1; i >= 0; i--) {
            result.push(data[i]);
        }
        console.log(result);
        // Не трогаем
        return result;
        
    }

const lines = 5;
let result = '';
    for (let i = 0; i <= lines; i++) {
        for (let j = 0; j < lines - i; j++) {
            result += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            result += "*";
        }
        result += "\n";
    }
    
    console.log(result)

    function drawStarPattern(rows) {
        for (let i = 1; i <= rows; i++) {
            let spaces = ' '.repeat(rows - i);
            let stars = '*'.repeat(2 * i - 1);
            console.log(spaces + stars);
        }
    }
    
    const numberOfRows = 6; // Задайте желаемое количество строк
    drawStarPattern(numberOfRows); */

   /*  const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false 
    };
    
    for (let i=0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a !=null && b !=null && a !='' && b !='' && a.length < 50){
            personalMovieDB.movies[a] = b; 
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    
    }
    for (let i = 0; i < 1; i++) {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    }
    
    console.log(personalMovieDB); */

    /* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
    while (numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

function rememberMyFilms() {
    for (let i=0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a !=null && b !=null && a !='' && b !='' && a.length < 50){
            personalMovieDB.movies[a] = b; 
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    for (let i = 0; i < 1; i++) {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i = 1;i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);;
    }   
}
writeYourGenres();