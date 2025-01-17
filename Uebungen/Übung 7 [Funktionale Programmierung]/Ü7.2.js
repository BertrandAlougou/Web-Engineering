// Schritt 1: Stoppwort-Liste (Beispiele für deutsche Stoppwörter)

// Importiere die deutsche Stoppwort-Liste
const stopwords = require('stopwords-de'); // Enthält die deutsche Stoppwort-Liste

// Schritt 2: Eingabetext (Plagiatsresolution)
const text = `
  Plagiatsresolution und -maßnahmen
Resolution zum akademischen Ethos und zu den akademischen Standards

In guter Tradition und anlässlich der öffentlichen Diskussion zum Plagiatsthema sieht sich die Hochschule Bonn-Rhein-Sieg in der Pflicht, ihre Position klar und eindeutig zu bekunden und hochschulweit Maßnahmen einzuleiten.

1. Die Hochschule Bonn-Rhein-Sieg bekennt sich mit dieser Resolution öffentlich zum akademischen Ethos und den akademischen Standards.

2. Die Hochschule Bonn-Rhein-Sieg sieht sich verpflichtet, alle Studierende frühzeitig im Studium sowohl über den wissenschaftlichen Auftrag und den akademischen Ethos als auch über die Konsequenzen seiner Missachtung aufzuklären. In allen Studiengängen wird intensiv in die wissenschaftliche Arbeits- und Denkweise eingeführt und über den akademischen Ethos und die akademischen Standards klar und eindeutig aufgeklärt.

3. In einer Selbstverpflichtungserklärung zum akademischen Ethos geben alle Studierende der Hochschule Bonn-Rhein-Sieg spätestens gegen Ende des ersten Studienjahres zum Ausdruck, dass sie sich von den Dozentinnen und Dozenten der Hochschule Bonn-Rhein-Sieg hinreichend über den akademischen Ethos und die akademischen Standards aufgeklärt sind und diese beachten werden.

Der Senat befürwortete in seiner Sitzung am 03.05.2012 die Resolution in der o.g. Fassung.

Eckpunkte zur Plagiatsprüfung

Der Senat empfiehlt:

1. Die Aufklärung und das Bekenntnis zum akademischen Ethos und den akademischen Standards muss fester Bestandteil aller Curricula aller Studiengänge im ersten Studienjahr sein. Alle Curricula aller Studiengänge werden darauf hin geprüft und ggfs. ergänzt.

2. Alle Abschlussarbeiten werden auf Plagiate geprüft.

3. Alle Abschlussarbeiten mit Plagiaten werden grundsätzlich als Fehlversuch gewertet.

4. Die Entscheidung, ob die Arbeit Plagiate enthält, liegt zuerst bei den Gutachterinnen und Gutachtern. Der Nachweis in einem Gutachten reicht.

5. Alle Abschlussarbeiten werden grundsätzlich auch in elektronischer Form (PDF-Format und Originalformat wie Word, OpenOffice, ...) eingereicht.

6. Alle Abschlussarbeiten ohne Sperrvermerk werden einem vom Fachbereich definierten Kreis zur Einsicht zur Verfügung gestellt. Alle Abschlussarbeiten sollten nach Möglichkeit grundsätzlich zur Veröffentlichung freigegeben werden. Wissenschaft zielt auf Veröffentlichung ab. Nichtveröffentlichung sollte nur in begründeten und durch den Prüfungsausschuss genehmigten Ausnahmefällen geschehen.

7. Im Bereich von Seminar-, Hausarbeiten und Praktikumsberichten behält sich die Hochschule stichprobenartige Plagiatsprüfungen vor.

Selbstverpflichtungserklärung der Studierenden:

Eine akademische Arbeit stellt eine individuelle Leistung dar, die eigenständig und allein auf Basis der im Literaturverzeichnis angegebenen Quellen erstellt wurde und in der alle Zitate als solche gekennzeichnet sind.

"Ich erkläre hiermit, dass ich den akademischen Ehrencodex kenne und über die Folgen einer Missachtung oder Verletzung aufgeklärt worden bin."
`;

// Schritt 3: Funktion zur Bereinigung und Tokenisierung des Textes
function tokenizeAndClean(text) {
    return text
        .toLowerCase() // Kleinbuchstaben
        .replace(/<[^>]*>/g, '') // HTML-Tags entfernen
        .replace(/[^a-zäöüß\s]/g, '') // Sonderzeichen entfernen
        .split(/\s+/); // Text in Wörter aufteilen
}

// Schritt 4: Hauptfunktion zur Textanalyse
function analyzeText(text, stopwords) {
    const words = tokenizeAndClean(text);

    // Filter: Entferne Stoppwörter und leere Einträge
    const filteredWords = words.filter(word => !stopwords.includes(word) && word.length > 0);

    // Reduce: Zähle die Häufigkeit jedes Wortes
    const wordFrequencies = filteredWords.reduce((freq, word) => {
        freq[word] = (freq[word] || 0) + 1; // Häufigkeit inkrementieren
        return freq;
    }, {});

    // Sortiere nach Häufigkeit und wähle die Top 3 Begriffe
    const topWords = Object.entries(wordFrequencies)
        .sort(([, freqA], [, freqB]) => freqB - freqA) // Nach Frequenz absteigend sortieren
        .slice(0, 3) // Top 3 auswählen
        .map(([word, freq]) => ({ word, freq })); // Ergebnis formatieren

    return topWords;
}

// Schritt 5: Analyse starten und Ergebnis speichern
const result = analyzeText(text, stopwords);

// Schritt 6: Ergebnis anzeigen
console.log("Die 3 häufigsten Begriffe sind:");
result.forEach(({ word, freq }, index) => {
    console.log(`${index + 1}. ${word} (Häufigkeit: ${freq})`);
});
