require("dotenv").config();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { default: projects, images } = require("./projects");

async function fetchProjects() {
  const result = {};
  let responsePromiseArray = [];

  for (const category in projects) {
    result[category] = [];
    const categoryProjects = projects[category];

    for (const categoryProject of categoryProjects) {
      const responsePromise = getReponse(categoryProject.id);
      responsePromiseArray.push(responsePromise);
    }

    const responses = await Promise.all(responsePromiseArray);

    for (const response of responses) {
      const item = {
        name: getName(response.name),
        imageLink: response.homepage,
        sourceLink: response.html_url,
        image: images[response.id],
        highlights: getHighlights(response.id),
      };

      result[category].push(item);
    }
    responsePromiseArray = [];
  }
  return JSON.stringify(result);
}

async function getReponse(id) {
  return fetchResponse(process.env.GITHUB_REPO + id, process.env.GITHUB_TOKEN);
}

async function fetchResponse(url, token) {
  const response = await fetch(url, {
    headers: {
      authorization: `token ${token}`,
    },
  });
  const JSONRes = await response.json();
  return JSONRes;
}

function getHighlights(id) {
  let res = null;
  for (const category in projects) {
    const categoryProjects = projects[category];
    res = categoryProjects.some((e) => e.id == id && e.highlights == true);
    if (res) return true;
  }
  return false;
}

function getName(name) {
  let res = "";
  const nameTokens = name.split("-");

  for (const token of nameTokens) {
    res += token[0].toUpperCase() + token.slice(1)+" ";
  }

  return res;
}

module.exports = fetchProjects;
