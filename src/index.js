import "./main.css"
import "./project.css"
import "./variables.css"

const projects = [];

const projectTemplate = document.getElementsByTagName("template")[0];
const projectsContainer = document.querySelector(".projects-content");

for(let i = 0; i < 6; i++)
{
    const projectClone = projectTemplate.content.cloneNode(true);
    projects.push(projectsContainer.appendChild(projectClone));
}