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
              body: "An Android application about municipalities of Finland.",
              description: "Kunnat is an Android application that provides information about Finnish municipalities using the StatFi API. It offers details such as population, area, and other relevant data for each municipality. It also integrates Google Maps. It has search history functionality, dark/light mode, english and finnish localisation."

            },
            WeatherApp: {
              header: "Weather Forecast Website",
              body: "Weather forecast website.",
              description: "Website is built using plain JavaScript and HTML/CSS. It has rain map imported from other libraries. It is little rought around the edges. uses OpenWeather API to fetch weather data based on searched location or geolocation."
            },
            DistributedSystems: {
              header: "Distributed Systems",
              body: "CLI chat service that uses JWT.",
              description: "A modular microservice-based system built with Python, gRPC, and REST. It supports user registration, authentication with JWT, real-time messaging, and file upload/download. The system demonstrates distributed system principles including stateless communication, interoperability, and fault isolation using Docker containers and MongoDB as a shared data store."
            },
            DatabaseManagement: {
              header: "Database Management",
              body: "Database with views about movies.",
              description: "Database with views about movies. Dataset is made up of randomly selected movies, and views are created to give user cohesive information based on that data."
            },
            CurrentProject: {
              header: "React portfolio",
              body: "Showcase of my abioities in React and Typescript",
              description: "I started learning React on par with TypeScript, and this website is the result of that ongoign process. The website is built using React and TypeScript, with Material-UI for styling and layout. It features a responsive design, interactive components, and showcases various projects I've worked on, demonstrating my skills in front-end development. I plan to expand this website further throughout my carrier."
            }
          }
        }
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

  return i18next;
})();

export default i18n;
