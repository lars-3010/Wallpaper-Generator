const symbolArray = []; // Das 2D-Array für Symbole und Positionen

// Annahme: numRows und numCols sind die Anzahl der Reihen und Spalten im Array
for (let row = 0; row < numRows; row++) {
  symbolArray[row] = [];
  for (let col = 0; col < numCols; col++) {
    const symbol = getRandomSymbol(); // Funktion, um ein zufälliges Symbol auszuwählen
    const position = calculatePosition(row, col); // Funktion, um die Position basierend auf Abstand zu berechnen
    symbolArray[row][col] = { symbol, position };
  }
}