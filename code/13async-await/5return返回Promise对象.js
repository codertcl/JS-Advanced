//async异步函数返回值为Promise
async function f1() {
    console.log('start')
    console.log('中间代码')
    console.log('end')
    //返回thenable 执行内部代码 参数作为返回的Promise回调函数的参数
    return new Promise((resolve, reject) => {
        // resolve('1')
        reject('1')
    })
}

const promise = f1()

//return内容为resolve回调函数的参数
promise.then(res => {
    console.log('res', res)
    console.log('poromise function 执行')
}, err => {
    console.log('err', err)
})