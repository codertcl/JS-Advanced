async function foo() {
    //await 后为普通值 直接返回该值
    const res = await {
        then: function (resolve, reject) {
            resolve(111)
            // reject(111)
        }
    }
    console.log('res', res)
}

foo()
//res 111