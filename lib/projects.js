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
      id: "348430874",
    },
    {
      name: "Product Landing Page",
      id: "348808289",
    },
    {
      name: "Techinical Documentation Page",
      id: "349046617",
    },
    {
      name: "Tribute Page",
      id: "339780451",
    },
    {
      name: "Google Homepage",
      id: "336293178",
    },
  ],
  "Vanilla JS": [
    {
      name: "Tic Tac Toe",
      id: "372186134",
    },

    {
      name: "Constellations",
      id: "375016260",
    },
    {
      name: "Rock Paper Scissors",
      id: "338780967",
    },
    {
      name: "BattleShip",
      id: "412463537",
      highlights:true,

    },

    {
      name: "Floyd Warshall Algorithm",
      id: "385131970",
    },

    {
      name: "Etch a Sketch",
      id: "352658609",
    },
    {
      name: "calculator",
      id: "353632620",
    },

    {
      name: "Restaurant Page",
      id: "373443720",
    },
  ],
  "React/Next": [
    {
      name: "To-Do app",
      id: "373713723",
    },
    {
      name: "Shopping App",
      id: "381591701",
      highlights:true,
    },
    {
      name: "Memory Game",
      id: "381107597",
      highlights:true,

    },
  ],
  ExpressJS: [
    {
      name: "Grocery Store",
      id: "422798809",
    },
    {
      name: "Express Library",
      id: "420944050",
    },
    {
      name: "Members Only",
      id: "424127251",
    },
  ],
  "Vanity Projects": [
    {
      name: "Beating Heart",
      id: "390193308",
    },

    {
      name: "Soviet Flag",
      id: "324203301",
    },
    {
      name: "Newton's Disc",
      id: "384160757",
    },
  ],
};


export default projects;
export { images };

