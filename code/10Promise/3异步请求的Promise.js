function requestData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === '冰冰') {
                resolve(1)
            } else {
                reject(2)
            }
        }, 100)
    })
}

const promise = requestData('冰q冰')
// promise.then((res) => {
//     console.log(res)
// }, (err) => {
//     console.log(err)
// })

promise.then((res) => {
    console.log(res)
})

promise.catch((err) => {
    console.log(err)
})