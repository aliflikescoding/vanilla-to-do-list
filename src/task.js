function Task(name, date, project) {
  this.name = name;
  this.date = date;
  this.project = project;
}

Task.prototype.getName = function () {
  return this.name;  
};

Task.prototype.getDate = function () {
  return this.date;  
};

Task.prototype.getProject = function () {
  return this.project;  
};

Task.prototype.changeName = function(newName) {
  return this.name = newName;
}

Task.prototype.changeDate = function(newDate) {
  return this.date = newDate;
}

export default Task;