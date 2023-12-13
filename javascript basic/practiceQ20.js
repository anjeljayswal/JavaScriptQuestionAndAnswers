// Q1. Given a string, reverse each word in the sentence

var str = "Hi my name is anjali Jayswal";
var newStr = str.split(" ").map((word) => {
    return word.split("").reverse().join("");
})
console.log(newStr.join(" "));

// Q2. How to check if an object is an array or not?
// Provide some code. 

function checkArray(word) {
    return Array.isArray(word);
}
console.log(checkArray([]));
console.log(checkArray({}));

//  Q3. How to empty an array in javaScript?
// do not reset it a new Array, and do not loop
// through to pop each value 
var arr = [1, 3, 5, 6, 7, 7];
console.log(arr.length);
console.log(arr.length = 0);

// Q4. how would you check if a number is an integer?
var a = 12.5;
// 13/1=13 integer
// 12/1=12 integer hai
// 14.5/1= 14 and rem 0; integer nahi hai
if (a % 1 === 0) {
    console.log("Integer");
} else {
    console.log("not !");
}
// OR 
console.log(Number.isInteger(a));

// Q5. make this work:
// duplicates([1,2,3,4,5]);//[1,2,3,4,5,1,2,3,4,5]
function duplicate(arr) {
    return arr.concat(arr);
}
console.log(duplicate([1, 2, 3, 4, 5]));


// function 

// Q6. Write a JavaScript function that reverse a number 
function reverseValue(num) {
    return Number(num.toString().split("").reverse().join(""));
}
console.log(reverseValue(12));
// Or 
function reverseValue2(num) {
    var rev = 0;
    while (num > 0) {
        var rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    return rev;
}
console.log(reverseValue2(34));

// Q7. Write a javaScript function that 
// checks whether a passed string is palindrome
//  or Not; 
function stringPalCjecker(str) {
    var reverseed = str.split("").reverse().join("");
    if (reverseed === str) {
        return true;
    } else {
        return false;
    }
}
console.log(stringPalCjecker("poop"));
console.log(stringPalCjecker("loop"));


// Q8. Write a javaSrcipt function that 
// returns a pssed String with letters 
// in alphabetical order 
function stringSortingAlpha(str) {
    return str.split("").sort().join("");
}
console.log(stringSortingAlpha("anjali jayswal"));


// Q9. Write a JavaScript function that accepts a
// string as a parameter and converts the first
// letter of each word of the string in upper case 
function firstLetterCap(str) {
    var allwords = str.split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.substring(1);
    })
    return allwords.join(" ");

}
console.log(firstLetterCap("hi my name is anjali jayswal"));

/*Q10. wite a javascript function which
accepts an argument and returns the type.
Note: there are six possible values that
typeof returns: object, bollen, function,
number, string, and undefined
*/
function typeTeller(elem) {
    return typeof elem;
}
console.log(typeTeller([]));
console.log(typeTeller(12));
console.log(typeTeller("String"));
console.log(typeTeller(true));
console.log(typeTeller(undefined));
console.log(typeTeller(function () { }));



// Q11. write a javaScript functions to get the number of 
// occurrences of each letter in specified string 
/*
function occ(str){
    var occcurences={};
    str.split("").forEach(function(element){
        if(occcurences.hasOwnProperty(element)===false){
            occcurences[element]=1;
        }else{
            occcurences[element]++;
        }        
    });
    return occcurences;

}
console.log(occ("apple"));
console.log(occ("i an aj"));
*/


// Loops 
// -------------------------
// Q12. loop an array and add all members of it 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum1 = 0;
arr1.forEach(function (ele) {
    sum1 = sum1 + ele;
})
console.log(sum1);


// Q13. in an array of numbers and strings, 
// only add those members which are not srtrings
var arr3 = ['jhi', 123, 'hi', 3, 4, 'ram', 'gita'];
var sum3 = 0;
arr3.forEach((function (ele) {
    if (typeof ele === "number") {
        sum3 += ele;
    }
}))
console.log(sum3);

// Q14.  loop an array of objects and remove all
// objects which don't have gender's value 
// male

var arr4 = [
    { name: "ram", gender: "male" },
    { name: "gita", gender: "female" },
    { name: "abcd", gender: "nonspecifiec" },
    { name: "harshit", gender: "male" },
    { name: "rita", gender: "female" }

]
// var newArr4 = arr4.filter(function(ele){
//     return ele.gender === "male";
// })
// console.log(newArr4)
// OR
// arr4 = newArr4;
// console.log(arr4)
// OR
// sabs e pahle total non-male count lo 
var count = 0;
arr4.forEach(function (ele) {
    if (ele.gender !== "male") {
        count++;
    }
})
console.log(count);

// ek non-male bande ko hatane ko code likho 
for (var i = 1; i <= count; i++) {
    for (var j = 0; j < arr4.length; j++) {
        if (arr4[j].gender !== "male") {
            arr4.splice(j, 1);
        }
    }
}
console.log(arr4);

// fir us code ko total non-male chala do 


// Arrays 
// ---------------------------

// Q15. Write a javascript function to clone an array
function cloneArr(arr) {
    return [...arr];
}
var newArr = cloneArr([1, 2, 3, 4]);
console.log(newArr);
//OR
function cloneArr1(arr) {
    var newArr1 = [];
    arr.forEach(function (e) {
        newArr1.push(e);
    })
    return newArr1;
}
var abcd1 = [1, 2, 3];
var newarr = cloneArr1(abcd1);
console.log(newarr);
// OR Using map
function cloneArr2(arr) {
    return arr.map(function (e) {
        return e;
    })
}
var newArr2 = cloneArr2([1, 4, 6, 8, 3]);
console.log(newArr2);

// Q16. write a javascript function to
// get the first elemt of an Array. 
// Passing a parameter 'n' will return
// the first 'n' elemts of the Array. 
function retrive(arr, n = 1) {
    // console.log(arr,n);
    if (n <= arr.length) {
        for (var i = 0; i < n; i++) {
            console.log(arr[i]);
        }
    } else {
        console.log(n + " demand jada rakhi hai");
    }
}
retrive([1, 2, 3, 4, 5], 12)



// Q17. write a javascript function to get 
// the last element of an Array. 
// Passing a parameter 'n' will return the 
// last 'n' element of the Array. 
function lastretrive(arr, n = 1) {
    if (n <= arr.length) {
        for (var i = 0; i < n; i++) {
            console.log(arr[arr.length - 1 - i])
        }
    } else {
        console.log(n + " demand jada rakhi hai");
    }
}
lastretrive([1, 2, 3, 4, 5], 2);



// Q.18. write a javascript program to find the
// most frequent item of an array
function freq(arr) {
    var count = {};
    arr.forEach(function (word) {
        if (count.hasOwnProperty(word)) {
            count[word]++;
        } else {
            count[word] = 1;
        }
    })
    var ans = Object.keys(count).reduce(function (acc, next) {
        return count[acc] > count[next] ? acc : next;
    })
    console.log(ans);
}
freq([1, 4, 2, 4, 2, 4, 3, 3, 4, 4, 7, 5, 6, 7, 8]);

// Q19. write a javascript program to shuffle an array
function suffleKaro(arr) {
    //ek random number nikalo
    var totalShuffleArea = arr.length;
    //ek random number nikaalo 
    while (totalShuffleArea > 0) {
        totalShuffleArea--;
        var indexToBeExchanged = Math.floor(Math.random() * totalShuffleArea);
        var temp = arr[totalShuffleArea];
        arr[totalShuffleArea] = arr[indexToBeExchanged];
        arr[indexToBeExchanged] = temp;
    }
    return arr;
}
console.log(suffleKaro([1, 2, 3, 4, 5, 6, 7]));


// Q20. write a javascript program to compute the union of two arrays sample data:
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2,3,10,100];

function union1(arr1,arr2){
   return [...new Set(arr1.concat(arr2))];
}
console.log(union1([1,2,3,4],[2,3,4,6]));