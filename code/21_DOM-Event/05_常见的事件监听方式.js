function divClick() {
  console.log("div元素被点击2")
}

const divEl = document.querySelector(".box")

// DOM0 onclick多次注册会被覆盖
divEl.onclick = function() {
  console.log("div元素被点击2")
}
divEl.onclick = function() {
  console.log("div元素被点击3")
}

// DOM2 可以多次添加事件 每个都会执行
divEl.addEventListener("click", () => {
  console.log("div元素被点击4")
})
divEl.addEventListener("click", () => {
  console.log("div元素被点击5")
})
divEl.addEventListener("click", () => {
  console.log("div元素被点击6")
})
