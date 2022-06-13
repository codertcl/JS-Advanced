//ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，
// 或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）
// Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。
// 执行这个函数，就会返回一个遍历器。至于属性名Symbol.iterator，它是一个表达式，
// 返回Symbol对象的iterator属性，这是一个预定义好的、类型为 Symbol 的特殊值

const iterableObj = {
    names: ['冰冰', '慧玲', '庄晓莹'],
    [Symbol.iterator]: function () {
        let index = 0;
        return {
            // 箭头函数不绑定this this在运行时指向父级作用域this
            next: () => {
                if (index < this.names.length) {
                    return {done: false, value: this.names[index++]}
                } else {
                    return {done: true, value: undefined}
                }
            }
        }
    }
}
const iterator = iterableObj[Symbol.iterator]()
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//item的done属性为FALSE即停止遍历
for (let item of iterableObj) {
    console.log(item)
}
// 冰冰
// 慧玲
// 庄晓莹