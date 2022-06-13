function foo(type) {
    console.log('函数开始执行')
    if (type === 0) {
        throw new TypeError('类型错误')
        // throw new SyntaxError('语法错误')
        // throw new RangeError('界限错误')
    }
    console.log('函数结束执行')
}

foo(0)