function* f(n1) {
    console.log('函数开始执行')
    console.log('n1',n1)//100
    const n2 = yield n1
    console.log('n2',n2)//undefined
    const n3 = yield n2
    console.log('n3',n3)//undefined
    const n4 = yield n3
    console.log('n4',n4)// undefined
    console.log('函数执行结束')
    //作为next执行返回值内的value值
    return n3
}

const generator = f(100)
// yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
console.log('返回值', generator.next());//// 返回值 { value: 100, done: false }
console.log('返回值', generator.next());//返回值 { value: undefined, done: false }
console.log('返回值', generator.next());//返回值 { value: undefined, done: false }
console.log('返回值', generator.next());//返回值 { value: undefined, done: true }

// 函数开始执行
// n1 100
// 返回值 { value: undefined, done: false }
// n2 undefined
// 返回值 { value: undefined, done: false }
// n3 undefined
// 返回值 { value: undefined, done: false }
// n4 undefined
// 函数执行结束
// 返回值 { value: undefined, done: true }

