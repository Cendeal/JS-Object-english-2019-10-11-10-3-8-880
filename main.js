/**
 * Q1
 */
// Create a null object and set its variable name as user;
let user = {}
// Add a name attribute and set its value as John;
user.name = 'John'
// Add a surname attribute and set its value as Mike;
user.surname = 'Mike'
// Modify the value of name attribute as Peter;
user.name = 'Peter'
// Delete name attribute of user.
delete user.name

/**
 * Q2
 */
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

function calculatePieces(object) {
    let total = 0;
    Object.keys(object).forEach(item => {
        total += object[item]
    });
    return total
}

console.log(calculatePieces(fruit))