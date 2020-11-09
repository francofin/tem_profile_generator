const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("can set github via constructor arguments", () => {
    const testValue = "Github";
    const e = new Engineer("Bar", 5, "engineer@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("can get Role should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Bar", 5, "intern@test.com", "github");
    expect(e.getRole()).toBe(testValue);
});

test("can get github via getgithub", () => {
    const testValue = "Githubname";
    const e = new Engineer("Bar", 5, "manager@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});