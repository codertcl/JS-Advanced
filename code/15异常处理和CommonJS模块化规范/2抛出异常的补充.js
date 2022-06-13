class newError{
    constructor(errCode, errorMessage) {
        this.errCode = errCode
        this.errorMessage = errorMessage
    }
}

function foo(type) {
    console.log('函数开始执行')
    if (type === 0) {
        //1抛出基本数据类型
        // throw 'err'

        //2抛出对象
        // throw {errorCode:101,errorMessage:'type不能为0'}

        // 3:创建类，并抛出该类创建的对象
        // throw new newError(-101,'type不能为0')

        //4:使用内置的Error类
        let error=new Error('type不能为0')
        console.log('error.message',error.message)
        //error.name默认为Error
        console.log('error.name',error.name)
        error.name='冰冰'
        console.log('error.name',error.name)

        console.log('error.stack',error.stack)
        console.log(error)
        throw error
    }
    console.log('函数结束执行')
}

foo(0)
