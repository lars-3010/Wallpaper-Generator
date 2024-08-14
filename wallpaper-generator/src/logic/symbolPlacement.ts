import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Cluster } from '../config/clusterConfig';
import { getRandomSymbol } from '../config/symbolConfig';

export interface PlacedSymbol {
  readonly x: number;
  readonly y: number;
  readonly icon: IconDefinition;
  readonly size: number;
  readonly color: string;
}

export class SymbolPlacement {
  private readonly width: number;
  private readonly height: number;
  private symbols: PlacedSymbol[];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.symbols = [];
  }

  placeSymbolsInClusters(clusters: ReadonlyArray<Cluster>, clusterRadius: number, symbolsPerCluster: number): ReadonlyArray<PlacedSymbol> {
    clusters.forEach(cluster => {
      for (let i = 0; i < symbolsPerCluster; i++) {
        const symbol = this.createSymbolInCluster(cluster, clusterRadius);
        if (symbol) this.symbols.push(symbol);
      }
    });
    return this.symbols;
  }

  placeRandomSymbols(count: number): ReadonlyArray<PlacedSymbol> {
    for (let i = 0; i < count; i++) {
      const symbol = this.createRandomSymbol();
      this.symbols.push(symbol);
    }
    return this.symbols;
  }

  private createSymbolInCluster(cluster: Cluster, radius: number): PlacedSymbol | null {
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * radius * Math.sqrt(cluster.intensity);
    const x = cluster.x + distance * Math.cos(angle);
    const y = cluster.y + distance * Math.sin(angle);

    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      return this.createSymbol(x, y, cluster.intensity);
    }
    return null;
  }

  private createRandomSymbol(): PlacedSymbol {
    const x = Math.random() * this.width;
    const y = Math.random() * this.height;
    return this.createSymbol(x, y, 0.5);
  }

  private createSymbol(x: number, y: number, intensity: number): PlacedSymbol {
    const { icon } = getRandomSymbol();
    const size = 20 + Math.random() * 20 * intensity;
    const color = this.getRandomColor();
    return { x, y, icon, size, color };
  }

  private getRandomColor(): string {
    const colors = ['#F92672', '#A6E22E', '#FD971F', '#66D9EF', '#AE81FF'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  getSymbols(): ReadonlyArray<PlacedSymbol> {
    return this.symbols;
  }

  gaussianRandom(mean: number, stdDev: number): number {
    const u = 1 - Math.random();
    const v = Math.random();
    const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    return z * stdDev + mean;
  }
}