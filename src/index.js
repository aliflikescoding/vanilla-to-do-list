import Task from "./_task";
import Project from "./_project";

const projects = [new Project("Default")];
const taskButton = document.querySelector("#taskButton");
const taskForm = document.querySelector("#taskForm");
const taskFormCancel = document.querySelector("#taskFormCancel");
const taskFormAdd = document.querySelector("#taskFormAdd");
const taskContainer = document.querySelector("#taskContainer");
const projectForm = document.querySelector("#projectForm");
const projectButton = document.querySelector("#projectButton");
const projectFormAdd = document.querySelector("#projectFormAdd");
const projectFormCancel = document.querySelector("#projectFormCancel");
const projectInput = document.querySelector("#projectInput");
const projectContainer = document.querySelector("#projectContainer");

const showForm = (form) => {
  if (form.classList.contains("show")) {
    form.classList.remove("show");
  }
};

const cancel = (form, input) => {
  form.classList.add("show");
  input.value = "";
};

const createProjectDomElement = (idName, name) => {
  let h1 = document.createElement("h1");
  h1.classList.add("project");
  h1.textContent = name;
  h1.setAttribute("id", idName);
  h1.addEventListener("click", () => {
    const id = h1.id;
    const found = projects.find((project) => project.getName() == id);
    const found_2 = projects.find((project) => project.getSelect() == true);
    if (found_2) {
      found_2.select();
    }
    found.select();
    loadProject(found);
  });

  return h1;
};
projectContainer.appendChild(createProjectDomElement("Default", "Default"));

const createTaskDomElement = (idName, name) => {
  const taskCard = document.createElement("div");
  const taskContent = document.createElement("div");
  const taskContent2 = document.createElement("div");
  const taskRadio = document.createElement("input");
  const taskLabel = document.createElement("label");
  const taskDate = document.createElement("input");
  const taskIcon = document.createElement("i");

  taskCard.classList.add("task-card");
  taskCard.id = `${idName}`;

  taskRadio.type = "radio";
  taskRadio.name = "task";
  taskRadio.id = `${idName}`;

  taskLabel.htmlFor = `${idName}`;
  taskLabel.textContent = `${name}`;

  taskDate.type = "date";
  taskDate.id = `date-${idName}`;

  taskIcon.textContent = "II";

  // Structure elements
  taskContent.appendChild(taskRadio);
  taskContent.appendChild(taskLabel);
  taskContent2.appendChild(taskDate);
  taskContent2.appendChild(taskIcon);

  taskCard.appendChild(taskContent);
  taskCard.appendChild(taskContent2);

  return taskCard;
};

const loadProject = (project) => {
  const mainContainer = document.querySelector(".main-container");
  const taskArray = project.getTasks();
  console.log(project.getName());
  console.log(taskArray);

  if (mainContainer.classList.contains("show")) {
    mainContainer.classList.remove("show");
  }
};

projectButton.addEventListener("click", () => {
  showForm(projectForm);
});
taskButton.addEventListener("click", () => {
  showForm(taskForm);
});
projectFormCancel.addEventListener("click", (event) => {
  event.preventDefault();
  cancel(projectForm, projectInput);
});
taskFormCancel.addEventListener("click", (event) => {
  event.preventDefault();
  cancel(taskForm, taskInput);
});

projectFormAdd.addEventListener("click", (event) => {
  event.preventDefault();

  const nameNoSpace = projectInput.value.replace(/\s/g, "-");
  const name = projectInput.value;
  const domElm = createProjectDomElement(nameNoSpace, name);

  projects.push(new Project(nameNoSpace));
  projectContainer.appendChild(domElm);
  cancel(projectForm, projectInput);
});
taskFormAdd.addEventListener("click", (event) => {
  event.preventDefault();
});

taskFormAdd.addEventListener("click", (event) => {
  event.preventDefault();
  const found = projects.find((project) => project.getSelect() == true);

  const nameNoSpace = taskInput.value.replace(/\s/g, "-");
  const name = taskInput.value;
  const domElm = createTaskDomElement(nameNoSpace, name);

  found.addItem(new Task(nameNoSpace));
  taskContainer.appendChild(domElm);
  cancel(taskForm, taskInput);
});
