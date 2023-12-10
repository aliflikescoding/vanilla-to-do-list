function Project(name) {
  this.name = name;
  this.tasks = [];
}

Project.prototype.getName = function () {
  return this.name;  
};

Project.prototype.changeName = function(newName) {
  return this.name = newName;
}

Project.prototype.getTasks = function () {
  return this.tasks;
}

Project.prototype.addItem = function (item) {
  this.tasks.push(item);
}

export default Project;