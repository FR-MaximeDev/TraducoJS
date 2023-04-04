
# TraducoJS

A basic translation system for javascript, for your website


## Documentation

**config.js** :

If browser is enabled, language detection will be based on browser language

otherwise, if API is enabled, it will use the api from https://api.ipify.org/ and therefore base the detection on the ip




## Installation

upload the files to your project. add your translation. After adding the text in the translation files ( /translation/fr.json for example ), add this in all the HTML files of your website: (read the comments to understand how to translate your site web)

```javascript
<script type="module">
import { language } from './detection.js';
fetch('./translation/' +language + '.json')
  .then(response => response.json())
  .then(data => {
    for (const [key, value] of Object.entries(data)) {
      window[key] = value;
    }
  
  // add here the tags you want to translate :
  // exemple : document.querySelector('title').textContent = titlehead;
  // 'title' = <title>
  // titlehead = "titlehead" in langue config (exemple fr.json ligne 2) 

  })
  .catch(error => console.error(`Erreur lors de la récupération du fichier JSON : ${error}`));
</script>
```




you can create files for other languages, for example, if you want to translate for spain, simply create an "es.json" file with the other json files, and use the same structure of the json files. You just need to create the json file, no other configuration is needed.



    
## Roadmap

- add a default language


