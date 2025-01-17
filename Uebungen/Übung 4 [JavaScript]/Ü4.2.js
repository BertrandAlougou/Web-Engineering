/*
Schreiben Sie die Prototypen Person und Auto in JavaScript, sodass jede Person weiß,
welche Autos sie besitzt. Schreiben Sie eine Funktion conflict(),
die feststellt, ob ein Auto von mehr als einer Person besessen wird.
*/


// Prototypen Person und Auto

// Konstruktor für den Person-Prototyp
function Person (name) {
this.name = name;
this.autos = []; // Eine Liste der Autos, die die Person besitzt
}

// Konstruktor für den Auto-Prototyp
function Auto (modell){
this.modell = modell;
this.besitzer = null; // Das Auto hat anfangs keinen Besitzer
}

// Methode, um ein Auto einer Person hinzuzufügen

Person.prototype.addAuto = function (auto){
    if(auto.besitzer) {
        console.log(`Das Auto ${auto.modell} gehört bereits ${auto.besitzer.name}.`);
    }else{
        auto.besitzer = this;   // Setzt die aktuelle Person als Besitzer des Autos
        this.autos.push(auto); // Fügt das Auto zur Besitzliste der Person hinzu
    }
};

//Funktion, um zu prüfen, ob ein Auto mehreren Personen gehört
function conflict(){
const autoMap = new Map();
for (const person of arguments){
    for (const auto of person.autos){
        if (autoMap.has(auto)){
            return `Konflikt: Das Auto ${auto.modell} wird von mehr als einer Person besessen.`;
        }
        autoMap.set(auto, person);
    }
}
return "Kein Konflikt: Jedes Auto hat nur einen Besitzer.";
}


// Beispiel
const person1 = new Person("Alice");
const person2 = new Person("Bob");

const auto1 = new Auto("BMW");
const auto2 = new Auto("Audi");

// Autos zu den Personen hinzufügen
person1.addAuto(auto1);
person2.addAuto(auto2);
person2.addAuto(auto1); // Versuch, dasselbe Auto einem anderen Besitzer hinzuzufügen

// Konfliktprüfung
console.log(conflict(person1, person2)); // Erwartet: Konflikt
