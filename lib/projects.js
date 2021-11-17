const imagesContext = require.context("../images/project-previews", false);
const images = {};

imagesContext.keys().forEach((key) => {
  let name = key;
  name = key.split("/")[1];
  name = name.split(".")[0];
  images[name] = imagesContext(key);
});

const projects = {
  "Content Pages": [
    {
      name: "Survey Form",
      image: images["survey-form"],
      link: "https://github.com/Prince-Thind/survey-form",
      live_link: "https://prince-thind.github.io/survey-form/",
    },
    {
      name: "Product Landing Page",
      image: images["product-landing-page"],
      link: "https://github.com/Prince-Thind/product-landing-page",
      live_link: "https://prince-thind.github.io/product-landing-page/",
    },
    {
      name: "Techinical Documentation Page",
      image: images["technical-documentation-page"],
      link: "https://github.com/Prince-Thind/technical-documentation-page",
      live_link: "https://prince-thind.github.io/technical-documentation-page/",
    },
    {
      name: "Tribute Page",
      image: images["tribute-page"],
      link: "https://github.com/Prince-Thind/tribute-page",
      live_link: "https://prince-thind.github.io/tribute-page/",
    },
    {
      name: "Google Homepage",
      image: images["google-homepage"],
      link: "https://github.com/Prince-Thind/google-homepage",
      live_link: "https://prince-thind.github.io/google-homepage/",
    },
  ],
  "Vanilla JS": [
    {
      name: "Tic Tac Toe",
      image: images["tic-tac-toe"],
      link: "https://github.com/Prince-Thind/tic-tac-toe",
      live_link: "https://prince-thind.github.io/tic-tac-toe/",
    },

    {
      name: "Constellations",
      image: images["constellation-generator"],
      link: "https://github.com/Prince-Thind/constellation-generator",
      live_link: "https://prince-thind.github.io/constellation-generator/",
    },
    {
      name: "Rock Paper Scissors",
      image: images["rock-paper-scissors"],
      link: "https://github.com/Prince-Thind/rock-paper-scissors",
      live_link: "https://prince-thind.github.io/rock-paper-scissors/",
    },
    {
      name: "BattleShip",
      image: images["battleship"],
      link: "https://github.com/Prince-Thind/battleship",
      live_link: "https://prince-thind.github.io/battleship/",
    },

    {
      name: "Floyd Warshall Algorithm",
      image: images["unfinished"],
      link: "https://github.com/Prince-Thind/floyd-warshall-algorithm",
      live_link: "https://prince-thind.github.io/floyd-warshall-algorithm/",
    },

    {
      name: "Etch a Sketch",
      image: images["unfinished"],
      link: "https://github.com/Prince-Thind/etch-a-sketch",
      live_link: "https://prince-thind.github.io/etch-a-sketch/",
    },
    {
      name: "calculator",
      image: images["calculator"],
      link: "https://github.com/Prince-Thind/calculator",
      live_link: "https://prince-thind.github.io/calculator/",
    },

    {
      name: "Restaurant Page",
      image: images["unfinished"],
      link: "https://github.com/Prince-Thind/restaurant-page",
      live_link: "https://prince-thind.github.io/restaurant-page/",
    },
  ],
  "React/Next": [
    {
      name: "To-Do app",
      image: images["unfinished"],
      link: "https://github.com/Prince-Thind/todo-list",
      live_link: "https://prince-thind.github.io/todo-list/",
    },
    {
      name: "Shopping App",
      image: images["shopping-app-react"],
      link: "https://github.com/Prince-Thind/shopping-app-react",
      live_link: "https://prince-thind.github.io/shopping-app-react/#/",
    },
    {
      name: "Memory Game",
      image: images["memory-game-react"],
      link: "https://github.com/Prince-Thind/memory-card-react",
      live_link: "https://prince-thind.github.io/memory-card-react/",
    },
  ],
  ExpressJS: [
    {
      name: "Grocery Store",
      image: images["grocery-shop"],
      link: "https://github.com/Prince-Thind/grocery-store",
      live_link: "https://whispering-cliffs-99890.herokuapp.com/",
    },
    {
      name: "Express Library",
      image: images["express-library"],
      link: "https://github.com/Prince-Thind/express-library",
      live_link: "https://stark-reaches-37215.herokuapp.com/catalog",
    },
    {
      name: "Members Only",
      image: images["unfinished"],
      link: "https://github.com/Prince-Thind/members-only",
      live_link: "https://gentle-shore-23550.herokuapp.com/",
    },
  ],
  "Vanity Projects": [
    {
      name: "Beating Heart",
      image: images["beating-heart"],
      link: "https://github.com/Prince-Thind/beating-heart",
      live_link: "https://prince-thind.github.io/beating-heart/",
    },

    {
      name: "Soviet Flag",
      image: images["soviet-flag"],
      link: "https://github.com/Prince-Thind/soviet-flag",
      live_link: "https://prince-thind.github.io/soviet-flag/",
    },
    {
      name: "Newton's Disc",
      image: images["unfinished"],
      link: "https://github.com/Prince-Thind/newtons-disc",
      live_link: "https://prince-thind.github.io/newtons-disc/",
    },
  ],
};

export default projects;
