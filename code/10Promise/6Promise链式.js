const promise = new Promise((resolve, reject) => {
    resolve('aaa')
})
promise.then((res) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('b')
        }, 1000)
    })
}).then(res => {
    //res b
    console.log('res', res)
})


//// 3> 如果返回的是一个对象, 并且该对象实现了thenable
promise.then((res) => {
    return {
        then:function (resolve,reject) {
            resolve(222)
        }
    }
}).then(res => {
    //res b
    console.log('res', res)
})