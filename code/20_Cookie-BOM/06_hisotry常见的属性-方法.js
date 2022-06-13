const jumpBtn = document.querySelector("#jump")
console.log(history.length)
console.log(history.state)
jumpBtn.onclick = function() {
  // location.href = "./demo.html"

  // 跳转(不刷新网页)
  // history.state
  // {name: 'coderwhy'}
  // history.pushState({name: "coderwhy"}, "", "/detail")

  //不会保存原来网页历史
  history.replaceState({name: "coderwhy"}, "", "/detail")
}
