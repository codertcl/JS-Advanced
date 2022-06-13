const newPromise = new Promise((resolve, reject) => {
    // resolve('succ')
    reject('err')
})


const promise = new Promise((resolve, reject) => {
    //resolve传入参数为Promise对象时，该Promise状态由传入的Promise对象的状态决定
    resolve(newPromise)
})
promise.then((res) => {
    console.log('res',res)
}, (err) => {
    console.log("rej",err)
})