function topsort(dependencies) {

    const graph = new Map();
    const indegree = new Map();

    // 1. Initialisiere den Graphen und die Indegree Map
    dependencies.forEach(([pre, task]) => {
        if (!graph.has(pre)) graph.set(pre, []);
        if (!graph.has(task)) graph.set(task, []);
        graph.get(pre).push(task);

        // Zähle Indegrees
        indegree.set(task, (indegree.get(task) || 0) + 1);
        if (!indegree.has(pre)) indegree.set(pre, 0);
    });

    // 2. Finde alle Knoten mit Indegree 0 und füge sie in die Warteschlange ein
    const queue = [];
    indegree.forEach((count, task) => {
        if (count === 0) queue.push(task);
    });

    // 3. Berechne die topologische Sortierung
    const sorted = [];
    while (queue.length > 0) {
        const task = queue.shift();
        sorted.push(task);

        if (graph.has(task)) {
            for (const neighbor of graph.get(task)) {
                indegree.set(neighbor, indegree.get(neighbor) - 1);
                if (indegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }
    }

    // 4. Überprüfe, ob eine Sortierung möglich ist (d.h., ob alle Tasks sortiert wurden)
    if (sorted.length !== indegree.size) {
        throw new Error("Zyklus im Graphen gefunden, keine topologische Sortierung möglich");
    }

    return sorted;
}

// Tests
try {
    // Beispiel mit Abhängigkeiten
    console.assert(
        JSON.stringify(topsort([["schlafen","studieren"], ["essen","studieren"], ["studieren","prüfen"]])) ===
        JSON.stringify(["schlafen", "essen", "studieren", "prüfen"])
    );

    // Weitere Tests
    console.assert(
        JSON.stringify(topsort([["A", "B"], ["B", "C"], ["A", "C"]])) === JSON.stringify(["A", "B", "C"])
    );

    console.assert(
        JSON.stringify(topsort([["A", "B"], ["C", "D"], ["B", "D"], ["A", "C"]])) === JSON.stringify(["A", "C", "B", "D"])
    );

    console.assert(
        JSON.stringify(topsort([["task1", "task2"], ["task2", "task3"], ["task3", "task4"]])) === JSON.stringify(["task1", "task2", "task3", "task4"])
    );

    console.assert(
        JSON.stringify(topsort([["x", "y"], ["y", "z"], ["x", "z"]])) === JSON.stringify(["x", "y", "z"])
    );

    console.log("Alle Tests bestanden!");
} catch (error) {
    console.error("Test fehlgeschlagen:", error);
}