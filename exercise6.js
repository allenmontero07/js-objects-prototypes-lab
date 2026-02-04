const person = {
  species: "Human",

  breathe() {
    return "Breathing...";
  }
};

const employee = Object.create(person);
employee.company = "Tech Corp";
employee.position = "Developer";

const manager = Object.create(employee);

manager.department = "Engineering";
manager.team = [];

manager.addTeamMember = function (name) {
  this.team.push(name);
};


// Display Prototype Chain

console.log("manager → employee:",
  Object.getPrototypeOf(manager) === employee
);

console.log("employee → person:",
  Object.getPrototypeOf(employee) === person
);

console.log("person → Object.prototype:",
  Object.getPrototypeOf(person) === Object.prototype
);

console.log("Object.prototype → null:",
  Object.getPrototypeOf(Object.prototype) === null
);
