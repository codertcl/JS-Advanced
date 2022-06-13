const s1 = Symbol()
const s2 = Symbol()
var obj = {
    id: 1,
    hobbies: {
        hobby1: '1',
        hobby2: '2'
    },
    msg: {
        age: 18
    },
    color: ['red', 'pink'],
    say: function () {
        console.log('say')
    },
    regexp: '/0+/',
    undef: undefined,
    nu: null,
    date: new Date(),
    nan: NaN,
    inf: Infinity,
    [s1]: "abc",
    s2: s2,//正常
    set: new Set(["aaa", "bbb", "ccc"]),
    map: new Map([["aaa", "abc"], ["bbb", "cba"]]),
    err: new Error('error message'),
}
//循环引用报错
// obj.obj = obj

function deepClone(obj) {
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof RegExp) return new RegExp(obj)
    if (obj instanceof Error) return new Error(obj)
    // 判断是否是一个Set类型(否则拷贝为空)
    if (obj instanceof Set) return new Set([...obj])

    // 判断是否是一个Map类型(否则拷贝为空)
    if (obj instanceof Map) return new Map([...obj])

    //特殊处理值为symbol类型的属性 否则拷贝前后该属性值地址相同(浅拷贝)
    //ES2019 提供了一个实例属性description，直接返回 Symbol 的描述。
    //const sym = Symbol('foo');  sym.description // "foo"
    if (typeof obj === 'symbol') return Symbol(obj.description)

    if (obj === null || typeof obj !== 'object') return obj

    let newObj = Array.isArray(obj) ? [] : {};
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            newObj[i] = deepClone(obj[i])
        }
    }
    // 对Symbol的key进行特殊的处理
    //  在给定对象自身上找到的所有 Symbol 属性的数组
    const symbolKeys = Object.getOwnPropertySymbols(obj)
    for (const sKey of symbolKeys) {
        const newSKey = Symbol(sKey.description)
        newObj[newSKey] = deepClone(obj[sKey])
    }
    return newObj;
}
var o = deepClone(obj);
console.log(o)
console.log(o.s1 === obj.s1)//TODO:键为symbol类型 为浅拷贝
// o.say()
