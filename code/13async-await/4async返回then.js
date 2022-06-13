// //async异步函数返回值为Promise
// async function f1() {
//     console.log('start')
//     console.log('中间代码')
//     console.log('end')
//     //返回thenable 执行内部代码 参数作为返回的Promise回调函数的参数
//     return {
//         then: function (resolve, reject) {
//             // resolve('1')
//             reject('1')
//         }
//     }
// }
//
// const promise = f1()
//
// //return内容为resolve回调函数的参数
// promise.then(res => {
//     console.log('res', res)
//     console.log('poromise function 执行')
// }, err => {
//     console.log('err', err)
// })


// class Sleep {
//     constructor(timeout) {
//         this.timeout = timeout;
//     }
//     then(resolve, reject) {
//         const startTime = Date.now();
//         setTimeout(
//             () => resolve(Date.now() - startTime),
//             this.timeout
//         );
//     }
// }
//
// (async () => {
//     const sleepTime = await new Sleep(1000);
//     console.log(sleepTime);
// })();
// // 1000


// function sleep(interval) {
//     return new Promise(resolve => {
//         setTimeout(resolve, interval);
//     })
// }
//
// // 用法
// async function one2FiveInAsync() {
//     for(let i = 1; i <= 5; i++) {
//         console.log(i);
//         await sleep(1000);
//     }
// }
//
// one2FiveInAsync();


