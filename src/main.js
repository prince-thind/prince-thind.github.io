import "./stylesheets/main.css";
import "./stylesheets/header.css";
import "./stylesheets/utility.css";
import "./stylesheets/intro.css";
import "./stylesheets/pfp.css";
import "./stylesheets/work.css";
import "./stylesheets/about.css";
import "./stylesheets/footer.css";
import "./stylesheets/contact.css";
import "./stylesheets/projects.css";

import addProjects from "./lib/addProjects.js";
import addLinks from "./lib/addLinks";
import addCSSDesigns from "./lib/cssDesigns.js";
import LinkFormWithGoogleSheet from "./lib/form-submit";
// import startImageAnimation from "./lib/startImageAnimation";

addProjects();
addLinks();
addCSSDesigns();
LinkFormWithGoogleSheet();
// startImageAnimation()
