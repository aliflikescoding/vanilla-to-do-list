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
const allTask = document.querySelector("#allTask");
const today = document.querySelector("#today");

const showForm = (form) => {
  if (form.classList.contains("show")) {
    form.classList.remove("show");
  }
};

const cancel = (form, input) => {
  form.classList.add("show");
  input.value = "";
};

const resetContainer = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const getTask = (idName) => {
  const found = projects.find((project) => project.getSelect() == true);
  const task = found.getTasks().find((task) => task.getNameNoSpace() == idName);

  return task;
};

const createProjectDomElement = (idName, name) => {
  let projectCard = document.createElement("div");
  projectCard.classList.add("project-card");
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
  let projectIcon = document.createElement("i");
  projectIcon.textContent = "II";
  projectIcon.addEventListener("click", () => {
    let projectNum;
    projects.forEach((project, index) => {
      if (project.getName() == idName) {
        projectNum = index;
      }
    });
    projects.splice(projectNum, 1);
    console.log(projects);
    projectCard.remove();
    resetContainer(taskContainer);
    if (taskButton.classList.contains("show") == false) {
      taskButton.classList.add("show");
    }
  });

  projectCard.appendChild(h1);
  projectCard.appendChild(projectIcon);

  return projectCard;
};
projectContainer.appendChild(createProjectDomElement("Default", "Default"));

const createTaskDomElement = (idName, name, date) => {
  const taskCard = document.createElement("div");
  const taskContent = document.createElement("div");
  const taskContent2 = document.createElement("div");
  const taskButton = document.createElement("input");
  const taskLabel = document.createElement("label");
  const taskDate = document.createElement("input");
  const taskIcon = document.createElement("i");

  taskCard.classList.add("task-card");
  taskCard.id = `${idName}`;

  taskButton.type = "button";

  taskLabel.htmlFor = `${idName}`;
  taskLabel.textContent = `${name}`;

  taskDate.type = "date";
  if (date != "") {
    taskDate.value = date;
  }
  taskDate.id = `date-${idName}`;

  taskIcon.textContent = "II";

  //events

  taskDate.addEventListener("change", () => {
    const newDate = taskDate.value;
    const task = getTask(idName);
    task.changeDate(newDate);
    console.log(task);
  });

  taskButton.addEventListener("click", () => {
    const task = getTask(idName);
    task.changeStatus();
    console.log(task);
  });

  taskIcon.addEventListener("click", () => {
    const tasks = projects
      .find((project) => project.getSelect() == true)
      .getTasks();
    let taskNum;
    tasks.forEach((task, index) => {
      if (task.getNameNoSpace() == idName) {
        taskNum = index;
      }
    });
    tasks.splice(taskNum, 1);
    taskCard.remove();
  });

  // Structure elements
  taskContent.appendChild(taskButton);
  taskContent.appendChild(taskLabel);
  taskContent2.appendChild(taskDate);
  taskContent2.appendChild(taskIcon);

  taskCard.appendChild(taskContent);
  taskCard.appendChild(taskContent2);

  return taskCard;
};

const loadProject = (project) => {
  loadTasks(project, taskContainer);

  if (taskButton.classList.contains("show")) {
    taskButton.classList.remove("show");
  }
};
const loadTasks = (project, container) => {
  resetContainer(container);

  const tasks = project.getTasks();
  tasks.forEach((task) => {
    container.appendChild(
      createTaskDomElement(
        task.getNameNoSpace(),
        task.getName(),
        task.getDate()
      )
    );
  });
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
  const found = projects.find((project) => project.getSelect() == true);

  const nameNoSpace = taskInput.value.replace(/\s/g, "-");
  const name = taskInput.value;

  found.addItem(new Task(nameNoSpace, name));

  loadTasks(found, taskContainer);
  cancel(taskForm, taskInput);
});

allTask.addEventListener("click", () => {
  resetContainer(taskContainer);
  if (taskButton.classList.contains("show") == false) {
    taskButton.classList.add("show");
  }

  projects.forEach((project) => {
    project.getTasks().forEach((task) => {
      taskContainer.appendChild(
        createTaskDomElement(
          task.getNameNoSpace(),
          task.getName(),
          task.getDate()
        )
      );
    });
  });
});
today.addEventListener("click", () => {
  resetContainer(taskContainer);
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
        console.log('hi')
        taskContainer.appendChild(
          createTaskDomElement(
            task.getNameNoSpace(),
            task.getName(),
            task.getDate()
          )
        );
      }
    });
  });
});
