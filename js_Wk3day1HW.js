//1. (completed above) Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments
//and returns the largest of them. If they are the same, return that number.
//Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(num1, num2) {
  if (typeof num1 == "number" && typeof num2 == "number") {
    return num1 > num2 ? num1 : num2;
  } else {
    return "Not a valid number(s)";
  }
}

console.log("The maximum number is :" + maxOfTwoNumbers(4, 8));
console.log("The maximum number is :" + maxOfTwoNumbers(4, "Hi"));

//2. Define a function, as a function expression,
//maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThree = function (num1, num2, num3) {
  if (
    typeof num1 == "number" &&
    typeof num2 == "number" &&
    typeof num3 == "number"
  ) {
    return num1 > num2 && num1 > num3
      ? num1
      : num2 > num1 && num2 > num3
      ? num2
      : num3;
  } else {
    return "Not a valid number(s)";
  }
};

console.log("The maximum number is :" + maxOfThree(3, 2, 4));
console.log("The maximum number is :" + maxOfThree("Number", 2, 4));

//3. Define a function, as a function declaration,
//isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  if (typeof char != "string") {
    return "Not a valid character";
  }
  if (vowels.includes(char.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}
console.log("Passing a vowel character(Success case1) :"+isCharAVowel("O"));
console.log("Passing a non-vowel character(Success case2) :"+isCharAVowel("B"));
console.log("Passing a number(Failure case) : "+isCharAVowel(23));

//4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers.
//For example, sumArray([2, 4, 5]);would return 11

const sumArray = function (...nums) {
  let sum = 0;
  nums.forEach((num) => (sum += num));
  return sum;
};
console.log("The sum of three numbers :" + sumArray(1, 4, 3));
console.log("The sum of three numbers :" + sumArray("number", 4, 3));

//5. Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the
//product those numbers. For example, multiplyArray([2, 4, 5]);would return 40

function multiplyArray(...nums) {
  let product = 1;
  nums.forEach((num) => (product *= num));
  return product;
}
console.log("The product of three numbers :" + multiplyArray(2, 4, 5));
console.log("The product of three numbers :" + multiplyArray(2, 4, "number"));

//6. Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.

const numArgs = function (...n) {
  return arguments.length;
};
console.log("The number of arguments passed :" + numArgs(2, 3, 5, 5, 6, "nnn"));

//7. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it.
//For example, reverseString('rockstar');would return the string "ratskcor".

function reverseString(str) {
  if (typeof str == "string") {
    //let chararray = str.split('');
    str = str.split("").reverse().join("");
    //console.log(chararray);
    //str = chararray.join('');
    return str;
  } else {
    return "Not a valid string";
  }
}
console.log("The reversed string is :" + reverseString("javascript"));

// 8.Define a function, as a function expression, longestStringInArraythat takes
//an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = function (...str) {
  let lenarray = [];
  str.forEach((st) => {
    lenarray.push(st.length);
  });
  let max = lenarray[0];
  lenarray.forEach((len) => {
    if (len > max) max = len;
    // console.log(max);
  });
  return max;
};
console.log(
  "The longest string the array is :" +
    longestStringInArray("Meena", "MERN", "JPMorgan", "Javascript")
);

//9. Define a function, as a function declaration, stringsLongerThanthat takes an array of strings
//and a number as arguments; and returns an array of the strings that are longer than the number passed in.
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

function stringsLongerThan(str, num) {
  let newarray = [];
  //console.log(str);
  str.forEach((st) => {
    if (st.length > num) {
      newarray.push(st);
    }
  });
  return newarray;
}
let str = ["Meena", "Java", "JPMorgan", "Program"];
console.log(
  "The strings longer than the given number is :" + stringsLongerThan(str, 7)
);
