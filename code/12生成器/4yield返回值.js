function* f() {
    console.log('函数开始执行')
    console.log(1)
    //yield 后可以添加函数 表达式等
    yield () => {
        return 1
    }
    console.log(2)
    yield 2
    console.log(3)
    yield 3
    console.log(4)
    console.log('函数执行结束')
    //作为next执行返回值内的value值
    return 4
}

const generator = f()
console.log('返回值', generator.next());
console.log('返回值', generator.next());
console.log('返回值', generator.next());
console.log('返回值', generator.next());
// 函数开始执行
// 1
// 返回值 { value: [Function (anonymous)], done: false }
// 2
// 返回值 { value: 2, done: false }
// 3
// 返回值 { value: 3, done: false }
// 4
// 函数执行结束
// 返回值 { value: 4, done: true }
