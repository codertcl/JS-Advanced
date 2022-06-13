// var target = function () { return 'I am the target'; };
// var handler = {
//     apply: function () {
//         return 'I am the proxy';
//     }
// };
//
// var p = new Proxy(target, handler);
//
// //变量p是 Proxy 的实例，当它作为函数调用时（p()）
// // 就会被apply方法拦截，返回一个字符串。
// console.log(p());
// // "I am the proxy"


var twice = {
    apply (target, ctx, args) {
        console.log(arguments)
        return Reflect.apply(...arguments) * 2;
    }
};
function sum (left, right) {
    return left + right;
}
var proxy = new Proxy(sum, twice);
console.log(proxy(1, 2)); // 6
console.log(proxy.call(null, 5, 6)); // 22
console.log(proxy.apply(null, [7, 8])); // 30