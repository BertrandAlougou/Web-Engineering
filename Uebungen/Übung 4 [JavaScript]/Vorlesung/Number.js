/**toString() Method**/


//3.toString()   //SyntaxError ---> js parser thinks that 3. is a decimal number awaiting a decimal part

//solution --> wrapper () around the number before method call

console.log("(3).toString(): ",(3).toString())  //result : 3

//alternatively: if the number has a decimal part like 3.0, you can call the toString() method

console.log("1.0.toString(): ",1.0.toString()) //result : 1

/**Difference between Number("") and new Number()**/

console.log("Number(): ",Number(3)) //converts the inserted value into a primitive number-type

console.log("new Number(): ",new Number(3)) // Number used as a constructor creates a new Object with value 3 but of type object
console.log("typeof (new Number(3)): ",typeof (new Number(3)))


/**Comparing primitive and object types**/

//objects in js are compared with the references(call-by-reference) and not with their values(call-by-value)

const num1 = new Number(3);
const num2 = new Number(3);
console.log("num1 === num2: ",num1 === num2); // result: false
console.log("new Number(3) === new Number(3): ",new Number(3) === new Number(3));



