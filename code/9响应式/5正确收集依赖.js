class Depend {
    constructor() {
        this.reactiveFns = []
    }

    addDepend(reactiveFn) {
        this.reactiveFns.push(reactiveFn)
    }

    notify() {
        this.reactiveFns.forEach(fn => {
            fn()
        })
    }
}

// 对象的响应式
const obj = {
    name: "why", // depend对象
    age: 18 // depend对象
}

// 对象的响应式
const info = {
    address: '广州'
}

// 封装一个响应式的函数

const targetMap = new WeakMap()

function getDepend(target, key) {
    let map = targetMap.get(target)
    if (!map) {
        map = new Map()
        targetMap.set(target, map)
    }
    //根据key获取depend
    let depend = map.get(key)
    if (!depend) {
        depend = new Depend()
        map.set(key, depend)
    }
    return depend
}

//表示当前添加的依赖函数
let reactiveFn = null

function watchFn(fn) {
    reactiveFn = fn
    //执行fn会访问objProxy上的内容 从而触发objProxy上的get操作
    //其将该依赖函数添加到该属性的依赖数组中
    fn()
    reactiveFn = null
}

// 监听对象的属性变量: Proxy(vue3)/Object.defineProperty(vue2)
const objProxy = new Proxy(obj, {
    get: function (target, key, receiver) {
        //获取depend
        const depend = getDepend(target, key)
        depend.addDepend(reactiveFn)
        return Reflect.get(target, key, receiver)
    },
    set: function (target, key, newValue, receiver) {
        Reflect.set(target, key, newValue, receiver)
        const depend = getDepend(target, key)
        depend.notify()
    }
})

watchFn(function () {
    console.log(objProxy.name)
})

watchFn(function () {
    console.log(objProxy.name, "demo function -------")
})

watchFn(function () {
    console.log(objProxy.age, "age 发生变化是需要执行的----1")
})

objProxy.name = '慧玲'
objProxy.age = 2