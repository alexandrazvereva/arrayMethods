let goods = ["skirt", "top", "shorts"];
function addInBasket(item1, item2) {
    goods.push(item1, item2)
    console.log(goods);
}
addInBasket("sunglasses", "hat"); // ["skirt", "top", "shorts", "sunglasses", "hat"]

//2 Добавьте в начало массива еще 3 продукта: "pants", "dress", "gloves"
let list = ["skirt", "top", "shorts", "sunglasses", "hat"];
function addInList(item1, item2, item3) {
    list.unshift(item1, item2, item3)
    console.log(list);
}

addInList("pants", "dress", "gloves");  // ["pants", "dress", "gloves", "skirt", "top", "shorts", "sunglasses", "hat"]

//3 Удалите из этого массива первый элемент
let things = ["pants", "dress", "gloves", "skirt", "top", "shorts", "sunglasses", "hat"];
function deleteFromBasket() {
    things.shift();
    console.log(things);
}
deleteFromBasket(); // ["dress", "gloves", "skirt", "top", "shorts", "sunglasses", "hat"]

// 4 Удалите последний элемент из этого массива
let cosas = ["pants", "dress", "gloves", "skirt", "top", "shorts", "sunglasses", "hat"];
function removeFromBasket() {
    cosas.pop();
    console.log(cosas);
}
removeFromBasket(); // ["pants", "dress", "gloves", "skirt", "top", "shorts", "sunglasses"]

//5 объедините эти три массива в один:

const cart1 = ["milk", "bread", "water"];
const cart2 = ["sweets", "fanta", "cucumbers"];
const cart3 = ["apples", "oranges", "juice"];

function concatArrays() {
    let newArray = cart1.concat(cart2, cart3); //console.log(cart1.concat(cart2, cart3))
    console.log(newArray);
}
concatArrays();

// 6 Выведите по очереди всех юзеров в консоль
let users = ["admin", "seller", "customer"];
function showUsers() {
    users.forEach(element => console.log(element));
}
showUsers();
// 7 Выведите в консоль фразы: {роль} is a user.
// Всего в консоль должно вывестись 3 фразы по очереди :
// admin is a user
// seller is a user
// customer is a user
let user = ["admin", "seller", "customer"];
function showUser() {
    user.forEach((element,index) => console.log(element + ' is a user number ' + index ));

}
showUser();
//8 Выведите в консоль фразы: {роль } is user number {index}
        // Всего в консоль должно вывестись 3 фразы по очереди :
        // admin is user number 0
        // seller is user number 1
        // customer is user number 2
    

// 9 Создайте на основе массива users массив, в котором все названия ролей будут написаны большими буквами 
let they = ["admin", "seller", "customer"];
function showCaps() {

    they.forEach(element => console.log(element.toUpperCase()));
};

showCaps();// ["ADMIN", "SELLER", "CUSTOMER"]
// 10 Создайте на основе массива user массив, в котором будут храниться длины слов-ролей
let roles = ["admin", "seller", "customer"];
function getLength() {
    let newArray = roles.map(element => element.length);
    console.log(newArray);

}
getLength();//[5, 6, 8]
//11 Создайте на основе массива users массив, который будет хранить только те роли, чья длина - четное число (кратно двум)
let people = ["admin", "seller", "customer"];
function showresult() {
    let newResult = roles.filter(element => element.length % 2 === 0);
    console.log(newResult);
};
showresult();// ["seller", "customer"]

//12 Выведите в консоль информацию по каждому массиву в виде:
// {productName} costs {price}. It's {kind}
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
function showArray(){
products.forEach(element=>console.log(element.productName + ' costs ' + element.price + '. Its ' + element.kind))
};
showArray();

function showFruits() {
    let newFruits = products.filter(element => element.kind==="fruit");
    console.log(newFruits);

}
showFruits();