// var handler = {
//     has (target, key) {
//         if (key[0] === '_') {
//             return false;
//         }
//         return key in target;
//     }
// };
// var target = { _prop: 'foo', prop: 'foo' };
// var proxy = new Proxy(target, handler);
// console.log('_prop' in proxy); // false
// console.log('prop' in proxy); // false


// var obj = { a: 10 };
// //Object.preventExtensions()方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。
// Object.preventExtensions(obj);
//
// var p = new Proxy(obj, {
//     has: function(target, prop) {
//         return false;
//     }
// });
//
// 'a' in p // TypeError is thrown



let stu1 = {name: '张三', score: 59};
let stu2 = {name: '李四', score: 99};

let handler = {
    has(target, prop) {
        if (prop === 'score' && target[prop] < 60) {
            console.log(`${target.name} 不及格`);
            return false;
        }
        return prop in target;
    }
}

let oproxy1 = new Proxy(stu1, handler);
let oproxy2 = new Proxy(stu2, handler);

'score' in oproxy1
// 张三 不及格
// false

'score' in oproxy2
// true

for (let a in oproxy1) {
    console.log(oproxy1[a]);
}
// 张三
// 59

for (let b in oproxy2) {
    console.log(oproxy2[b]);
}
// 李四
// 99