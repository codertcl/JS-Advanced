const s1 = Symbol()
const s2 = Symbol()

const obj = {
    name: "why",
    friend: {
        name: "kobe"
    },
    foo: function() {
        console.log("foo function")
    },//丢失
    [s1]: "abc",//丢失
    s2: s2,//丢失
    hh: NaN,//null
    isInfinite: 1.7976931348623157E+10308,
    minusInfinity: -1.7976931348623157E+10308,
    regexp: '/0+/',//{}
    err: new Error('error message'),//{}
    undef: undefined,////丢失
    nu: null,
    date: new Date(),//时间对象=>字符串的形式；
    nan: NaN,//null
    inf: Infinity,//null
    set: new Set(["aaa", "bbb", "ccc"]),
    map: new Map([["aaa", "abc"], ["bbb", "cba"]])
}

obj.inner = obj


function isObject(value) {
    const valueType = typeof value
    return (value !== null) && (valueType === "object" || valueType === "function")
}

function deepClone(originValue) {
    // 判断传入的originValue是否是一个对象类型
    if (!isObject(originValue)) {
        return originValue
    }

    const newObject = {}
    for (const key in originValue) {
        newObject[key] = deepClone(originValue[key])
    }
    return newObject
}


const newObj = deepClone(obj)
console.log(newObj === obj)

console.log(newObj)
