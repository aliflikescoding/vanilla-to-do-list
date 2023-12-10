import Task from "./_task";
import Project from "./_project";

const projects = [new Project("Default")];
console.log(projects);
projects.forEach((project) => {
  console.log(project);
});

const projectForm = document.querySelector("#projectForm");
const projectButton = document.querySelector("#projectButton");
const projectFormAdd = document.querySelector("#projectFormAdd");
const projectFormCancel = document.querySelector("#projectFormCancel");
const projectInput = document.querySelector("#projectInput");
const projectContainer = document.querySelector("#projectContainer");

projectButton.addEventListener("click", () => {
  if (projectForm.classList.contains("show")) {
    projectForm.classList.remove("show");
  }
});

projectFormAdd.addEventListener("click", (event) => {
  event.preventDefault();

  const name = projectInput.value.replace(/\s/g, "-");
  let h1 = document.createElement("h1");
  h1.classList.add("project");
  h1.textContent = `${projectInput.value}`;
  h1.setAttribute("id", name);

  projects.push(new Project(name));
  projectContainer.appendChild(h1);
  projectForm.classList.add("show");
  projectInput.value = "";
});

projectFormCancel.addEventListener("click", (event) => {
  event.preventDefault();
  projectForm.classList.add("show");
  projectInput.value = "";
});
