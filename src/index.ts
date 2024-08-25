function Component(constructor: Function) {
  console.log("Components decorator called");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log("Insertign the components in the DOM")
  }
}
