// У вас есть массив продуктов из корзины:

let goods = ["skirt", "top", "shorts"];

// 1 Добавьте в конец массива еще 2 продукта "sunglasses" и "hat"

//ваш код

console.log("Задача 1", goods)  // ["skirt", "top", "shorts", "sunglasses", "hat"]

//2 Добавьте в начало массива еще 3 продукта: "pants", "dress", "gloves"

//ваш код

console.log("Задача 2", goods)  // ["pants", "dress", "gloves", "skirt", "top", "shorts", "sunglasses", "hat"]

//3 Удалите из этого массива первый элемент

//ваш код

console.log("Задача 2", goods)  // ["dress", "gloves", "skirt", "top", "shorts", "sunglasses", "hat"]

// 4 Удалите последний элемент из этого массива

//ваш код

console.log("Задача 2", goods)  // ["pants", "dress", "gloves", "skirt", "top", "shorts", "sunglasses"]


//5 объедините эти три массива в один:

const cart1 = ["milk", "bread", "water"];
const cart2 = ["sweets", "fanta", "cucumbers"];
const cart3 = ["apples", "oranges", "juice"];

//ваш код тут 

console.log("Задача 5", {тут название вашего нового массива, в который объединятся все три}) //должен появиться в консоли массив, который содержит элементы этих трех массивов

// Далее вы работаете с этим массивом:

let users = ["admin", "seller", "customer"];

// 6 Выведите по очереди всех юзеров в консоль

//ваш код тут

// 7 Выведите в консоль фразы: {роль} is a user. 
// Всего в консоль должно вывестись 3 фразы по очереди :
// admin is a user
// seller is a user
// customer is a user

//ваш код тут

// 8 Выведите в консоль фразы: {роль } is user number {index}
// Всего в консоль должно вывестись 3 фразы по очереди :
// admin is user number 0
// seller is user number 1
// customer is user number 2

// ваш код тут

// 9 Создайте на основе массива users массив, в котором все названия ролей будут написаны большими буквами 

//ваш код тут

console.log("Задача 9", {тут название вашего массива}) // ["ADMIN", "SELLER", "CUSTOMER"]

// 10 Создайте на основе массива user массив, в котором будут храниться длины слов-ролей

// ваш код тут

console.log("Задача 10", {тут название вашего массива}) // [5, 6, 8]

//11 Создайте на основе массива users массив, который будет хранить только те роли, чья длина - четное число (кратно двум)

//ваш код

console.log("Задача 11", {тут название вашего массива}) // ["seller", "customer"]


// Работа ведется с массивом products

const products = [
    {
        productName: "apple",
        kind: "fruit",
        price: "15"
    },
    {
        productName: "tomato",
        kind: "vegetable",
        price: "12"
    },
    {
        productName: "sausage",
        kind: "meat",
        price: "50"
    },
    {
        productName: "juice",
        kind: "drink",
        price: "20"
    },
    {
        productName: "orange",
        kind: "fruit",
        price: "25"
    }
]

//12 Выведите в консоль информацию по каждому массиву в виде:
// {productName} costs {price}. It's {kind}

//ваш код тут

// Должны получиться следуюшие строки:
// apple costs 15. It's fruit
// tomato costs 12. It's vegetable
// sausage costs 50. It's meat
// juice costs 20. It's drink
// orange costs 25. It's fruit

//13 Создайте на основе массива products массив, в котором будут храниться только фрукты. 

//ваш код тут

console.log("Задание 13", {тут название вашего массива}) 
//должно вывестись в консоль:
// [
//     {
//         productName: "apple",
//         kind: "fruit",
//         price: "15"
//     },
//     {
//         productName: "orange",
//         kind: "fruit",
//         price: "25"
//     }
// ]