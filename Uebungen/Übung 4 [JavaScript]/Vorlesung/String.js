var s1 = 'abc';
var s2 = "def";
s2 += `beide ${s1} ${s2} auch mehrzeilig`; // Backtick (Template)
console.log( "abc" === "abc" ); // true
console.log( "a" + "b" === "ab" ); // true
console.log( "abc".indexOf("b") === 1 ); // true
console.log( "abc".includes("b") ); // true
console.log( "abcd".slice(1,3) === "bc" ); // true