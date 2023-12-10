import Task from "./_task";
import Project from "./_project";

const projects = [new Project("Default")];

const createProjectDomElement = (idName, name) => {
  let h1 = document.createElement("h1");
  h1.classList.add("project");
  h1.textContent = name;
  h1.setAttribute("id", idName);
  h1.addEventListener("click", () => {
    const id = h1.id;
    const found = projects.find(project => project.getName() == id);
    console.log(found);
  });

  return h1;
}

const projectForm = document.querySelector("#projectForm");
const projectButton = document.querySelector("#projectButton");
const projectFormAdd = document.querySelector("#projectFormAdd");
const projectFormCancel = document.querySelector("#projectFormCancel");
const projectInput = document.querySelector("#projectInput");
const projectContainer = document.querySelector("#projectContainer");
projectContainer.appendChild(createProjectDomElement("Default", "Default"));

projectButton.addEventListener("click", () => {
  if (projectForm.classList.contains("show")) {
    projectForm.classList.remove("show");
  }
});

projectFormAdd.addEventListener("click", (event) => {
  event.preventDefault();

  const nameNoSpace = projectInput.value.replace(/\s/g, "-");
  const name = projectInput.value;
  const domElm = createProjectDomElement(nameNoSpace, name);

  projects.push(new Project(nameNoSpace));
  projectContainer.appendChild(domElm);
  resetProjectForm();
});

projectFormCancel.addEventListener("click", (event) => {
  event.preventDefault();
  resetProjectForm()
});

const resetProjectForm = () => {
  projectForm.classList.add("show");
  projectInput.value = "";
}