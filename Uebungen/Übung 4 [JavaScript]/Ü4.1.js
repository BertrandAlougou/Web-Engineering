/*
1. Eine Funktion identity(), die ein Argument als Parameter
 entgegennimmt und dieses als Ergebnis zurückgibt.
 */

function identity( input){
    return input;
}

//console.log(identity('Hello World!'));

/*
2. Eine Funktion identity_function(), die ein Argument als Parameter
 entgegennimmt und eine Funktion zurückgibt, die dieses Argument
  zurückgibt.
 */

function  identity_function ( input ){
    return function (){
        return input;
    };
}

console.log(identity_function(4)());


/*
3. Zwei binäre Funktionen add und mul, die Summe und Produkt berechnen.
 */

function add(x,y){
    return x + y;
}


function  mul(x,y){
    return x * y;
}

//Beispielaufruf:
console.log(add(2, 3)); // Erwartet: 5
console.log(mul(2, 3)); // Erwartet: 6


/*
4. Eine Addierer-Funktion addf(), so dass addf(x)(y) genau x + y zurückgibt.
 (Es haben also zwei Funktionsaufrufe zu erfolgen.
 addf(x) liefert eine Funktion, die auf y angewandt wird.)
 */

function addf( x ){
    return function (y){
        return x + y;
    };
}
console.log(addf(1)(2));

/*
5. Eine Funktion applyf(), die aus einer binären Funktion wie add(x,y) eine Funktion addf berechnet, die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. addf = applyf(add); addf(x)(y) soll add(x,y) liefern.
 Entsprechend applyf(mul)(5)(6) soll 30 liefern, wenn mul die binäre Multiplikation ist.
 */

function applyf( binaryFunc ){
    return function (x){
        return function (y){
            return binaryFunc(x, y);
        }
    }
}

//Beispielaufrufe
const addFunction = applyf(add);
console.log(addFunction(2)(3));
const multiplyFunction = applyf(mul);
console.log(multiplyFunction(5)(6));