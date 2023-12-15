const Dom = (() => {
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
    const task = found.getTasks().find((task) => task.getNameNoSpace() == idName);
  
    return task;
  };

  const loadTasks = (project, container, projectArray) => {
    Dom.resetContainer(container);
  
    const tasks = project.getTasks();
    tasks.forEach((task) => {
      container.appendChild(
        Dom.createTaskDomElement(
          task.getNameNoSpace(),
          task.getName(),
          task.getDate(),
          projectArray
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

  const createTaskDomElement = (idName, name, date, projectArray) => {
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
      const task = findTask(projectArray, idName);
      task.changeDate(newDate);
    });
  
    taskButton.addEventListener("click", () => {
      const task = findTask(projectArray, idName);
      task.changeStatus();
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

  const createProjectDomElement = (idName, name, projectArray) => {
    let projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    let h1 = document.createElement("h1");
    h1.classList.add("project");
    h1.textContent = name;
    h1.setAttribute("id", idName);
    h1.addEventListener("click", () => {
      const id = h1.id;
      const found = projectArray.find((project) => project.getName() == id);
      const found_2 = projectArray.find((project) => project.getSelect() == true);
      if (found_2) {
        found_2.select();
      }
      found.select();
      loadProject(found, projectArray);
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
      projectCard.remove();
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
    loadTasks: loadTasks
  }
})();

export default Dom;