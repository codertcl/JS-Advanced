function requestData(url) {
    return new Promise((resolve, reject) => {
        // 模拟网络请求
        setTimeout(() => {
            resolve(url)
        }, 500);
    })
}


//// 需求:
// // 1> url: '冰冰' -> res: 冰冰
// // 2> url: res + "a" -> res: 冰冰a
// // 3> url: res + "b" => res: 冰冰ab


////1多次回调
// requestData("冰冰").then((res) => {
//     requestData(res + 'a').then((res) => {
//         requestData(res + 'b').then((res) => {
//             console.log(res)
//         }, (err) => {
//             console.log(err)
//         })
//     }, (err) => {
//         console.log(err)
//     })
// }, (err) => {
//     console.log(err)
// })

////2Promise.then()返回值
// requestData('冰冰').then((res) => {
//     console.log(res)
//     return requestData(res + 'a')
// }).then((res) => {
//     console.log(res)
//     return requestData(res + 'b')
// }).then((res) => {
//     console.log(res)
// })


/////3Promise+Generator实现
function* getData() {
    const url1 = yield requestData('冰冰')
    console.log(url1)
    const url2 = yield requestData(url1 + 'a')
    console.log(url2)
    const url3 = yield requestData(url2 + 'b')
    console.log(url3)
}


////3:嵌套generator.next()
// const generator = getData()
// generator.next().value.then((res) => {
//     console.log(res)
//     generator.next(res).value.then((res) => {
//         console.log(res)
//         generator.next(res ).value.then((res) => {
//             console.log(res)
//         })
//     })
// })


////4递归执行generator.next()
// function execGenerator(genFn) {
//     const generator = getData()
//
//     function exec(res) {
//         const result = generator.next(res)
//         if (result.done) {
//             return result.value
//         }
//         result.value.then((res) => {
//             exec(res)
//         })
//     }
//
//     exec()
// }
//
// execGenerator()


////5使用第三方包
const co = require('co')
co(getData)


////6 使用async await
async function getData2() {
    const res1 = await requestData("冰冰")
    const res2 = await requestData(res1 + "a")
    const res3 = await requestData(res2 + "b")
    const res4 = await requestData(res3 + "c")
    console.log(res4)
}

getData2()
