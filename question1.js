// Question 1: ES6 Features
// ● Create a script with a function named lowerCaseWords that takes a
// mixed array as input.
// The function will do the following.
// o return a promise that is resolved or rejected
// o filter the non-strings and lower case the remaining words 

function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
     
        if (!Array.isArray(mixedArray)) {
            return reject(new Error("Input must be an array"));
        }
        
        const result = mixedArray
            .filter(item => typeof item === 'string') 
            .map(item => item.toLowerCase()); 

        resolve(result);
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));
