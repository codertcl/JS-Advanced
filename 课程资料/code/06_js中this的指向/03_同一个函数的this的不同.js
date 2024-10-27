// this指向什么, 跟函数所处的位置是没有关系的
// 跟函数被调用的方式是有关系

function foo() {
  console.log(typeof this, this) //
}

// 1.直接调用这个函数
// 浏览器中输出 window, Node.js 中输出 global, 在严格模式下输出 undefined
foo()

// 2.创建一个对象, 对象中的函数 this指向foo
var obj = {
  name: 'why',
  foo: foo
}

obj.foo()

// 3.apply调用
// this指向包装了String类型的字符串abc
foo.apply("abc")
