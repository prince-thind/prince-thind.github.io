import projects from './projects.json'




export default function addProjects() {
    const projectsTab = document.querySelector('#projects-tab')
    for (const project of projects) {
        const projectLi = createProjectLi(project);
        projectsTab.appendChild(projectLi)
    }
}

function createProjectLi(project) {
    const li = document.createElement('li');
    li.classList.add('project');
    li.innerHTML = `
    <img src="./src/assets/project-images/${project.imageSrc}" alt="sample-project" class="project-image">
    <div class="project-info">
        <h4 class="project-heading">${project.name}</h4>
        <p>${project.description}</p>
         <div class="project-links">
             <a href="${project.liveLink}" class="live-link link-button">Live Link <span class="material-symbols-outlined">
             open_in_new
             </span> </a>
             <a href="${project.sourceLink}" class="source-link link-button">Source Link <span class="material-symbols-outlined">
             open_in_new
             </span> </a>
          </div>
    </div>`

    return li;
}