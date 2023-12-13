// closures: 
/*a closure is a combination of a function and the lexical
environment within which that function was declared. Closures 
allow functions to retain access to variables from their 
containing (enclosing) scope even after the scope has finished 
executing.
*/
function abcd(){
    var x=12;
    return function(){
        console.log(x+1);
    }
}
var res = abcd();
res();

function outerFunction() {
    let outerVariable = "I am from the outer function";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  // Create a closure by calling outerFunction and assigning the result to a variable
  let closure = outerFunction();
  
  // Invoke the closure, which still has access to outerVariable
  closure(); // Output: "I am from the outer function"

  // null: means trying to find something but there is nothing