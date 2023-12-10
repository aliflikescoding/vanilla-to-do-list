function Object(name) {
  this.name = name;
  this.array = [];
}

Object.prototype.getName = function () {
  return this.name;  
};

Object.prototype.changeName = function(newName) {
  return this.name = newName;
}

Object.prototype.getArray = function () {
  return this.array;
}

Object.prototype.addItem = function (item) {
  this.array.push(item);
}

export default Object;