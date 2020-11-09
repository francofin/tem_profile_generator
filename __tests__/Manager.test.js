const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("can set Office Number via constructor arguments", () => {
    const testValue = 501;
    const e = new Manager("Bar", 5, "manager@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("can get Role should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Bar", 5, "manager@test.com", 5010);
    expect(e.getRole()).toBe(testValue);
});

test("can get officeNumber via constructor arguments", () => {
    const testValue = 5022;
    const e = new Manager("Bar", 5, "manager@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});