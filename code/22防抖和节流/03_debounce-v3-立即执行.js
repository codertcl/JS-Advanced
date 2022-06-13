function debounce(fn, delay, immediate = false) {
    // 1.定义一个定时器, 保存上一次的定时器
    let timer = null
    let isInvoke = false

    // 2.真正执行的函数
    const _debounce = function (...args) {
        // 取消上一次的定时器
        if (timer) clearTimeout(timer)

        // 判断是否需要立即执行 immediate为true表示刚开始或者每次延迟完毕后新输入会立即执行

        //一开始会进入下面的if中,立即执行,isInvoke改为true
        //如果持续输入,则timer被清除，又进入下面的else新创建timer
        //如果仍持续输入，则执行上面一行过程，否则，delay时间结束后，
        // 执行函数，invoke改为false(非火花态度) 再次新输入，则又会立即执行
        if (immediate && !isInvoke) {
            fn.apply(this, args)
            isInvoke = true
        } else {
            // 延迟执行
            timer = setTimeout(() => {
                // 外部传入的真正要执行的函数
                fn.apply(this, args)
                isInvoke = false
            }, delay)
        }
    }

    return _debounce
}
