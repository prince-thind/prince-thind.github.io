const projectHeading = document.querySelector('#project-heading');
const skillsHeading = document.querySelector('#skills-heading');

const projectsTab = document.querySelector('#projects-tab');
const skillsTTab = document.querySelector('#skills-tab');


projectHeading.addEventListener('click', toggleActive)
skillsHeading.addEventListener('click', toggleActive)

function toggleActive(e) {

    if (e.target.id == 'project-heading') {
        
        projectHeading.classList.add('active');
        skillsHeading.classList.remove('active');

        projectsTab.classList.add('active');
        skillsTTab.classList.remove('active');
    }
    else {
        projectHeading.classList.remove('active');
        skillsHeading.classList.add('active');
        
        projectsTab.classList.remove('active');
        skillsTTab.classList.add('active');
    }
}