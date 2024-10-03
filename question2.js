// Question 2: Promises
// ● Given the script file callbacks.js, write a script that does the following:
// o Create a method resolvedPromise that is similar to
// delayedSuccess and resolves a message after a timeout of 500ms.
// o Create a method rejectedPromise that is similar to
// delayedException and rejects an error message after a timeout of
// 500ms.
// o Call both promises separately and handle the resolved and reject
// results and then output to the console



// callbacks.js
const delayedSuccess = () => {
    setTimeout(() => {
        let success = { message: 'delayed success!' };
        console.log(success);
    }, 500);
};

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
        } catch (e) {
            console.error(e);
        }
    }, 500);
};

// New Promise-based methods
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const success = { message: 'delayed success!' };
            resolve(success);
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            const error = { error: 'delayed exception!'};
            reject(error);
        }, 500);
    });
};

// Call both promises separately and handle the results
resolvedPromise()
    .then(result => console.log(result)) 
    .catch(error => console.error(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error)); 