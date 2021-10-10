import Promise from "./promise"


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("success")
    }, 5)
});

promise.then((resolveData) => {
    console.log("resolve:", resolveData)
}, (rejectData) => {
    console.log("reject", rejectData)
}).then((resolveData) => {
    console.log("resolve2:", resolveData)
}, (rejectData) => {
    console.log("reject2", rejectData)
})


