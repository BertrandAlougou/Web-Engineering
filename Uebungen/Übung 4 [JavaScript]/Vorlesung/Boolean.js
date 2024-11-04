var x = true;
console.log( typeof x ); // "boolean"
x = 1;
if ( x ) console.log( "1 is truthy" );
x = null;
if ( !x ) console.log( "null is falsy" );
x = undefined;
if ( !x ) console.log( "undefined is falsy" );
x = undefined;
if ( x || ( x = 3 ) ) console.log( x ); // 3