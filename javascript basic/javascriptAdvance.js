// // Q1. var let const 
//            js 
//     es4         es6  version two
//     var        let and const 

        

//--difference b.w var let const
// var old js mein tha    
// var function scoped hota hai=> var apne paren fnc main kahi bhi use ho sakta hai
// var adds itself to the window object eg:var a =2; a will be added in window box
 
function abcd(){
    for(var i=0;i<12; i++){
        console.log(i);
    }
    console.log(i)
}
abcd();

// let and const new js mein hai 
// let const braces scoped hota hai
// let const doesn't adds 

function abcd1(){
    for(let i=0;i<12; i++){
        console.log(i);
    }
    // console.log(i) // cannot access here
}
abcd1();

/* --window object
in js language some features are not available but we can use it,
that featurs will came from browser, that all features which are not
 the part of js but even we can use it and search from a particular 
 object, that is called window. 

js language mein kuchh cheeje nahi hai jo hum use kar 
sakte hai aur wo cheeje hue js se nahi balki broser
se milti hai, aise saare features jo js ks part nahi 
hai but fir bhi use kar sakte hai unhe hum dhiind sakte 
hai ek particular object mein jiska naam hai window 
*/
/*
js mein kai saare features hai par kuchh features 
jo hum use karte hai wo features wo nahi hai par
fir bhi use kar passte hai kyoki wo features js
langauge use kar leti hai window self, aur window
hai ek box of features given by browser to use 
with js
eg: console, log, clearinterval, document, localStoarge,
print, prompt, scroll, screen, setTimeout, etc. we can 
see this on browser console writing "window"
*/

// --important browser give three things called context api  that three things 
// is window, stack  and heap memory.

// --stack 
// -which things how will excute is called stack

//--heap memory
// jitne bhi variables ya data hum baannate hai 
// unhe store kahi to karna parta hai uske liye 
// hota hai heap memory 
// eg: 1+2+3+4+5
// 1+2=3, then 3+3=6, 6+4=10, 10+5=15 here 3, 6, 10 store in heap memory

// --excution context
/*
excution context matlab jab bhi hum fnc chaalayenge
fnc apan ek container khudka ek imaginary container 
bana lega jismein uski teen cheej hogi:
 1) varibles
 2) functions inside that present fnc
 3) lexical environment of that function
 ye jp container hai imaginary ise hi hum excution context kahte hai 

 excution context means while running the function, function create its own 
 imajinary conatainer that conatins three things i.e varible, function inside 
 parent function, and the last one is lexical environment of that function 
 */

function abcd(){
    var a = 12;
    function def(){
        var b=12;
    }
}
// in above function we cannot acess var b outside of it 
// excution context is a container where the function's 
// code is excuted and it's created ehenever a function is 
// called, it contains 3 things, varibles, functions and 
// lexical environment

// --lexical environment
// -lexical environment hota hai ek chart jisme likha hota 
// hai ke aapka particulra function ki cheej ko acess kar 
// sakta hai and kinko nahi, matlab ki it holds it's scope 
// and scope chain   

// --how to copy reference value 
// with help of spread operator 
/*var a = [3,4,5,6,7];
var b = [...a]; //here copy of a.  
b.pop();

var obj = {name:"ram"};
var copyobj = {...obj};
console.log(copyobj);
*/

// --tuthy and falsy 
// js me kuch bhi likho wo mainly do prakar
// mein se kisi ek prakaar ko belong karti hai
// falsy values ye hai  = 0 false undefined null Nan documnet.all
// truthy value 
if(7){
    console.log("hey");
}else{
    console.log("hello");
}
// switch
switch(1){
    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
    default:
}

// foreach forin do-while

// forecah loop sirf array pe chalta hai matlab ki jab 
// bhi tumhare pass ek array ho, tab mein kaun aata hai foreach loop 

var a = [1,2,34,56,7,2,5,90];
a.forEach(function(num){
    console.log(num*2);
})

// forEach kavi bhi by default aapkr array mein 
// changes karke deta hai array ki temprorary copy par 
// jiske wajah se array humesha same rehte hai 


// for in 
// objects par loop karne ke liye hota hai forin loop 
var obj={
    name:"aj",
    age:12,
    city:'brj'
}
for(var key in obj){
    console.log(key);
    console.log(key, obj[key]);
}

// do looop print at least one, and then check condition matched or not
var d=120;
do{
console.log("hey")
d++;
}while(d<15)

// callbacks function
/*
jab bhi koi aisa code jo baad me chalta hai
aap likhoge, kyuki wo code baad mein chalta 
hai js ko pata nahi hota ke wo complete huwa 
ya nahi, aise code ke completion par js ko 
btaya jaata hai ke wo complete hogya aur aap 
use chala sakte ho, ye bataane ka kaam callback ka hai
*/
// when clicking on button on fb to get picture
// it will send requset to server we don't know when they will 
// come or send request 

setTimeout(function(){
    console.log("2 second baad chala");
}, 2000);
// aisa code jo baad me chalta hai use hum
/*ek function dedete hai ke bhaiya jab complete 
hojaana to ye function chala dena, aur wo 
function jo hum dete hai wo ek normal fnc hi 
hota hai aur use kahte hai callback fnc
asynchronous function
*/ 

// first class function 
// js main ek concept hai jiske matlab hota hai 
// aap fnc ko use kar sakte ho as a value 

function firstC(a){
    a();
}
firstC(function(){console.log("first class fnc")});

// --how arrays are made behind the scenes 
var arr =[221, 452, 675];
arr={
    0:221,
    1:452,
    2:675
}
// we can check though Array.isArray([]) give true, Array.isArray({}) give false ;


// why we can make negative indexes arrays in js 


// how to delete object prop 
var a = {
    name:"ram",
    age:44
}
delete a.age;
delete a.name;
console.log(a);

