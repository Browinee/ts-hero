import Promise from "./promise"

// test then
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     resolve("success")
//     }, 5)
// });
//
// promise.then((resolveData) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(1)
//         }, 5)
//     });
// }, (rejectData) => {
//     console.log("reject", rejectData)
// })


// test Promise.all
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("promise1")
    }, 5)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise2")
    }, 1000)
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise3")
    }, 10)
});

Promise.all([promise1, promise2, promise3]).then((resolvedValue) => {
    console.log("Promise.all resolved", resolvedValue)
}, (rejectedValue) => {
    console.log("Promise.all rejected", rejectedValue)
});
