import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCamera, faCar, faHeart, faStar, faMusic } from '@fortawesome/free-solid-svg-icons';

export interface IconConfig {
  readonly icon: IconDefinition;
  readonly width: number;
  readonly height: number;
  readonly angle: number;
}

const icons: ReadonlyArray<IconConfig> = [
  { icon: faCamera, width: 20, height: 20, angle: 45 },
  { icon: faCar, width: 25, height: 25, angle: 90 },
  { icon: faHeart, width: 22, height: 22, angle: 0 },
  { icon: faStar, width: 18, height: 18, angle: 60 },
  { icon: faMusic, width: 24, height: 24, angle: 30 }
];

export function addIconsToLibrary(): void {
  icons.forEach(({ icon }) => library.add(icon));
}

export function getRandomIcon(): IconDefinition {
  return icons[Math.floor(Math.random() * icons.length)].icon;
}

export function getRandomSymbol(): IconConfig {
  return icons[Math.floor(Math.random() * icons.length)];
}

addIconsToLibrary();

export default icons;