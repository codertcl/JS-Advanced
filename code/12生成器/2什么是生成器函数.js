function* f() {
    console.log('函数开始执行')
    console.log(1)
    yield
    console.log(2)
    yield
    console.log(3)
    yield
    console.log(4)
    console.log('函数执行结束')
}

const generator = f()
generator.next()
console.log('第二段代码执行')
generator.next()
console.log('第三段代码执行')
generator.next()