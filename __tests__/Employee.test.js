const Employee = require("../lib/Employee");

test("Can Initiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "John";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor arguments", () => {
    const value = 1;
    const e = new Employee("Bill", value);
    expect(e.id).toBe(value);
});

test("Can set email via constructor arguments", () => {
    const emailtest = "manager@managertest.com";
    const e = new Employee("Sandy", 5, emailtest);
    expect(e.email).toBe(emailtest);
});

test("Can get name via getName", () => {
    const testValue = "John";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId", () => {
    const testValue = 60;
    const e = new Employee("Mike", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail", () => {
    const testValue = "manager@managertest2.com";
    const e = new Employee("Liz", 20, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("Can get Role via getRole", () => {
    const testValue = "Employee";
    const e = new Employee("Liz", 20, "manager@manager.test3.com", testValue);
    expect(e.getRole()).toBe(testValue);
});