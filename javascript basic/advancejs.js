// ok,let me introduce myself, ok sir fine , i will introduce 
// I am anjali jayswal i have completed my btech in cserrently i am located in  bangalore. 
// I am looking for the role of frontend developer.
// i am famlier with reactjs library ,
// sorry sir, i will have to learn it, i will try to learn about it 
// it's fine, okay from my side, 


// the process of 
// i thougt to learn advance technnolgy  mern technology 
// my preferance is to learn more than earning money so i am okay with this 


/*higher order function 
first class function
constructor functions
new keyword
iife 
prototype 
prototypal inheritence 
this call apply bind 
pure & impure function
closures 
*/

// 1. higher order function
/* Higher order function are the function which 
acept a function in a parameter or return a 
function or both. 
For example: ForEach Method always takes another
function inside it, So ForEach is a higher order function.
*/
//  first method 
// function abcd(){
// }
// abcd(function(){}); //parameter as a func 
// eg:
// var arr = [1,2,3,4,5,6];
// arr.forEach(function(){})
//aisa fnc jo eaccept ek aur fnc ya fir wo return karde ek aur fnc ko

// 2.constructor functions
/*A fnc which whenever invoked with "new" keyword returns 
an object, if we use "this" keyword inside that function,
it returns an  object with all of the properties 
and methods mentioned inside that function with this keyword,
such function is called constructor function.
eg: function abcd(){
    this.name="anjali";  
}
var person = new abcd(); //new keyword infront of fnc
// call makes abcs constructor
*/
// biscuits and sacha se banti hai biscuit ke saphe
//  like instance one piece of biscuit with same property 
// function saanchaOfBiscuit(){
//     // this   //by default this me window, window is ki jaha saare browser ki feautures hote hai
//     this.width = 12;
//     this.height = 22;
//     this.color="brown";
//     this.taste = "sugary";
// }
// var bis1 = new saanchaOfBiscuit();
// console.log(bis1);
// var bis2 = new saanchaOfBiscuit();
// console.log(bis2);
// var bis3 = new saanchaOfBiscuit()
// console.log(bis3);//normal fnc jisme this ka istemal ho and aap fnc ko 
// call karte waqt new keyword ka use karein 

// use of constructor function  
/*jab aapke pass aisa koi bhi mauka ho 
ke ek jaisi properties waale abhut saare 
elements banaane hai us waqt constructor
 fnc use kar sakte ho
*/
// eg: 
// function circleButtonnBano(color){
//     this.radius=2;
//     this.color=color;
//     this.icon=false;
//     this.pressable=true;
// } 
// var redbtn = new circleButtonnBano("red");
// console.log(redbtn);
// var greenbtn = new circleButtonnBano("green");
// console.log(greenbtn);

// 3. What is first class functions?
/*A langauage is said to have First Class Functions when 
the fncs is that langauage are treated as 
varibles, you can save them, you can pass them as 
argumnets to another dunctions
*/
// eg: setInterval(function(){});


// 4. what is new keyword?
// new keywords always create a blank object
// for the constructor fnc which is getting called 
// just after new keywords
// new => jab bhi new lagta hai humesha ek blank
// object apne man main bana lo 
// {

// }
// eg: function abcd(){
//     this.age=12;
// }
// new abcd();
// {
//     age:12;
// }



// // 5. IIFE ?
// Stands for immediately invoked function expression.
// It is a way to create a function and immediately excute it
// without needing to call localStorage. 
// => immediately invoked function expression
/*iife hai function ko turant chalene ki kala,
 is tareeke se ki hum log koi private
 varible bana paaye
 */
// (function(){
//     var a=12;
// })()
// // we cannot access varible a, it is privates
 /*var ans = (function(){
    var private = 12;
    return {
        getter: function(){
            console.log(private);

        } , // getter is a function, used to access private value 
        setter:function(val){
            private=val;
        }
    }
 })()

 console.log(ans.getter()); 
 console.log(ans.setter(22)); 
 console.log(ans.getter());
 */

//  6. Prototype 

// go to browser console and create an object:
// var obj ={name:"anjali"}
// and now type object name followed with a dot operator:

// obj.name
// we see a list :
/* so, if we didnot created these properties where do 
they came FormData, that's where the concept of 
prototype comes in, every created object gets a
property called prototype, which means whenever 
you created an object it gets prototype property
automatically. 
*/

// after creating obj object with name 
// but when we check it on console what 
// does it contains

// >obj
// {nae:'anjali'}
// name:"anjali"
// [[Prototype]]:Object

// here we did not created [[prototype]]

// it contains an extra property called [[prototype]]
// so where does it come from and waht does it contains.after

// js by default add a property called [[prototype]]
// to every objects, so if you ever see any objects,
// you can blindly say that objec contains prototyoe,
// so now, what does it contains ?


/*[[prtotype]] contains many helper properties
ans methods whisch we can use to complete our 
task, let's say we create an array and we 
want to know length of it, what do we  do,
we use .length property on array, did we 
created .length on that array, no! but it
 still contins .length, the question is how? 
 */

// the answer is, many properties and methods
// are alreeady available to use built by js
// creators inside prototype of every objects


// 7. prototypal inheritence
/*inheritances is basically passing parents features or
properties to their childrens, to do the same thing in 
javascript with the help of prototype (one ectra propeties
always given by javascript to every object) is called 
prototypal inheritance.*/

// how we perform prototypal inheritance?


// make an object called human and put 
// properties like, canFly, canTalk, willDie 
// var Human = {
//     name : "Any",
//     canFly: false,
//     canTalk: true,
//     willDie:true    
// }
/*make another object called jack student, he 
can do all things which a human can do but he can do few more thinhs like, 
he can solve js questions and create websites, so we create extra teo props which normal human's 
conot do in that objects and rest properties we will inherit from human.
*/
// var jackStudent = {
//     solveQuestion: true,
//     createModernWebsites : true
// }

// jackStudent.__proto__ = Human;
// // console.log(jackStudent.__proto__ = Human);


// /8. this keyword?
// global scope=> window 
// function scope=> window
// method scope=> Object

/*this keyword is a special keyword in javascript
which changes it's value in different context.

let see "this2 in different contexts:

in global scope:
jab bhi koi chhej {} brackets ke andar nahi hoti 
to hum use global scope kahte hai 
console.log(this); gives window

in function scope=>jab vi kuch likh rahe ho check karo kya 
usmein kahi bhi koi funcions, object ya fir scope bana hai {} 
then function scope  
 function abcd(){
    console,log(this); gives window
 }
 */

//  method?=> ek function jo object ke andar ho, use method kahte hai 
// var obj ={
//     baatKaro: function(){
//         name: "harsh",
//         console.log(this); // gives object obj
//     }
// }
// console.log(obj.baatKaro());

// important=> in any method, "this" keyword always refers to parent object 

// this keyword in  event listeners 
// var button  = document.querySelector("button");
// button.addEventListener("click", function(){
//     // console.log(this);
//     this.style.color = "red"; 
// })
// here this keyword is equal to whatever written before addEventListener, in this case button 


/*
//call aplly bind => agar tumhaare pass koi fuc hai 
// and koi object hai and tumhe fnc chalane hai aur by
//  default jo this ki value window hai use window naa
//   rakh kar point karwana hai kisi object ki taraf    

function abcd(){
    console.log(this);
}
var obj = {age:24}
abcd.call(obj); //obje go to this value

function abcd1(val1, val2, val3){
    // console.log(this);
    console.log(this,val1,val2,val3);
}
var obj1={age:24}
abcd1.call(obj, 1,2,3)// obj go to this, 1 to val1, 2 to val2, 3 to val3
*/

/*
// apply 
// apply take two parameter one this and other is array for parameter we con not take direct parameter in apply 
function abcd1(val1, val2, val3){
    // console.log(this);
    console.log(this,val1,val2,val3);
}
var obj1={age:24}
abcd1.apply(obj, [1,2,3])// obj go to this, 1 to val1, 2 to val2, 3 to val3
*/
// "usecase": jab vi ek funstion chalana hai jisme this ki value kuchh or hai
// par aap chahte ho this ki value kuchh or object rahein  

// /*
// bind  : mostly used in react , event click ho to use
// function abcd3(){
//     console.log(this);
// }
// var obj3 = { age:34};
// var bindedFnc = abcd3.bind(obj3);
// console.log(bindedFnc());



// pure function and impure function 

/*pure function ia any function ehisch has these 2 features:
i)it should always return same output for same input 
ii) it will never change/update the value of a global variable.a
*/
// function cal(val){
//     return val+2;
// }

// always same answer if we pass same value for 'val' 
// argument, hence this function is pure function.
 
// impure 
function cal(val){
    return Math.random()*val;
}
var ans1 = cal(2);
console.log(ans1);
var ans2 = cal(2);//both will give different output