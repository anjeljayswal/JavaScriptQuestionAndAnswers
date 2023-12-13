// sync and async kya hota hai?
// kaise pata chalta hai ki hum sync likh rahe ya async?
// async js hai kya?
// js is not asynchronous?
// async ki poori kahaani.
// single thraeding and multi threading 
// callbacks 
// promises 
// then and catch 
// async await 
// 5 use cases ekdum real world waale 

// [concept aside ]
// concurrency and parallelism 
// throttling 

/*// sync and async kya hota hai?
sync : line by line after completing each other
1.ek ke baad dusra hoga, jab tak ek command complete na ho, dusra shuru nahi hoga 
2. eg :
task a - 5 
task b - 2 
task c - 15 
task d - 1
it will take 5+2+15+1=22

async : code start excuting at same time but which excute at fast then it will return it 
1.async matlab saare kaam ek sath euru kardo, jiska answer pahlee aajaye uska jawaab dedana
2. it will take : 1+1+3+10=15
*/

// // kaise pata chalta hai ki hum sync likh rahe ya async?
// setInterval,
// setTimeout,
// promises,
// axios,
// fetch,
// XMLHttpRequest, these all are async

// eg: sync 
console.log("hey 1");
console.log("hey 2");
console.log("hey 3");

// asyn js hai kya?
/*kai baar aapka final code depended hota 
hai kisi aur ke server parent, is case mein
humein nahi pata hota ki answer uske server 
se kab laut kar aayega, to hum kya nahi kr 
sakte is writing sync code, isse nipatne ke 
liye log async code likh sete hai taaki 
blocking naa ho and jab bhi answer aaye humara 
answer ke respect mein chalne waale code chal 
jaaye
*/
/*
sync code ka main hota hai ki un cases mein 
jinmein hue pata nahi code ka answer kitni 
der mein aayega to jab bhi answer aa jaaye 
uske answer ke respect mein koi particular 
code chaala dena
eg: facebook se photo laao aur jab photo aajaaye show kar dena
*/

// demo 
//two argument function callback and time in ms
console.log("hi")
setTimeout(function(){
    console.log("callback after 2 second")
},2000); 

// callbacks fnc humesa async code mein answer aane par chalta hai


// // js is not asynchronous?
// no js is not asynchrounous . it will not run two code at a time 


// a sync 
// b sync
// c asyn 
// d 
