
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


// const handler = {
//     get (target, key) {
//         invariant(key, 'get');
//         return target[key];
//     },
//     set (target, key, value) {
//         invariant(key, 'set');
//         target[key] = value;
//         return true;
//     }
// };
// function invariant (key, action) {
//     if (key[0] === '_') {
//         throw new Error(`Invalid attempt to ${action} private "${key}" property`);
//     }
// }
// const target = {};
// const proxy = new Proxy(target, handler);
// proxy._prop
// // Error: Invalid attempt to get private "_prop" property
// proxy._prop = 'c'
// // Error: Invalid attempt to set private "_prop" property


// const handler = {
//     set: function(obj, prop, value, receiver) {
//         obj[prop] = receiver;
//         return true;
//     }
// };
// const proxy = new Proxy({}, handler);
// proxy.foo = 'bar';
// console.log(proxy.foo === proxy); // true


// const handler = {
//     set: function(obj, prop, value, receiver) {
//         obj[prop] = receiver;
//         return true;
//     }
// };
// const proxy = new Proxy({}, handler);
// const myObj = {};
// Object.setPrototypeOf(myObj, proxy);
//
// myObj.foo = 'bar';
// console.log(myObj.foo === myObj); // true
// console.log(myObj.foo === proxy); // false
//
// // 上面代码中，设置myObj.foo属性的值时，myObj并没有foo属性，因此引擎会到myObj的原型链去找foo属性
// // myObj的原型对象proxy是一个 Proxy 实例，设置它的foo属性会触发set方法。
// // 这时，第四个参数receiver就指向原始赋值行为所在的对象myObj(指的是原始的操作行为所在的那个对象即myObj)


const obj = {};
Object.defineProperty(obj, 'foo', {
    value: 'bar',
    writable: false
});

const handler = {
    set: function(obj, prop, value, receiver) {
        obj[prop] = 'baz';
        return true;
    }
};

const proxy = new Proxy(obj, handler);
proxy.foo = 'baz';
console.log(proxy.foo); // "bar"