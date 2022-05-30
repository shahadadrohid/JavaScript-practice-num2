var isFoodReady = true;
if (isFoodReady == true) {
    console.log('i will eat now')
}
var iphonePrice = 100000;
var myBudget = 15000;
if (iphonePrice < myBudget) {
    console.log('i will buy iPhone')
}

var chickenPrice = 150;
var myMoney = 80;

if (chickenPrice < myMoney) {
    console.log('i will eat chicken')
}
else {
    console.log('alur borta')
}



// multiple condition

var gotJob = true;
var moneySaved = 300000;
var hasHouse = true;

if (gotJob == true || moneySaved == 500000) {
    console.log('Kabul, kabul, kabul')
}
else {
    console.log('i am going to america')
}

if ((gotJob == true && moneySaved == 500000) || hasHouse == true) {
    console.log('Kabul, kabul, kabul')
}
else {
    console.log('i am going to america')
}