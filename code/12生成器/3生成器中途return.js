function* f() {
    console.log('函数开始执行')
    console.log(1)
    //执行return后，done属性值变成TRUE，生成器就停止执行
    return 1
    yield
    console.log(2)
    return 2
    yield
    console.log(3)
    return 3
    yield
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
//函数开始执行
// 1
// 返回值 { value: 1, done: true }
// 返回值 { value: undefined, done: true }
// 返回值 { value: undefined, done: true }
// 返回值 { value: undefined, done: true }