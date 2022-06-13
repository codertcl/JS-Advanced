Promise.resolve().then(() => {
  console.log(0);

  //1:0 1 4 2 3 5 6
  //相当于Promise.resolve(4)
  //  return 4


  //2:
  return {
    then: function(resolve) {
      resolve(4)
    }
  }

  // return Promise.resolve(4)

}).then((res) => {
  console.log(res)
})

Promise.resolve().then(() => {
  console.log(1);
//  存在链式调用 相当于return undefined  console.log(2)被添加到微任务队列内
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() =>{
  console.log(6);
})


// 1.return 4
// 0
// 1
// 4
// 2
// 3
// 5
// 6

// 2.return thenable
// 0
// 1
// 2
// 4
// 3
// 5
// 6

// 3.return promise
// 0
// 1
// 2
// 3
// 4
// 5
// 6
