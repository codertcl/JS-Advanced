define(["foo"], function(foo) {
  console.log("--------")
  //依赖foo模块时，第一个参数的数组中添加foo,则下面的代码可以省略
  // require(["foo"], function(foo) {
  //   console.log("bar:", foo)
  // })

  console.log("bar:", foo)
})
