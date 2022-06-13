const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
        // reject(1)
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 2000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(3)
        reject(3)
    }, 3000)
})


Promise.allSettled([p1, p2, p3]).then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})