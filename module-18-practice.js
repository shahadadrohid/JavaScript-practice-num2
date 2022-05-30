// Declare array
// Declare 10 array  
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var tools = ['plus', 'cutting sizer', 'hammer', 'tester', 'star scrup driver', 'wall cutter'];
var flowerName = ['rose', 'beli']
var friendsName = ['ayon', 'nayon', 'abhijit', 'sahed']

// Array Length 
console.log(num.length)

// Array Index 
var index = flowerName.indexOf('beli')
console.log(index)

// No index in array 
var index1 = friendsName.indexOf('alap')
console.log(index1)

// Find Index Value
var index2 = friendsName[0]
console.log(index2)

// Change the index value 
num[2] = 20;
console.log(num)


var kitchenTools = ['box', 'plate', 'glass', 'jug', 'rice cooker'];
console.log(kitchenTools)

// Push the new value 
kitchenTools.push('pressure cooker')
console.log(kitchenTools)

// Pop the exiting value 
kitchenTools.pop()
console.log(kitchenTools)

// Pop Item 
popItem = kitchenTools.pop()
console.log(popItem)


// Variable compare
console.log(6 == 6)

console.log(5 < 5)
console.log(5 <= 5)

console.log(5 > 8)

console.log(8 != 10)

var laptopPrice = 31500;
var computerPrice = 87500;
console.log(laptopPrice == computerPrice)
console.log(laptopPrice != computerPrice)


// && compare 

// If - Else Comparison 
var chaPrice = 8;
var danishPrice = 10;
var myBudget = 50;

if (chaPrice <= 10) {
    console.log('Ami cha khabo')
}

var onePlusPrice = 70000;
var xioamiPrice = 25000;
var myBudget = 27500;
if (onePlusPrice < myBudget) {
    console.log('I will buy One Plus')
}
else {
    console.log('Ok fine i will buy Xioami')
}

var laptopPrice1 = 33000;
var computerPrice1 = 85000;
var myBudget = 50000;
if (computerPrice1 <= myBudget) {
    console.log('I will buy COmputer')
}
else {
    console.log('Fine i will buy laptop')
}

// Multiple condition 
var goodStudent = true;
var gotJob = false;
var hasFlatInTown = false;
var hasBusiness = true;
var hasMoney = 400000;
// Num1 

if (goodStudent == true && gotJob == true) {
    console.log('Alhamdulillah Kabul, kabul kabul')
}
else {
    console.log('Chaiya howar chinta bad din ')
}

// Num 2

if ((goodStudent == true && hasBusiness == true) || gotJob == true) {
    console.log('Alhamdulilah Kabul')
}
else {
    console.log('Chaiya howar chinta bad din ')
}

// Num 3

if ((goodStudent == true && hasBusiness == true) && (gotJob == true || hasMoney <= 500000)) {
    console.log('Alhamdulilah Kabul')
}
else {
    console.log('Chaiya howar chinta bad din ')
}

// Num4

if ((goodStudent == true && hasBusiness == true) && (gotJob == true || hasMoney >= 500000)) {
    console.log('Alhamdulilah Kabul')
}
else {
    console.log('Chaiya howar chinta bad din ')
}


// Nested Condition ---------
var chaPrice1 = 20;
var danishPrice1 = 20;
var singaraPrice = 7;
var butterBon = 8;
var myBudget1 = 25;
var cupClean = true;

if (chaPrice1 < myBudget1) {
    console.log('Cha khabo')
}
else if (danishPrice1 <= myBudget1) {
    console.log('Acca Taile danish khabo')
}
else {
    console.log('Sudu butterbon kahbo bhai')
}

if (chaPrice1 < myBudget1) {
    if (cupClean == false)
        console.log('Nare bhai cha khabo na')
    else {
        console.log('sudu cha din bhai')
    }
}
// else {
//     console.log('Bro Cha er loge free te kisu din')
// }