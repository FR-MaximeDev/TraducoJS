import { language } from './detection.js';

// Récupérer le contenu du fichier JSON
fetch('./translation/' +language + '.json')
  .then(response => response.json())
  .then(data => {
    // Parcourir les propriétés de l'objet JSON
    for (const [key, value] of Object.entries(data)) {
      // Créer une variable à partir du nom de la propriété
      window[key] = value;
    
    }
    console.log(title);
  })
  .catch(error => console.error(`Erreur lors de la récupération du fichier JSON : ${error}`));


