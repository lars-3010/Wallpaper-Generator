interface Cluster {
    x: number;
    y: number;
    intensity: number;
}

export class SymbolPlacement {
    private symbols: string[];
    private placement: string[][];

    constructor(symbols: string[], width: number, height: number) {
        this.symbols = symbols;
        this.placement = Array.from({length: height}, () => Array.from({length: width}, () => null));
    }

    // Places symbols on the grid
    placeSymbols(): void {
        for (let y = 0; y < this.placement.length; y++) {
            for (let x = 0; x < this.placement[y].length; x++) {
                const symbol = this.getRandomSymbol();
                this.placement[y][x] = symbol;
            }
        }
    }

    // Returns a random symbol from the symbol set
    getRandomSymbol(): string {
        const randomIndex = Math.floor(Math.random() * this.symbols.length);
        return this.symbols[randomIndex];
    }

    // Returns the current placement grid
    getPlacement(): string[][] {
        return this.placement;
    }

    // Places symbols in a cluster
    placeSymbolsInCluster(cluster: Cluster, symbolRadius: number): void {
        const numSymbols = Math.round(cluster.intensity);
        for (let i = 0; i < numSymbols; i++) {
            const x = this.gaussianRandom(cluster.x, symbolRadius);
            const y = this.gaussianRandom(cluster.y, symbolRadius);
            const symbol = this.getRandomSymbol();
            if (x >= 0 && x < this.placement[0].length && y >= 0 && y < this.placement.length) {
                this.placement[y][x] = symbol;
            }
        }
    }

    // Generates a normally distributed random number
    gaussianRandom(mean: number, stdDev: number, iteration = 0): number {
        let random1 = Math.random();
        let random2 = Math.random();
        let gaussianRandom = Math.sqrt(-2.0 * Math.log(random1)) * Math.cos(2.0 * Math.PI * random2);
        gaussianRandom = gaussianRandom / 10.0 + 0.5;
        if (gaussianRandom < 0 || gaussianRandom > 1) {
            return this.gaussianRandom(mean, stdDev, iteration + 1);
        }
        gaussianRandom *= stdDev;
        gaussianRandom += mean;
        return gaussianRandom;
    }
}