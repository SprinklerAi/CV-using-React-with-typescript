import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const i18n = (() => {
  i18next.use(initReactI18next).init({
    resources: {
      en: {
        translation: {
          card: {
            KunnatApp: {
              header: "Kunnat App",
              body: "An Android application about cities."
            },
            WeatherApp: {
              header: "Weather App",
              body: "Weather forecast website."
            },
            DistributedSystems: {
              header: "Distributed Systems",
              body: "CLI chat service that uses JWT."
            },
            DatabaseManagement: {
              header: "Database Management",
              body: "Database with views about movies."
            }
          }
        }
      },
      fi: {
        translation: {
          card: {
            KunnatApp: {
              header: "Kunnat‑sovellus",
              body: "Android‑sovellus, joka näyttää tietoa Suomen kunnista StatFi‑rajapinnan kautta."
            },
            WeatherApp: {
              header: "Sääsovellus",
              body: "Sivusto, joka näyttää säätiedot haetun paikkakunnan tai geopaikan perusteella. Käyttää OpenWeather‑rajapintaa."
            },
            DistributedSystems: {
              header: "Distribuoidut järjestelmät",
              body: "CLI‑chatpalvelu, joka käyttää JSON‑tunnistautumista."
            },
            DatabaseManagement: {
              header: "Tietokannan hallinta",
              body: "Rakensin pienen tietokannan, joka sisälsi elokuva‑dataa kykyjeni esittelyyn. Sisälsi myös näkymiä."
            }
          }
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

  return i18next;
})();

export default i18n;
