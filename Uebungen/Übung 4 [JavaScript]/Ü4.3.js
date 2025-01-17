// Funktion, um die ersten 2000 Fibonacci-Zahlen zu berechnen und auf der Konsole auszugeben
function fibonacci(n) {
    // Verwenden eines Caches, um bereits berechnete Werte zu speichern
    const cache = new Map();
    cache.set(0, 0n);
    cache.set(1, 1n);

    function fibHelper(k) {
        if (cache.has(k)) {
            return cache.get(k);
        }
        // Berechnen des neuen Wertes und Speichern im Cache
        const value = fibHelper(k - 1) + fibHelper(k - 2);
        cache.set(k, value);
        return value;
    }

    // Berechnen und Ausgeben der ersten n Fibonacci-Zahlen
    for (let i = 0; i < n; i++) {
        console.log(`Fibonacci(${i}) = ${fibHelper(i)}`);
    }

    return cache;
}

// Aufruf der Funktion für die ersten 2000 Fibonacci-Zahlen
const fibCache = fibonacci(2000);

// Finden der größten Fibonacci-Zahl, die als Number sicher gespeichert werden kann
const maxSafeInteger = Number.MAX_SAFE_INTEGER;
let maxSafeIndex = 0;
for (const [index, value] of fibCache) {
    if (value <= maxSafeInteger) {
        maxSafeIndex = index;
    } else {
        break;
    }
}
console.log(`Die größte Fibonacci-Zahl, die als Number sicher gespeichert werden kann, ist Fibonacci(${maxSafeIndex}) = ${fibCache.get(maxSafeIndex)}`);

// Finden der größten Fibonacci-Zahl, die als Number gespeichert werden kann
const maxNumber = Number.MAX_VALUE;
let maxIndex = 0;
for (const [index, value] of fibCache) {
    if (value <= maxNumber) {
        maxIndex = index;
    } else {
        break;
    }
}
console.log(`Die größte Fibonacci-Zahl, die als Number gespeichert werden kann, ist Fibonacci(${maxIndex}) = ${fibCache.get(maxIndex)}`);

// Optional: Finden der größten Fibonacci-Zahl, die als BigInt korrekt berechnet werden kann
let maxBigIntIndex = 1999; // Da wir bis zur 2000. Fibonacci-Zahl berechnen
console.log(`Die größte Fibonacci-Zahl, die korrekt mit BigInt berechnet wurde, ist Fibonacci(${maxBigIntIndex}) = ${fibCache.get(maxBigIntIndex)}`);
