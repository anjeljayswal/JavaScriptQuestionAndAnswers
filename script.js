// // let a=45; // let makes varibles can be changed
// // a=67;
// // const b=56;  // const makes constant cannot be changed
// // b=67;

// // let and const dono se aap value store kar sakte ho, but
// //  dono differently behave karte hai, let change ho sakta 
// //  hai and const nahi ho sakta, let ko first time value dena a
// //  aniwarya nahi hai and const ko hai,
// //  dono me kuchh similarities hai,

// //  let and const dono es6 se hai 
// // let and const dono different hai, matlab let makes a avariable and const makes a constant
// // let and const are similar in few things 
// // let and const dono khudko window object mein add karte hai 
// // ....................braces scoped hote hai. cannot acces out side of braces


// // in new js  there is only one function which have three different roop they are:
// // arrow function 
// // bascic fat arrow function 
// eg: var a = ()=>{};
// a();
// // fat arrow function  with one parameter  
// eg: var b=(param)=>{};
// b(12); // but for two params b=(params, ars)=>{}; b(13,23);
// // fat arrow function with implicit return 
// var g = ()=>12;
// g();



// //template literals 
// // hey 2+2 is 4 and 2-2 is 0 and if 2 is 3+2 the 6 is 3-4 print hello 

// console.log("hey "+ 2 + 2 + " is 4 and " + 2 - 2 + " is 0 ") ;
// // console.log(`hey 2+2 is ${}`)


// // default parameter 
// function abcd(prm=0){ 
//     console.log(prm);
// }
// abcd(12); // 12
// abcd(122); // 122
// abcd(); // undefined so set param value initial zero so it not give undefined

// // spread/rest 
// var  a = [2,4,6,3,6,8,2,8,9];
// var b = [...a]; // it will copy all value it is spread means
// // hai elemet ke saare values ko us jagah par bikher dena
// console.log(a);
// console.log(b);

// // rest use hote hai jap aapko bache huye values ek 
// // varible mai daalni ho
// function ab(a,b,c, ...d){ // rest

// }
// ab(1,2,3,4,5,6,7);


// // destructuring                for objects
// var x = [1,2,3];                 var obj = {name:"anjali", age:22};    
// var b = x[0];                       var res = obj.name; //or obj[name]
//                                 var {name , age} = obj;
// // or 
// var [b,c,d] = a; 



// var arr = [1,2,3,4,6,6,78];
// // arr[0];

// // push pop unshift shift 
// // push to add number 
// arr.push(9);
// arr.pop();
// arr.unshift(12);
// arr.shift();
// console.log(arr);



var str = "Saare jaha se achha hindustan humara";
console.log(str.split(" ").forEach(function(e){
    e.split("").reverse().join("");
}));



