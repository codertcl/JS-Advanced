const promise = new Promise((resolve, reject) => {
    reject('aaa')
    console.log(1)//1
    throw new Error('error')
})
// promise.then((res) => {
//     console.log('res',res)
// }).catch(err => {
//     console.log('err', err)
// })

promise.then((res) => {
    console.log('res',res)
},(err => {
    // catch 返回值 返回Promise对象 并执行resolve(参数)
    console.log('err', err)
    return 1111
})).then((res) => {
    console.log('res2',res)
},(err => {
    console.log('err2', err)
    return 1
}))