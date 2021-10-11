import Promise from "./promise"


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("success")
    }, 5)
});

promise.then((resolveData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1)
        }, 5)
    });
}, (rejectData) => {
    console.log("reject", rejectData)
})

