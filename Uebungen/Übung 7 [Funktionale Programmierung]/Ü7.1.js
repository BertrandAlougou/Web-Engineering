/** Funktion curry() */

function add(x,y) {return x +y;}

function curry (binaryFunc, argument1){

    return function (argument2){
        return binaryFunc(argument1, argument2);
    };
}

add3 = curry(add, 3);
console.log(add3(7));



/** inc-Funktion */

// Variante 1: Mit curry
const inc1 = curry(add, 1);
console.log(inc1(5)); // 6

// Variante 2: Mit addf (falls definiert)
const addf = (a) => (b) => a + b;
const inc2 = addf(1);
console.log(inc2(5)); // 6

// Variante 3: Mit applyf (falls definiert)
const applyf = (func) => (a) => (b) => func(a, b);
const inc3 = applyf(add)(1);
console.log(inc3(5)); // 6

/** methodize */

function methodize(func) {
    return function(y) {
        return func(this, y);
    };
}

// Beispiel
Number.prototype.add = methodize(add);
console.log((3).add(4)); // 7


/** demethodize */

function demethodize(func) {
    return function(x, y) {
        return func.call(x, y);
    };
}

// Beispiel
const binaryAdd = demethodize(Number.prototype.add);
console.log(binaryAdd(5, 6)); // 11

/** twice */

function twice(func) {
    return function(x) {
        return func(x, x);
    };
}

// Beispiele
const double = twice(add);
console.log(double(11)); // 22

const square = twice(mul);
console.log(square(11)); // 121


/** composeu */

function composeu(f1, f2) {
    return function(x) {
        return f2(f1(x));
    };
}

// Beispiel
console.log(composeu(double, square)(3)); // 36

/** composeb */

function composeb(f1, f2) {
    return function(a, b, c) {
        return f2(f1(a, b), c);
    };
}

// Beispiel
console.log(composeb(add, mul)(2, 3, 5)); // 25


/** once */
function once(func) {
    let called = false;
    return function(...args) {
        if (called) throw new Error("Function can only be called once");
        called = true;
        return func(...args);
    };
}

// Beispiel
const add_once = once(add);
console.log(add_once(3, 4)); // 7
// add_once(3, 4); // Fehler

/** counterf */

function counterf(initial) {
    let count = initial;
    return {
        inc: () => ++count,
        dec: () => --count
    };
}

// Beispiel
const counter = counterf(10);
console.log(counter.inc()); // 11
console.log(counter.dec()); // 10

/** revocable */

function revocable(func) {
    let revoked = false;
    return {
        invoke: (...args) => {
            if (revoked) throw new Error("Function is revoked");
            return func(...args);
        },
        revoke: () => {
            revoked = true;
        }
    };
}

// Beispiel
const temp = revocable(alert);
temp.invoke(7); // alert(7)
temp.revoke();
// temp.invoke(8); // Fehler


/** Array Wrapper */

function vector() {
    const data = [];
    return {
        get: (index) => data[index],
        store: (index, value) => { data[index] = value; },
        append: (value) => { data.push(value); }
    };
}

// Beispiel
const my_vector = vector();
my_vector.append(7);
my_vector.store(1, 8);
console.log(my_vector.get(0)); // 7
console.log(my_vector.get(1)); // 8
