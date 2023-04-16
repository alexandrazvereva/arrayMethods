//задача 1. Используя метод forEach, выведите в консоль все элементы массива в функции

function showArrayElements(array) {
    //ваш код тут
}

showArrayElements(["one", "two", "three"]);
showArrayElements(["Anna", "Inna", "Igors"]);

//Задача 2. Используя методы map и filter, дополните функции, чтобы они выводили то, 
//что указано в комментариях

function showOnlyNegativeNumbers(array) {
    //код для выбора только отрицательных чисел в массиве
}

showOnlyNegativeNumbers([5, -10, 3, -7]) // [-10, -7]
showOnlyNegativeNumbers([35, -130, 3765, -4535]) // [-130, -4535]

function changeNames(array) {
    //код, который все элементы массива (слова) сохраняет капслоком (больгими буквами)
}

changeNames(["inna", "anna", "igor"]) // ["INNA", "ANNA", "IGOR"];
changeNames(["one", "two", "three"]) // ["ONE", "TWO", "THREE"];


//Задача 3. Метод slice позволяет отрезать кусок строки. 
//Если указываем в скобках ОДНО число - это НАЧАЛО отрезка. 
//По умолчанию резать будем до конца строки. Например:
// "word".slice(2) - От второго и до конца строки. Т.е. останется "rd" (w - нулевой символ, o - первый)
// Если указываем ДВА числа в скобках - это НАЧАЛО и КОНЕЦ. Напрмер:
// "mathematics".slice(2,4) - от второго символа до четвертого (не включительно!).
// Т.е. останется "th"

//Дополните функцию, чтобы она отрезала от слова первую букву.
function cutOffFirstLetter(word) {
    //ваш код тут
}

cutOffFirstLetter("Anna"); //"nna"
cutOffFirstLetter("Inna"); //"nna"
cutOffFirstLetter("Igor"); //"gor"


