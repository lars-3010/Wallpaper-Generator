import { library } from '@fortawesome/fontawesome-svg-core'

const icons = [
    { prefix: 'fas', iconName: 'camera', width: 20, height: 20, angle: 45 },
    { prefix: 'fas', iconName: 'car', width: 25, height: 25, angle: 90 }
  ];
  
  const formattedIcons = icons.map(iconProps => {
    const { width, height, angle, ...rest } = iconProps;
    const iconInstance = icon({ ...rest });
    iconInstance.width = width;
    iconInstance.height = height;
    iconInstance.icon[4] = angle;
    return iconInstance;
  });
  
  // Liste von Icons mit angepassten Eigenschaften
// Erstellen einer Funktion, um die Symbole zur Bibliothek hinzuzufügen


function getRandomIcon() {
  const randomIndex = Math.floor(Math.random() * icons.length);
  return icons[randomIndex];
}





// Du musst die Funktion importieren, die dem Namen jedes Symbols entspricht
function addIcons() {
  for (const icon of icons) {

    // Extrahieren des Präfixes und des Namens des Symbols
    const [prefix, name] = icon.split('-');

    // Importieren der Funktion dynamisch
    import(`@fortawesome/free-solid-svg-icons/${prefix}/${name}`).then(
      (module) => {
        // Hinzufügen des Symbols zur Bibliothek
        library.add(module.default);
      }
    );
  }
}

// Aufrufen der Funktion
addIcons();


// Exportieren der Liste von Symbolen
export default icons;
export { icons };