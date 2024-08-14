import { PlacedSymbol } from './symbolPlacement';

export function rotateWallpaper(symbols: ReadonlyArray<PlacedSymbol>, angle: number, width: number, height: number): ReadonlyArray<PlacedSymbol> {
  const centerX = width / 2;
  const centerY = height / 2;
  const radians = (angle * Math.PI) / 180;

  return symbols.map(symbol => {
    const { x, y } = symbol;
    
    // Translate to origin
    const translatedX = x - centerX;
    const translatedY = y - centerY;

    // Rotate
    const rotatedX = translatedX * Math.cos(radians) - translatedY * Math.sin(radians);
    const rotatedY = translatedX * Math.sin(radians) + translatedY * Math.cos(radians);

    // Translate back
    const newX = rotatedX + centerX;
    const newY = rotatedY + centerY;

    return {
      ...symbol,
      x: newX,
      y: newY
    };
  });
}

export function flipWallpaper(symbols: ReadonlyArray<PlacedSymbol>, flipHorizontal: boolean, flipVertical: boolean, width: number, height: number): ReadonlyArray<PlacedSymbol> {
  return symbols.map(symbol => {
    let { x, y } = symbol;

    if (flipHorizontal) {
      x = width - x;
    }

    if (flipVertical) {
      y = height - y;
    }

    return {
      ...symbol,
      x,
      y
    };
  });
}