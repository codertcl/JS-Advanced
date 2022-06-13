// async function bar() {
//   console.log("22222")
//   return new Promise((resolve) => {
//     resolve()
//   })
// }
//
// async function foo() {
//   console.log("111111")
//
//   await bar()
//
//   console.log("33333")
// }
//
// foo()
// console.log("444444")
// //1 2 4 3

async function async1 () {
  console.log('async1 start')
  await async2();
  //async 函数会返回一个 Promise 对象，如果在函数中 return 一个直接量（普通变量）
  // async 会把这个直接量通过 Promise.resolve() 封装成 Promise 对象。如果你返回了promise那就以你返回的promise为准。
  //所以async1 end会被添加到微任务队列
  console.log('async1 end')
}

async function async2 () {
  console.log('async2')
}

console.log('script start')

setTimeout(function () {
  console.log('setTimeout')
}, 0)

async1();

new Promise (function (resolve) {
  console.log('promise1')
  resolve();
}).then (function () {
  console.log('promise2')
})

console.log('script end')