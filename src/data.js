 
import RestCountries from "./assets/portfolioImages/restcountries.jpg";
//import SpaceTourism from "./assets/portfolioImages/spacetourism.jpg";
import Advice from "./assets/portfolioImages/advice.jpg";
//import Page from "./assets/portfolioImages/intropage.jpg";
//import AWS from "./assets/portfolioImages/s3.PNG";
import Todo from "./assets/portfolioImages/todo.jpg"
import Parlour from "./assets/portfolioImages/Parlour.png";
import Food from "./assets/portfolioImages/Food.png";

// in progress projects

import Servista from './assets/portfolioImages/servista.PNG'
import landingPage from './assets/portfolioImages/url.jpg'
 
const ProjectsData = [
   
  {
    id: "rest-countries",
    img: RestCountries,
    name: "REST Countires API",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://rest-countries-api-with-react-js.netlify.app/",
    source: "https://github.com/MuhammadYeasinArafath/rest-countries-api-with-react-js",
    description:  
        "Responsive website which integrates with the REST Countries API to pull country data. You can view the list of all countries and find one via search or by filtering regions. Individual country page, enables you to see further details about the country like border countries.",
  },

  {
    id: "space-tourism",
    img: Parlour,
    name: "React-JS-Parlour-Animation-Website-with-Framer-Motion",
    stack: ["< React.js/ >", "< CSS3 />", "< HTML5 />", "< Framer Motion />"],
    live: "https://react-js-parlour-animation-website.netlify.app/",
    source: "https://github.com/MuhammadYeasinArafath/React-JS-Parlour-Animation-Website-with-Framer-Motion",
    description:  
        "Full responsive Parlour Website. It's a Figma design conversion to react. Goal was to get it looking as close to the design as possible.",
  },

  {
    id: "advice-api",
    img: Advice,
    name: "Advice Slip Json API Fetch & Display",
    stack: ["< React.js/ >", "< CSS3 />", "< HTML5 />"],
    live: "https://advice-slip-json-api-fetch-display.netlify.app/",
    source: "https://github.com/MuhammadYeasinArafath/advice-slip-json-api-fetch-display",
    description:  
        "This advice generator app using the Advice Slip API. A small app to practice React JS API Fetch and CSS3.",
  },

  {
    id: "todo",
    img: Todo,
    name: "JavaScript Todo App",
    stack: ["< JavaScript />", "< HTML5 />", "< CSS3 />"],
    live: "https://muhammadyeasinarafath.github.io/to-do-list-project-with-js/",
    source: "https://github.com/MuhammadYeasinArafath/to-do-list-project-with-js",
    description:  
        "Responsive JS todo app . Enables users to add, delete and clear day-to-day tasks. It has user-friendly interface and navigation.",
  },

  {
    id: "food-api",
    img: Food,
    name: "Food api fetch & display",
    stack: ["< javascript />", "< HTML5 />", "< CSS3 />"],
    live: "https://muhammadyeasinarafath.github.io/food-api-fetch-display-Advance-/",
    source: "https://github.com/MuhammadYeasinArafath/food-api-fetch-display-Advance-",
    description:  
        "This challenge tested my skills to fetch an API, a common pattern on larger sites. It also has some nice basic layout challenge.",
  },  
   
];

const InprogressProjectsData = [
   
  {
    id: "servista",
    img: Servista,
    name: "Servista",
    stack: ["< Flutter />", "< NodeJS />", "< Blockchain />"],
    live: "",
    source: "https://github.com/MuhammadYeasinArafath",
    description:  
        "A cross-platform app that connects local service providers with customers. The goal is to maximize the income of local professionals while ensuring the security and comfort of customers",
  },

  {
    id: "url-short",
    img: landingPage,
    name: "URL shortening API landing page",
    stack: ["< JavaScript />", "< NodeJS />"],
    live: "",
    source: "https://github.com/MuhammadYeasinArafath",
    description:  
        "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
  },

];

export default {ProjectsData, InprogressProjectsData};