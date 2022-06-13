// console.log(Object.getOwnPropertyDescriptors(Promise.prototype))


//1:Promise.then()可以被多次调用
const promise = new Promise((resolve, reject) => {
    resolve('aaa')
})
promise.then((res) => {
    console.log('res', res)
}, (err) => {
    console.log("rej", err)
})
promise.then((res) => {
    console.log('res2', res)
}, (err) => {
    console.log("rej2", err)
})

//
// //2:Promise.then()可以有返回值
////下面的代码使用then方法，依次指定了两个回调函数。第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。
// promise.then((res) => {
//     //返回值会被转换为Promise对象,并执行resolve(返回值) 后面的Promise.then()方法则作为其回调函数
//     return  '1'
// }, (err) => {
//     console.log("rej3", err)
// })
//     //该Promise已与最开始的Promise无关
//     .then((res) => {
//     console.log('res3', res)//res3 1
// }, (err) => {
//     console.log("rej3", err)
// })

