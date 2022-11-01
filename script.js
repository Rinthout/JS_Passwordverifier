// Utility functions (5 requiremensts/conditions)
const isNotNull = str => str !== null;
const hasRightLength = str => str.length <= 8;
const hasUpperCaseCharacter = str => str.toLowerCase() !== str;
const hasLowerCaseCharacter = str => str.toUpperCase() !== str;
const hasDigit = str => /\d/.test(str);

// 1. At least 3 of the above conditions are true
// 2.Condition 4 is true (so that must always be true)
const minimumConditionsReached = conditions => {
    //conditions is an array of booleans
    const trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password),
    ];
    console.log(conditions);
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    verifyPassword,
    isNotNull,
    hasRightLength,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
};

