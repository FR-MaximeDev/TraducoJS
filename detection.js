import { browser, api } from './config.js';

let language;

// if api = 1
if (api == 1) {
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      fetch(`https://freegeoip.app/json/${data.ip}`)
        .then(response => response.json())
        .then(data => {
          language = data.language;
          console.log(`La langue détectée est ${language}`);
        })
        .catch(error => {
          console.error(`Erreur lors de la récupération des informations de géolocalisation : ${error}`);
        });
    })
    .catch(error => {
      console.error(`Erreur lors de la récupération de l'adresse IP : ${error}`);
    });
}

// if browser = 1
if (browser == 1) {
  language = navigator.language.split('-')[0];
  console.log(`La langue détectée est ${language}`);
}

export { language };
