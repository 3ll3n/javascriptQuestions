// Section 1

// What types are these?

/* 1.1 */ 1;
number
/* 1.2 */ "cat";
string
/* 1.3 */ true;
boolean
/* 1.4 */ [];
object
/* 1.5 */ {};
object
/* 1.6 */ 1.1;
number
/* 1.7 */ var myVariable;
undefined 


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1;
true
/* 2.2 */ "cat";
true
/* 2.3 */ true;
true
/* 2.4 */ NaN;
false
/* 2.5 */ [];
true
/* 2.6 */ {};
true
/* 2.7 */ undefined;
false
/* 2.8 */ "";
false
/* 2.9 */ 0;
false


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number
var myNumber = 18;

// newer version of js
let number = 6;
// 3.2 Assign a variable that is a string
var myString = "pet";
// 3.3 Assign a variable that is a boolean
var myBoolean = true;
// var myBool = new boolean(true);
// 3.4 Assign a variable that is an object
var myObject = {};


// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

console.log(true !== false ? "hello" : "bye");


// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
var first = animals[0];
// var animal1 = animals.shift();

// 5.2. Assign the last element to a variable
var last = animals(animals.length -1);
// var animal2 = animals.pop();

// 5.3. Assign the length of an array to a variable
var arrayLength = animals.length;

// 5.4. Add an item to the end of the array
animals.push("cat");

// 5.5. Add an item to the start of the array
animals.unshift("horse");

// 5.6. Assign the index of hedgehog to a variable
var spikey = animals.indexOf("hedgehog");


// Section 6

// 6.1 Create an array of 5 vegetables
var vegetables = ["asparagus", "carrot", "beetroot", "leek", "onion"];

// 6.2 Loop over the array and write to the console using a "while"
var index = 0;
while(index < vegetables.length) {
  console.log(vegetables[index]);
  index ++;
}

// 6.3 Loop again using a "for" with a counter
for(var i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}

// 6.4 Loop again using a "for of"
for(var vegetable of vegetables) {
  console.log(vegetable);
}

// Section 7

var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts

// in(objects) loops over the keys and of(arrays) loops over the objects
function totalCash() {
  var total = 0;
  for(var index in accounts) {
    total += accounts[index].amount;
  }
  console.log(total);
}

// 7.2 Find the amount of money in the account with the largest balance

var findLargest = function(accounts) {
  var tempArray = [];
  for (var account of accounts) {
    tempArray.push(account.amount);
  }

  var max  = Math.max.apply(null, tempArray);
  return max;
};

console.log(findLargest(accounts));

// 7.3 Find the name of the account with the smallest balance

var smallestBalance = function(accounts) {
  var pauper = accounts[0];
  for(account of accounts) {
    if(account.amount < pauper.amount) {
      pauper = account;
    } 
    return pauper.name;
  }
};

console.log(smallestBalance(accounts));

// 7.4 Calculate the average bank account value

var averageValue = function(accounts) {
  var total = 0;
  for(var account of accounts) {
    total += account.amount;
  }
  var average = total / accounts.length;
  // sets the number of decimal places
  console.log(average.toFixed(2));
};

// 7.5 Find the value of marcs bank account

var findUserBalance = function(name, accounts) {
  for(var account of accounts) {
    if(account.name === name) {
      return account.amount
    }
  }
};

console.log(findUserBalance("marc", accounts));
// 7.6 Find the holder of the largest bank account

var findHolderOfLargest = function(accounts) {
  var poshest = accounts[0];
  for(var account of accounts) {
    if account.amount > poshest.amount {
      poshest = account;
    }
  }
  return poshest.name;
}

console.log(findHolderOfLargest(accounts));

// 7.7 Calculate the total cash in business accounts
// 7.8 Find the largest personal account owner


// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method


var myPerson = {
  name: "Pumbaa",
  height: "little",
  favouriteFood: "bugs",
  eat: function() {
    console.log("Yum");
  }
}

myPerson.eat();

