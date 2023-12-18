function Task(nameNoSpace, name) {
  this.nameNoSpace = nameNoSpace;
  this.name = name;
  this.date = "";
  this.done = false;
}

Task.prototype.getNameNoSpace = function () {
  return this.name;
};

Task.prototype.getName = function () {
  return this.name;
};

Task.prototype.getDate = function () {
  return this.date;
};

Task.prototype.getDone = function () {
  return this.done;
};

Task.prototype.changeStatus = function () {
  if (this.done == false) {
    this.done = true;
  } else {
    this.done = false;
  }
};

Task.prototype.changeName = function (newName) {
  return (this.name = newName);
};

Task.prototype.changeDate = function (newDate) {
  return (this.date = newDate);
};

export default Task;
