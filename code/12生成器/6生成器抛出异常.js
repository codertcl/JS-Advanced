function* foo() {
    console.log("代码开始执行~")

    try {
        yield 1
    } catch (error) {
        console.log("捕获到异常情况:", error)
        yield "abc"
    }
    console.log("第二段代码继续执行")
    yield 2
    console.log("代码执行结束~")
}

const generator = foo()

const result = generator.next()
console.log(result)
if (result.value !== 2) {
    console.log(generator.throw("error message"));
}
//代码开始执行~
// { value: 1, done: false }
// 捕获到异常情况: error message
// { value: 'abc', done: false }