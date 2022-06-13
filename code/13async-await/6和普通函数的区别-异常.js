//async异步函数返回值为Promise
async function f1() {
    console.log('start')
    console.log('中间代码')
    console.log('end')
    // 异步函数中的异常, 会被作为异步函数返回的Promise的reject值的
    throw new Error('error here')
    //无法执行
    console.log('后续代码')
}

//
f1().catch(err=>{
    console.log('err',err)
})

