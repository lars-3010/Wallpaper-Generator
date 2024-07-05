import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const icon: IconDefinition = faHeart;

const width = 100;
const height = 100;
const angle = 100;

// Create a canvas and get the context
const canvas = document.createElement('canvas');
canvas.width = width;
canvas.height = height;
const ctx = canvas.getContext('2d');

// Error handling: Check if the context was successfully retrieved
if (!ctx) {
    throw new Error('Failed to get canvas context');
}

// Translate to the center, rotate, then translate back
ctx.translate(width / 2, height / 2);
ctx.rotate(angle * Math.PI / 180);
ctx.translate(-width / 2, -height / 2);

// Error handling: Check if the image is loaded before drawing it
if (!image) {
    throw new Error('Image not loaded');
}

// Draw the image on the canvas
ctx.drawImage(image, 0, 0, width, height);

// Rotate the wallpaper
function rotateWallpaper(wallpaper: any[][]): any[][] {
    if (!Array.isArray(wallpaper) || !Array.isArray(wallpaper[0])) {
        throw new Error('Invalid wallpaper array');
    }
    const rotatedWallpaper = [];
    const numRows = wallpaper.length;
    const numCols = wallpaper[0].length;
  
    for (let col = 0; col < numCols; col++) {
        rotatedWallpaper[col] = [];
        for (let row = 0; row < numRows; row++) {
            rotatedWallpaper[col][row] = wallpaper[row][col];
        }
    }
    return rotatedWallpaper;
}

const rotatedWallpaper = rotateWallpaper(symbolArray);

export const symbols: IconDefinition[] = [faHeart];
export { rotateWallpaper };