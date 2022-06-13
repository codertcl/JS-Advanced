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
}

// obj.inner = obj

const info = JSON.parse(JSON.stringify(obj))
console.log(info === obj)
obj.friend.name = "james"
console.log(info)
