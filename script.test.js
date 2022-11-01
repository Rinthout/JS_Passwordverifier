const verifyPassword = require("./script.js");

// requirements/conditions
test('The password is not null', () => {
    expect(verifyPassword.isNotNull()).toBe(true);
});

test('The password has the right lenght', () => {
    expect(verifyPassword.length).toHaveLength <= 8;
});

test('The password has 1 or more uppercase characters', () => {
    expect(verifyPassword.hasUpperCaseCharacter('A')).toBe(true);
});

test('The password has 1 or more lowercase characters', () => {
    expect(verifyPassword.hasLowerCaseCharacter('a')).toBe(true);
});

test('The password has digits', () => {
    expect(verifyPassword.hasDigit(1)).toBe(true);
});

// 1. At least 3 of the above conditions are true
// 2.Condition 4 is true (so that must always be true)
test("Minimum Coniditions", () => {
    const conditions = [true, true, true, false, false];
    expect(verifyPassword.minimumConditionsReached(conditions)).toBe(true);
});

// test outer function with an example password:
test("een willekeurig password in verifyPassword", () => {
    expect(verifyPassword("henkie")).toBe(false);
});