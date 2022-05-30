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