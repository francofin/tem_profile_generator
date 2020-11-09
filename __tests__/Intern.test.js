const Employee = require("../lib/Employee");
const Intern = require("../lib/intern");

test("can set Schol via constructor arguments", () => {
    const testValue = "Harvard";
    const e = new Intern("Bar", 5, "intern@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("can get Role should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Bar", 5, "manager@test.com", 5010);
    expect(e.getRole()).toBe(testValue);
});

test("can get school via getSchool", () => {
    const testValue = "Princeton";
    const e = new Intern("Bar", 5, "manager@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});