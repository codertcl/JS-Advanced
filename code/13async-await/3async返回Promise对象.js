// //async异步函数返回值为Promise
//
// async function f1() {
//     console.log('start')
//     console.log('中间代码')
//     console.log('end')
//     return 123
// }
//
// const promise = f1()
//
// //return内容为resolve回调函数的参数
// promise.then(res => {
//     console.log(res)
//     console.log('poromise function 执行')
// })


async function f() {
    throw new Error('出错了');
}

f().then(
    v => console.log('resolve', v),
    e => console.log('reject', e)
)
//reject Error: 出错了