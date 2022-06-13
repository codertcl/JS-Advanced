// async function f() {
//     await Promise.reject('出错了');
// }
//
// f()
//     .then(v => console.log('resolve',v))
//     .catch(e => console.log('err',e))
// //  err 出错了


// //任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行。
// async function f() {
//     await Promise.reject('出错了');
//     await Promise.resolve('hello world'); // 不会执行
// }
//
// f().then(res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })


// async function f() {
//     try {
//         await Promise.reject('出错了');
//     } catch (e) {
//     }
//     return await Promise.resolve('hello world');
// }
//
// f().then(v => console.log(v), err => console.log(err))
// // hello world


// async function f() {
//     await Promise.reject('出错了')
//         .catch(e => console.log(e));
//     return await Promise.resolve('hello world');
// }
//
// f()
//     .then(v => console.log(v))
// // 出错了
// // hello world


// async function f() {
//     try {
//         await new Promise(function (resolve, reject) {
//             throw new Error('出错了');
//         });
//     } catch(e) {
//     }
//     return await('hello world');
// }
//
// f().then(v => console.log(v), err => console.log(err))
// // hello world



// async function main() {
//     try {
//         const val1 = await firstStep();
//         const val2 = await secondStep(val1);
//         const val3 = await thirdStep(val1, val2);
//
//         console.log('Final: ', val3);
//     }
//     catch (err) {
//         console.error(err);
//     }
// }
//
// f().then(v => console.log(v), err => console.log(err))

//
// const p1 = new Promise((resolve, reject) => {
//     resolve('hello');
// })
//     .then(result => result)
//     .catch(e => e);
//
// const p2 = new Promise((resolve, reject) => {
//     throw new Error('报错了');
// })
//     .then(result => result)
//     .catch(e => e);
//
// Promise.all([p1, p2])
//     .then(result => console.log(result))
//     .catch(e => console.log(e));
// // ["hello", Error: 报错了]



// async function dbFuc(db) {
//     let docs = [{}, {}, {}];
//
//     // 报错
//     docs.forEach(function (doc) {
//         await db.post(doc);
//     });
// }


async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));

  let results = await Promise.all(promises);
  console.log(results);
}
// // 或者使用下面的写法
async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));

  let results = [];
  for (let promise of promises) {
    results.push(await promise);
  }
  console.log(results);
}