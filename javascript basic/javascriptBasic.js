// // Q1. word vs keywords
// // chacha    = word ,vaeya = word, is, good, man 
// // for = keywords , if else, var 

// //Q2. var const let 

// // var is used to store data 
// // code main koi bhi data store karne ke liye 
// // jiska use hota usse kehtain hai varibles 
// // varibles means value will be change and 
// // constant value will not changes 
// // 1let can be change but with in braces only


// // Q3. Hoisting
// // hoisting use varible before create is called hoisting 
// // it is possible in js so we called hoisting 
// // hoisting - varible and functions are hoisted means there 
// // declaration  is moved on the top of code

// // Q4. types of js 
// // primitive and non primitive 
// // primitive= number, boolean,string, null, undefined
// // non primitive=references = [] () {} 
// //aisi koe bhi value jisko copy karne par real value copy nahi hoti,
// // balkinus main value ka references pass hojaata hain, 
// // use hum reference value khahte hain, aur jsika copy
// // lkarne par real copy ho jaye wo value primitive type value hoti hai


// // Q5. conditional = if else else-if
// //agar magar, yesa wose

// // Q6. loops- for while: loop ka matlab repeat
// //loop is used to print for the repition of output
// //1 1 1 1 1 1 1 1 1   repeatation of number in while loop , print
// // 1 2 3 4 5 6 7 8 9  there is no repetation of number
// // for(start;end;change ){

// // }

// //0-10
// for(var i =0;i<=10; i++){
//     console.log(i);
// }
// var j=5;
// while(j<9){
//     console.log(j++);
// }
// difference Both for loop and while loop is used to execute 
// the statements repeatedly while the program runs. The major 
// difference between for loop and the while loop is that for 
// loop is used when the number of iterations is known, whereas 
// execution is done in the while loop until the statement in
//  the program is proved wrong.

// --truthy vs falsy
// if(true/false){

// }

// if(11>12){
//     true
// }else{

// }
// if(){}else if(){}else{}

// // Q7. functions
//6 types 3 in es6 and 3 in old js
// function = code ko nam dena 
// // function ka matlab aap kuxhh code ko likh kar koi naam de skate ho 
// // and baad mein use use kar sakte ho 
// //functions mainly teen ke liye hote hai
// // 1)jab aapka code turant nahi chalana ccahte future mein
// // chhalana chahte ho 
// // 2) jab aapna code aap reuse karna chahte ho
// // 3) jab aap code chalana chahte ho har baar with different data
// argument = real value jo hum dete hai fnc chalaate waqt
//parameter  = variables jisme store hoti hain argumnet waali

// // function abcd(){  
// //     console.log("Hii");    
// // }
// // abcd();
// // abcd();
// with different data
// function abcd(a){
//     console.log(a);    
// }
// abcd(11);
// abcd(12);

// smae data 
// function toEatOats(){
//     console.log("oats kino");
//     console.log("oats banawo");
//     console.log("ots khawo");
// }
// console.log(toEatOats());



// // Q8. arrays = hum ek varible mei ek value store kar 
// // paate hai par jab humein ek se jada value store
// // karni ho to fir use hota hai array ka, matlb ki array 
// // aapko freedom data hai ek se jada value use karne ki 

// //array = group of values
// var arr = [1,2,3,4,6,6,78];
// arr[0];

// //Q9. push pop unshift shift 
// // push to add number 
// arr.push(9);
// arr.pop();
// arr.unshift(12);
// arr.shift();
// console.log(arr);

// //splice 2 is from where and 1 is how 
// // much data we want to remove
// var newArr=arr.splice(2,4)
// console.log(newArr);

// // Q10. objects : ek se jaada bande ki baat ki to array,
// //  ek bande ke baare mein saari baat ki to hua objects
// // object hai ek bande ki details ki hold karna,
// // in a key value pair

// // 1) blank object
// var a= {};