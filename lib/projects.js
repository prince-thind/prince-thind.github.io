const imagesContext = require.context("../images/project-previews", false);
const images = {};

imagesContext.keys().forEach((key) => {
  let name = key;
  name = key.split("/")[1];
  name = name.split(".")[0];
  images[name] = imagesContext(key);
});

const projects = {
  vanilla: [
    {
      name: "Rock Paper Scissors",
      image: images["rock-paper-scissors"],
      link: "https://github.com/Prince-Thind/rock-paper-scissors",
      live_link: "https://prince-thind.github.io/rock-paper-scissors/",
    },
    {
      name: "Survey Form",
      image: images["unfinished"],
      link: "https://github.com/Prince-Thind/survey-form",
      live_link: "https://prince-thind.github.io/survey-form/",
    },
    {
      name: "Google Homepage",
      image: images["google-homepage"],
      link: "https://github.com/Prince-Thind/google-homepage",
      live_link: "https://prince-thind.github.io/google-homepage/",
    },
    {
      name: "name",
      image: images["unfinished"],
      link: "link",
      live_link: "livelink",
    },
    {
      name: "name",
      image: images["unfinished"],
      link: "link",
      live_link: "livelink",
    },
    {
      name: "name",
      image: images["unfinished"],
      link: "link",
      live_link: "livelink",
    },
    {
      name: "name",
      image: images["unfinished"],
      link: "link",
      live_link: "livelink",
    },
    {
      name: "name",
      image: images["unfinished"],
      link: "link",
      live_link: "livelink",
    },
    {
      name: "name",
      image: images["unfinished"],
      link: "link",
      live_link: "livelink",
    },
    {
      name: "name",
      image: images["unfinished"],
      link: "link",
      live_link: "livelink",
    },
    {
      name: "name",
      image: images["unfinished"],
      link: "link",
      live_link: "livelink",
    },
    {
      name: "name",
      image: images["unfinished"],
      link: "link",
      live_link: "livelink",
    },
    {
      name: "name",
      image: images["unfinished"],
      link: "link",
      live_link: "livelink",
    },
    {
      name: "name",
      image: images["unfinished"],
      link: "link",
      live_link: "livelink",
    },
  ],
};

export default projects;
