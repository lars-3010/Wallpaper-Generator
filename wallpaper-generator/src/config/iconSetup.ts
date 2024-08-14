import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faCamera, 
  faCar, 
  faHeart, 
  faStar, 
  faMusic,
  faTree,
  faCloud,
  faCoffee,
  faBook,
  faBicycle
} from '@fortawesome/free-solid-svg-icons';

export const setupIcons = () => {
  library.add(
    faCamera,
    faCar,
    faHeart,
    faStar,
    faMusic,
    faTree,
    faCloud,
    faCoffee,
    faBook,
    faBicycle
  );
};

export const availableIcons = [
  faCamera,
  faCar,
  faHeart,
  faStar,
  faMusic,
  faTree,
  faCloud,
  faCoffee,
  faBook,
  faBicycle
];