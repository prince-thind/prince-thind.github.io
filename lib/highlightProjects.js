const imagesContext = require.context("../images/highlight-previews", false);
const images = {};

imagesContext.keys().forEach((key) => {
  let name = key;
  name = key.split("/")[1];
  name = name.split(".")[0];
  images[name] = imagesContext(key);
});

const highlightProjects = [
  {
    name: "BattleShip",
    image: images["battleship"],
    sourceLink: "https://github.com/Prince-Thind/battleship",
    imageLink: "https://prince-thind.github.io/battleship/",
  },
  {
    name: "Memory Game",
    image: images["memory-game-react"],
    sourceLink: "https://github.com/Prince-Thind/memory-card-react",
    imageLink: "https://prince-thind.github.io/memory-card-react/",
  },
  {
    name: "Rock Paper Scissors",
    image: images["rock-paper-scissors"],
    sourceLink: "https://github.com/Prince-Thind/rock-paper-scissors",
    imageLink: "https://prince-thind.github.io/rock-paper-scissors/",
  },
  // {
  //   name: "Shopping App",
  //   image: images["shopping-app-react"],
  //   sourceLink: "https://github.com/Prince-Thind/shopping-app-react",
  //   imageLink: "https://prince-thind.github.io/shopping-app-react/#/",
  // },
  // {
  //   name: "Tic Tac Toe",
  //   image: images["tic-tac-toe"],
  //   sourceLink: "https://github.com/Prince-Thind/tic-tac-toe",
  //   imageLink: "https://prince-thind.github.io/tic-tac-toe/",
  // },
];

export default highlightProjects;
