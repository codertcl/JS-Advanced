function requestData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
            // reject(1)
        }, 2000)

    })
}

async function foo() {
    //await 后状态为rejected时，通过catch来处理
    const res = await requestData().catch(err=>{
        console.log('err',err)
    })
    console.log('res',res)
}

foo()
// res 1