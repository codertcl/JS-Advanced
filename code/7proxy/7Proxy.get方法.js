////Proxy 实例也可以作为其他对象的原型对象。
// var proxy = new Proxy({}, {
//     get: function(target, propKey) {
//         return 35;
//     }
// });
//
// let obj = Object.create(proxy);
// console.log(obj.time); // 35


////get方法可以继承。
// let proto = new Proxy({}, {
//     get(target, propertyKey, receiver) {
//         console.log('GET ' + propertyKey);
//         return target[propertyKey];
//     }
// });
//
// let obj = Object.create(proto);
// obj.foo // "GET foo"

// const proxy = new Proxy({}, {
//     get: function(target, key, receiver) {
//         return receiver;
//     }
// });
//
// const d = Object.create(proxy);
// //d对象本身没有a属性，所以读取d.a的时候，会去d的原型proxy对象找
// // 这时，receiver就指向d，代表原始的读操作所在的那个对象。
// console.log(d.a === d); // true
// console.log(proxy.a === proxy); // true
// console.log(d.a === proxy.a); // false
// console.log(d.a === proxy); // false
// console.log(d === proxy); // false


// const target = Object.defineProperties({}, {
//     foo: {
//         value: 123,
//         // writable configurable默认值都为FALSE
//         // 二者与一个为TRUE则可以进行修改属性值
//         writable: true,
//         configurable : false
//     },
// });
//
// const handler = {
//     get(target, propKey) {
//         return 'abc';
//     }
// };
//
// const proxy = new Proxy(target, handler);
//
// //TypeError: 'get' on proxy: property 'foo' is a read-only and non-configurable data property
// //on the proxy target but the proxy did not return its actual value (expected '123' but got 'abc')
// console.log(proxy.foo);

// let validator = {
//     set: function(obj, prop, value) {
//         if (prop === 'age') {
//             if (!Number.isInteger(value)) {
//                 throw new TypeError('The age is not an integer');
//             }
//             if (value > 200) {
//                 throw new RangeError('The age seems invalid');
//             }
//         }
//
//         // 对于满足条件的 age 属性以及其他属性，直接保存
//         obj[prop] = value;
//         return true;
//     }
// };
//
// let person = new Proxy({}, validator);
//
// person.age = 100;
//
// console.log(person.age); // 100
// person.age = 'young' // 报错
// person.age = 300 // 报错