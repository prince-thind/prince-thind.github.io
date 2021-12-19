require("dotenv").config();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { default: projects, images } = require("../../lib/projects");

export default async function handler(req, res) {
  const result = {};
  for (const category in projects) {
    const categoryProjects = projects[category];
    result[category] = [];
    for (const categoryProject of categoryProjects) {
      const response = await fetchResponse(
        process.env.GITHUB_REPO + categoryProject.id,
        process.env.GITHUB_TOKEN
      );
      const item = {
        name: response.name,
        imageLink: response.homepage,
        sourceLink: response.html_url,
        image: images["unfinished"],
      };
      result[category].push(item);
    }
  }
  res.status(200).json(result);
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
