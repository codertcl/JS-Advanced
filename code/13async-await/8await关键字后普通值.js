async function foo() {
    //await 后为普通值 直接返回该值
    const res = await [1,2,3,4,5]
    console.log('res',res)
}

foo()
//res [ 1, 2, 3, 4, 5 ]