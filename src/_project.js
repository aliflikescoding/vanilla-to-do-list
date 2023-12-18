function Project(nameNoSpace, name) {
  this.nameNoSpace = nameNoSpace;
  this.name = name;
  this.tasks = [];
  this.selected = false;
}

Project.prototype.getNameNoSpace = function () {
  return this.nameNoSpace;  
};

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

Project.prototype.getSelect = function() {
  return this.selected;
}

Project.prototype.select = function() {
  if (this.selected == false) {
    this.selected = true;
  } else {
    this.selected = false;
  }
}

export default Project;