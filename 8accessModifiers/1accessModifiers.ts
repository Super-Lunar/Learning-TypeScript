export {}

export {};

class Employee {
  protected employeeName: string;
  constructor(name: string) {
    this.employeeName = name;
  }
  showName() {
    console.log(`Employee Name : ${this.employeeName}`);
  }
}

let emp1 = new Employee("Beast");
// console.log(emp1.employeeName);
emp1.showName();

// for inheritance use extends

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager delegating tasks ${this.employeeName}`);
  }
}

let m1 = new Manager("Bruce");

m1.delegateWork();
m1.showName();
// console.log(m1.employeeName);
