// 1.setTimeout
// function hySetTimeout(fn, duration) {
//   fn.call("abc")
// }
//
// hySetTimeout(function() {
//   console.log(this) // [String: 'abc'] "abc"包装为String对象类型
// }, 300)
//
// setTimeout(function() {
//   console.log(this) // window
// }, 200)

// 3.数组.forEach/map/filter/find(callback, this)
var names = ["abc"]
// 如果 callbackFn 是非严格模式，原始 this 值将被包装为对象
names.forEach(function(item) {
  // this指向第二个参数包装后的String对象 字符串111
  console.log(item, this)
}, "111")
names.map(function(item) {
  // 没有设置第二个参数，则this指向全局对象
  console.log(item, this)
})
