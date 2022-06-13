const name = "why"
const age = 18
function sum(num1, num2) {
  return num1 + num2
}

// 源码
// module.exports = {}
// exports = module.exports

// 第二种导出方式
// exports.name = name
// exports.age = age
// exports.sum = sum

// 这种代码不会进行导出
// 因为创建了一个新对象,exports存储该对象地址,module.exports还是指向原来的空对象,所以导出失败
// exports = {
//   name,
//   age,
//   sum
// }

// 这种代码不会进行导出,前半部分正常,但最后又将module.exports指向新的空对象,所以导出失败
exports.name = name
exports.age = age
exports.sum = sum
module.exports = {}

// 最终能导出的一定是module.exports
