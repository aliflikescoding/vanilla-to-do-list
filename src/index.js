import Task from "./_task";
import Project from "./_project";
import Dom from "./_dom"

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
const allTask = document.querySelector("#allTask");
const today = document.querySelector("#today");
const nextSevenDays = document.querySelector("#nextSevenDays");




projectContainer.appendChild(Dom.createProjectDomElement("Default", "Default", projects));

projectButton.addEventListener("click", () => {
  Dom.showForm(projectForm);
});
taskButton.addEventListener("click", () => {
  Dom.showForm(taskForm);
});
projectFormCancel.addEventListener("click", (event) => {
  event.preventDefault();
  Dom.cancel(projectForm, projectInput);
});
taskFormCancel.addEventListener("click", (event) => {
  event.preventDefault();
  Dom.cancel(taskForm, taskInput);
});

projectFormAdd.addEventListener("click", (event) => {
  event.preventDefault();

  const nameNoSpace = projectInput.value.replace(/\s/g, "-");
  const name = projectInput.value;
  const domElm = Dom.createProjectDomElement(nameNoSpace, name, projects);

  projects.push(new Project(nameNoSpace));
  projectContainer.appendChild(domElm);
  Dom.cancel(projectForm, projectInput);
});
taskFormAdd.addEventListener("click", (event) => {
  event.preventDefault();
  const found = projects.find((project) => project.getSelect() == true);

  const nameNoSpace = taskInput.value.replace(/\s/g, "-");
  const name = taskInput.value;

  found.addItem(new Task(nameNoSpace, name));

  Dom.loadTasks(found, taskContainer, projects);
  Dom.cancel(taskForm, taskInput);
});

allTask.addEventListener("click", () => {
  Dom.resetContainer(taskContainer);
  if (taskButton.classList.contains("show") == false) {
    taskButton.classList.add("show");
  }

  projects.forEach((project) => {
    project.getTasks().forEach((task) => {
      taskContainer.appendChild(
        Dom.createTaskDomElement(
          task.getNameNoSpace(),
          task.getName(),
          task.getDate(),
          projects
        )
      );
    });
  });
});
today.addEventListener("click", () => {
  Dom.resetContainer(taskContainer);
  if (taskButton.classList.contains("show") == false) {
    taskButton.classList.add("show");
  }

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate);
  projects.forEach((project) => {
    project.getTasks().forEach((task) => {
      if (task.getDate() == formattedDate) {
        taskContainer.appendChild(
          Dom.createTaskDomElement(
            task.getNameNoSpace(),
            task.getName(),
            task.getDate(),
            projects
          )
        );
      }
    });
  });
});
nextSevenDays.addEventListener("click", () => {
  Dom.resetContainer(taskContainer);
  if (taskButton.classList.contains("show") == false) {
    taskButton.classList.add("show");
  }

  const today = new Date();
  const day = today.getDate();
  projects.forEach((project) => {
    project.getTasks().forEach((task) => {
      const dateString = `${task.getDate()}`;
      const dayString = dateString.split("-")[2];
      const dayInt = parseInt(dayString, 10);
      if (dayInt <= day + 6) {
        taskContainer.appendChild(
          Dom.createTaskDomElement(
            task.getNameNoSpace(),
            task.getName(),
            task.getDate(),
            projects
          )
        );
      }
    });
  });
});
