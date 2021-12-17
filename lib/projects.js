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
      sourceLink: "https://github.com/Prince-Thind/survey-form",
      imageLink: "https://prince-thind.github.io/survey-form/",
    },
    {
      name: "Product Landing Page",
      image: images["product-landing-page"],
      sourceLink: "https://github.com/Prince-Thind/product-landing-page",
      imageLink: "https://prince-thind.github.io/product-landing-page/",
    },
    {
      name: "Techinical Documentation Page",
      image: images["technical-documentation-page"],
      sourceLink: "https://github.com/Prince-Thind/technical-documentation-page",
      imageLink: "https://prince-thind.github.io/technical-documentation-page/",
    },
    {
      name: "Tribute Page",
      image: images["tribute-page"],
      sourceLink: "https://github.com/Prince-Thind/tribute-page",
      imageLink: "https://prince-thind.github.io/tribute-page/",
    },
    {
      name: "Google Homepage",
      image: images["google-homepage"],
      sourceLink: "https://github.com/Prince-Thind/google-homepage",
      imageLink: "https://prince-thind.github.io/google-homepage/",
    },
  ],
  "Vanilla JS": [
    {
      name: "Tic Tac Toe",
      image: images["tic-tac-toe"],
      sourceLink: "https://github.com/Prince-Thind/tic-tac-toe",
      imageLink: "https://prince-thind.github.io/tic-tac-toe/",
    },

    {
      name: "Constellations",
      image: images["constellation-generator"],
      sourceLink: "https://github.com/Prince-Thind/constellation-generator",
      imageLink: "https://prince-thind.github.io/constellation-generator/",
    },
    {
      name: "Rock Paper Scissors",
      image: images["rock-paper-scissors"],
      sourceLink: "https://github.com/Prince-Thind/rock-paper-scissors",
      imageLink: "https://prince-thind.github.io/rock-paper-scissors/",
    },
    {
      name: "BattleShip",
      image: images["battleship"],
      sourceLink: "https://github.com/Prince-Thind/battleship",
      imageLink: "https://prince-thind.github.io/battleship/",
    },

    {
      name: "Floyd Warshall Algorithm",
      image: images["floyd-warshall-algorithm"],
      sourceLink: "https://github.com/Prince-Thind/floyd-warshall-algorithm",
      imageLink: "https://prince-thind.github.io/floyd-warshall-algorithm/",
    },

    {
      name: "Etch a Sketch",
      image: images["etch-a-sketch"],
      sourceLink: "https://github.com/Prince-Thind/etch-a-sketch",
      imageLink: "https://prince-thind.github.io/etch-a-sketch/",
    },
    {
      name: "calculator",
      image: images["calculator"],
      sourceLink: "https://github.com/Prince-Thind/calculator",
      imageLink: "https://prince-thind.github.io/calculator/",
    },

    {
      name: "Restaurant Page",
      image: images["restaurant-page"],
      sourceLink: "https://github.com/Prince-Thind/restaurant-page",
      imageLink: "https://prince-thind.github.io/restaurant-page/",
    },
  ],
  "React/Next": [
    {
      name: "To-Do app",
      image: images["todo-list"],
      sourceLink: "https://github.com/Prince-Thind/todo-list",
      imageLink: "https://prince-thind.github.io/todo-list/",
    },
    {
      name: "Shopping App",
      image: images["shopping-app-react"],
      sourceLink: "https://github.com/Prince-Thind/shopping-app-react",
      imageLink: "https://prince-thind.github.io/shopping-app-react/#/",
    },
    {
      name: "Memory Game",
      image: images["memory-game-react"],
      sourceLink: "https://github.com/Prince-Thind/memory-card-react",
      imageLink: "https://prince-thind.github.io/memory-card-react/",
    },
  ],
  ExpressJS: [
    {
      name: "Grocery Store",
      image: images["grocery-shop"],
      sourceLink: "https://github.com/Prince-Thind/grocery-store",
      imageLink: "https://whispering-cliffs-99890.herokuapp.com/",
    },
    {
      name: "Express Library",
      image: images["express-library"],
      sourceLink: "https://github.com/Prince-Thind/express-library",
      imageLink: "https://stark-reaches-37215.herokuapp.com/catalog",
    },
    {
      name: "Members Only",
      image: images["members-only"],
      sourceLink: "https://github.com/Prince-Thind/members-only",
      imageLink: "https://gentle-shore-23550.herokuapp.com/",
    },
  ],
  "Vanity Projects": [
    {
      name: "Beating Heart",
      image: images["beating-heart"],
      sourceLink: "https://github.com/Prince-Thind/beating-heart",
      imageLink: "https://prince-thind.github.io/beating-heart/",
    },

    {
      name: "Soviet Flag",
      image: images["soviet-flag"],
      sourceLink: "https://github.com/Prince-Thind/soviet-flag",
      imageLink: "https://prince-thind.github.io/soviet-flag/",
    },
    {
      name: "Newton's Disc",
      image: images["newtons-disc"],
      sourceLink: "https://github.com/Prince-Thind/newtons-disc",
      imageLink: "https://prince-thind.github.io/newtons-disc/",
    },
  ],
};

export default projects;
