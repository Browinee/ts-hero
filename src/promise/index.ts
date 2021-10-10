import Promise from "./promise"


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("success")
    }, 5)
});

promise.then((resolveData) => {
    console.log("then 1 resolve:", resolveData)
    return "ok"
}, (rejectData) => {
    console.log("reject", rejectData)
})

