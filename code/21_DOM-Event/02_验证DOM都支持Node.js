// const divEl = document.querySelector("#box")
// const spanEl = document.querySelector(".content")
//
// // 常见的属性
// console.log(divEl.nodeName, spanEl.nodeName)
// console.log(divEl.nodeType, spanEl.nodeType)
// console.log(divEl.nodeValue, spanEl.nodeValue)
//
// // childNodes
// const spanChildNodes = spanEl.childNodes
// const textNode = spanChildNodes[0]
// console.log(textNode.nodeValue)
//
//
// // 常见的方法
// const strongEl = document.createElement("strong")
// strongEl.textContent = "我是strong元素"
// divEl.appendChild(strongEl)
//
// // 注意事项: document对象
// document.body.appendChild(strongEl)

//1:textContent 会获取所有元素的内容，包括 <script> 和 <style> 元素
// 然而 innerText 只展示给人看的元素
//2:textContent 会返回节点中的每一个元素。相反，innerText 受 CSS 样式的影响
// 并且不会返回隐藏元素的文本，
// 此外，由于 innerText 受 CSS 样式的影响，它会触发回流（ reflow ）去确保是最新的计算样式
// （回流在计算上可能会非常昂贵，因此应尽可能避免。）
console.log(document.querySelector('h2').textContent)
//显示标签内所有内容包括html结构
console.log(document.querySelector('h2').innerHTML)
//只显示文本内容
console.log(document.querySelector('h2').innerText)
