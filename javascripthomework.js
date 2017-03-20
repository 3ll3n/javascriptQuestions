// Section 1

// What types are these?

/* 1.1 */ 1;
integer
/* 1.2 */ "cat";
string
/* 1.3 */ true;
boolean
/* 1.4 */ [];
array
/* 1.5 */ {};
hash(object)
/* 1.6 */ 1.1;
float
/* 1.7 */ var myVariable;
variable 


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
// 3.2 Assign a variable that is a string
var myString = "pet";
// 3.3 Assign a variable that is a boolean
var myBoolean = true;
// 3.4 Assign a variable that is an object
var myObject = {};


// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

console.log(true !== false ? "hello" : "bye");


// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
var animal1 = animals.shift();
// 5.2. Assign the last element to a variable
var animal2 = animals.pop();
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
// 7.2 Find the amount of money in the account with the largest balance
// 7.3 Find the name of the account with the smallest balance
// 7.4 Calculate the average bank account value
// 7.5 Find the value of marcs bank account
// 7.6 Find the holder of the largest bank account
// 7.7 Calculate the total cash in business accounts
// 7.8 Find the largest personal account owner


// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method

var myPerson = {
  name: "Pumbaa";
  height: "85cm";
  favouriteFood: "bugs";
}

***eat method***
