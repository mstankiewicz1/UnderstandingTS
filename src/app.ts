// const names: Array<string> = [];
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done');
//     }, 2000);
// });


// promise.then(data => {
//     // data.split(' ');
// });

function merge(objA: object, objB: object) {
    return Object.assign(objA, objB);
};