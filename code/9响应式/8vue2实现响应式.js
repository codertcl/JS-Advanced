//表示当前添加的依赖函数
let activeFn = null

class Depend {
    constructor() {
        //避免一个函数内多次获取设置数据而被添加多次
        this.reactiveFns = new Set()
    }

    // addDepend(activeFn) {
    //     this.reactiveFns.add(activeFn)
    // }

    //添加依赖函数到reactiveFns数组中
    depend() {
        if (activeFn) {
            this.reactiveFns.add(activeFn)
        }
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


function watchFn(fn) {
    activeFn = fn
    //执行fn会访问objProxy上的内容 从而触发objProxy上的get操作
    //其将该依赖函数添加到该属性的依赖数组中
    fn()
    activeFn = null
}

//使用 Object.defineProperty实现响应式
function reactive(obj) {
    Object.keys(obj).forEach(key => {
        let val = obj[key]
        Object.defineProperty(obj, key, {
            get() {
                const depend = getDepend(obj, key)
                //添加依赖函数到reactiveFns数组中
                depend.depend()
                return val
            },
            set(v) {
                const depend = getDepend(obj, key)
                //添加依赖函数到reactiveFns数组中
                depend.notify()
                val = v
            }
        })
    })
    return obj
}

const objProxy = reactive(obj)

const infoProxy = reactive(info)

watchFn(() => {
    console.log(objProxy.name + '-------')
})

watchFn(() => {
    console.log(infoProxy.address + '-------')
})

objProxy.name = '慧玲'
infoProxy.address = '武汉'