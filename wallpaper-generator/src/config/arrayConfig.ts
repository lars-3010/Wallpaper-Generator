import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { getRandomSymbol } from './symbolConfig';

export interface SymbolPosition {
  symbol: IconDefinition;
  position: { x: number; y: number };
}

export interface ArrayConfig {
  numRows: number;
  numCols: number;
  symbolSpacing: number;
}

export function createSymbolArray(config: ArrayConfig): SymbolPosition[][] {
  const { numRows, numCols, symbolSpacing } = config;
  const symbolArray: SymbolPosition[][] = [];

  for (let row = 0; row < numRows; row++) {
    symbolArray[row] = [];
    for (let col = 0; col < numCols; col++) {
      const symbol = getRandomSymbol();
      const position = {
        x: col * symbolSpacing,
        y: row * symbolSpacing
      };
      symbolArray[row][col] = { symbol, position };
    }
  }

  return symbolArray;
}