const s1 = Symbol()
const s2 = Symbol()

const obj = {
    name: "why",
    friend: {
        name: "kobe"
    },
    color: ['red', 'pink'],
    foo: function () {
        console.log("foo function")
    },//丢失
    [s1]: "abc",//丢失
    s2: s2,//丢失
    hh: NaN,//null
    isInfinite: 1.7976931348623157E+10308,
    minusInfinity: -1.7976931348623157E+10308,
    regexp: '/0+/',//{}
    undef: undefined,////丢失
    nu: null,
    date: new Date(),//时间对象=>字符串的形式；
    nan: NaN,//null
    inf: Infinity,//null
    set: new Set(["aaa", "bbb", "ccc"]),
    map: new Map([["aaa", "abc"], ["bbb", "cba"]]),
    err: new Error('error message'),//{}
}

// obj.inner = obj

function isObject(value) {
    const valueType = typeof value
    return (value !== null) && (valueType === "object" || valueType === "function")
}

function deepClone(originValue) {
    // 判断是否是一个Set类型
    if (originValue instanceof Set) {
        return new Set([...originValue])
    }

    // 判断是否是一个Map类型
    if (originValue instanceof Map) {
        return new Map([...originValue])
    }

    // 判断如果是Symbol的value, 那么创建一个新的Symbol
    //// console.log(fun instanceof 'symbol') 报错
    //instanceof只适合判断对象类型
    if (typeof originValue === "symbol") return Symbol(originValue.description)


    // 判断如果是函数类型, 那么直接使用同一个函数 直接返回
    // console.log(fun instanceof 'function') //报错
    if (typeof originValue === "function") {
        return originValue
    }

    if (originValue instanceof Date) return new Date(originValue)
    if (originValue instanceof RegExp) return new RegExp(originValue)
    if (originValue instanceof Error) return new Error(originValue)

    // 判断传入的originValue是否是一个对象类型
    if (!isObject(originValue)) {
        return originValue
    }

    // 判断传入的对象是数组, 还是对象
    const newObject = Array.isArray(originValue) ? [] : {}
    for (const key in originValue) {
        newObject[key] = deepClone(originValue[key])
    }

    // 对Symbol的key进行特殊的处理
    const symbolKeys = Object.getOwnPropertySymbols(originValue)
    for (const sKey of symbolKeys) {
        // const newSKey = Symbol(sKey.description)
        newObject[sKey] = deepClone(originValue[sKey])
    }

    return newObject
}

debugger
const newObj = deepClone({[s1]:'a'})
console.log(newObj === obj)

console.log(newObj)

// //instanceof function () {} //报错
// //instanceof Symbol()//报错
// console.log(typeof function () {})//function
// console.log(typeof Symbol())//symbol
// console.log(typeof new Map())//object
// console.log(typeof new Set())//object
//
// console.log(new Date() instanceof Date) //true
// console.log(typeof new Date())//object
// console.log(new Error() instanceof Error)//true
// console.log(typeof new Error())////object
// console.log(new RegExp(/\d/) instanceof RegExp)////true
// console.log(typeof new RegExp(/\d/))////object
