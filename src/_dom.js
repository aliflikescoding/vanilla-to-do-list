import Project from "./_project";
import Task from "./_task";

const Dom = (() => {
  const showOrHideSideBar = (sideBar) => {
    if (sideBar.classList.contains("show")) {
      sideBar.classList.remove("show");
    } else {
      sideBar.classList.add("show");
    }
  };

  function addTrashIcon() {
    // Create i element
    const i = document.createElement("i");

    // Add Bootstrap trash icon classes
    i.classList.add("bi", "bi-trash-fill");

    // Append icon element to DOM
    return i;
  }

  const getProperObjectArray = (jsonArray) => {
    const newArray = [];

    jsonArray.forEach((json) => {
      const project = new Project(json.nameNoSpace, json.name);
      project.selected = json.selected;

      json.tasks.forEach((taskJson) => {
        const task = new Task(taskJson.nameNoSpace, taskJson.name);
        task.date = taskJson.date;
        task.done = taskJson.done;

        project.addItem(task);
      });

      newArray.push(project);
    });

    return newArray;
  };

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

  const findTask = (projectArray, idName) => {
    const found = projectArray.find((project) => project.getSelect() == true);
    const task = found
      .getTasks()
      .find((task) => task.getNameNoSpace() == idName);

    return task;
  };

  const loadTasks = (project, container) => {
    Dom.resetContainer(container);

    const tasks = project.getTasks();
    tasks.forEach((task) => {
      container.appendChild(
        Dom.createTaskDomElement(
          task.getNameNoSpace(),
          task.getName(),
          task.getDate(),
          task.getDone()
        )
      );
    });
  };

  const loadProject = (project, projectArray) => {
    loadTasks(project, taskContainer, projectArray);

    if (taskButton.classList.contains("show")) {
      taskButton.classList.remove("show");
    }
  };

  const createTaskDomElement = (idName, name, date, done) => {
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
    taskButton.classList.add("task-button");

    taskLabel.htmlFor = `${idName}`;
    taskLabel.textContent = `${name}`;

    taskDate.type = "date";
    if (date != "") {
      taskDate.value = date;
    }
    taskDate.id = `date-${idName}`;
    if (done == true) {
      if (taskLabel.classList.contains("done") == false) {
        taskLabel.classList.add("done");
      } else {
        taskLabel.classList.remove("done");
      }
      if (taskButton.classList.contains("done-two") == false) {
        taskButton.classList.add("done-two");
      } else {
        taskButton.classList.remove("done-two");
      }
    }

    const trashIcon = addTrashIcon();
    trashIcon.classList.add("task-icon");
    taskIcon.appendChild(trashIcon);

    //events

    taskDate.addEventListener("change", () => {
      const projectArray = Dom.getProperObjectArray(
        JSON.parse(localStorage.getItem("projects"))
      );
      const newDate = taskDate.value;
      const task = findTask(projectArray, idName);
      task.changeDate(newDate);
      localStorage.setItem("projects", JSON.stringify(projectArray));
    });

    taskButton.addEventListener("click", () => {
      const projectArray = Dom.getProperObjectArray(
        JSON.parse(localStorage.getItem("projects"))
      );
      const task = findTask(projectArray, idName);
      task.changeStatus();
      console.log(task)
      if (taskLabel.classList.contains("done") == false) {
        taskLabel.classList.add("done");
      } else {
        taskLabel.classList.remove("done");
      }
      if (taskButton.classList.contains("done-two") == false) {
        taskButton.classList.add("done-two");
      } else {
        taskButton.classList.remove("done-two");
      }
      localStorage.setItem("projects", JSON.stringify(projectArray));
    });

    taskIcon.addEventListener("click", () => {
      const projectArray = Dom.getProperObjectArray(
        JSON.parse(localStorage.getItem("projects"))
      );
      const tasks = projectArray
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
      localStorage.setItem("projects", JSON.stringify(projectArray));
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

  const createProjectDomElement = (idName, name) => {
    let projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    let h1 = document.createElement("h1");
    h1.classList.add("project");
    h1.textContent = name;
    h1.setAttribute("id", idName);
    h1.addEventListener("click", () => {
      const projectArray = Dom.getProperObjectArray(
        JSON.parse(localStorage.getItem("projects"))
      );
      const id = h1.id;
      const found = projectArray.find(
        (project) => project.getNameNoSpace() == id
      );
      const found_2 = projectArray.find(
        (project) => project.getSelect() == true
      );
      if (found_2) {
        found_2.select();
      }
      found.select();
      localStorage.setItem("projects", JSON.stringify(projectArray));
      loadProject(found, projectArray);
    });
    let projectIcon = document.createElement("i");
    projectIcon.classList.add("clickable");
    projectIcon.appendChild(addTrashIcon());
    projectIcon.addEventListener("click", () => {
      const projectArray = Dom.getProperObjectArray(
        JSON.parse(localStorage.getItem("projects"))
      );
      let projectNum;
      projectArray.forEach((project, index) => {
        if (project.getName() == idName) {
          projectNum = index;
        }
      });
      projectArray.splice(projectNum, 1);
      projectCard.remove();
      localStorage.setItem("projects", JSON.stringify(projectArray));
      Dom.resetContainer(taskContainer);
      if (taskButton.classList.contains("show") == false) {
        taskButton.classList.add("show");
      }
    });

    projectCard.appendChild(h1);
    projectCard.appendChild(projectIcon);

    return projectCard;
  };

  return {
    showForm: showForm,
    cancel: cancel,
    resetContainer: resetContainer,
    createTaskDomElement: createTaskDomElement,
    createProjectDomElement: createProjectDomElement,
    loadTasks: loadTasks,
    getProperObjectArray: getProperObjectArray,
    showOrHideSideBar: showOrHideSideBar,
  };
})();

export default Dom;
