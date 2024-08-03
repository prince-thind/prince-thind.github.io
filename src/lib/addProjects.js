import projects from "../data/projects.json";

export default function addProjects() {
  const projectsTab = document.querySelector("#projects-tab");
  for (const project of projects) {
    const projectLi = createProjectLi(project);
    projectsTab.appendChild(projectLi);
  }
}

function createProjectLi(project) {
  const li = document.createElement("li");
  li.classList.add("project");
  li.innerHTML = `
    <img src="${getImageUrl(
      project.imageSrc
    )}" alt="sample-project" class="project-image">
    <div class="project-info">
        <h4 class="project-heading">${project.name}</h4>
        <p class="project-description">${project.description}</p>
         <div class="project-links">
             <a href="${
               project.liveLink
             }" class="project-link plain-link link-button" rel="noreferrer noopener" target="_blank">Live Link<i class="fa-solid icon fa-arrow-up-right-from-square"></i> </a>
             <a href="${
               project.sourceLink
             }"  class="project-link plain-link link-button" rel="noreferrer noopener" target="_blank">Source Link<i class="fa-solid icon fa-arrow-up-right-from-square"></i> </a>
          </div>
    </div>`;

  return li;
}

function getImageUrl(name) {
  return new URL(`../assets/project-images/${name}`, import.meta.url).href;
}
