import projects from './projects-list';
function renderProjects(node) {

  projects.forEach((project) => {
    const li = document.createElement('li');
    li.classList.add('project-tile');

    const aTag = document.createElement('a');
    aTag.classList.add('project-tile-link');
    aTag.setAttribute('href', project.href);
    li.appendChild(aTag);

    const h4 = document.createElement('h4');
    h4.classList.add('project-tile-heading');
    h4.textContent = project.name;
    aTag.appendChild(h4);

    const img = document.createElement('img');
    img.classList.add('project-tile-pictue');
    img.src=project.src;
    aTag.appendChild(img);

    node.appendChild(li)

  });
}

export default renderProjects;
