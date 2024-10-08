function debounce(fn, delay, immediate = false) {
    // 1.定义一个定时器, 保存上一次的定时器
    let timer = null

    // 2.真正执行的函数
    const _debounce = function (...args) {
        // 判断是否需要立即执行 immediate为true表示刚开始或者每次延迟完毕后新输入会立即执行
        if (immediate && !timer) fn(...args);
        // 取消上一次的定时器
        if (timer) clearTimeout(timer)

        // 延迟执行
        timer = setTimeout(() => {
            // 外部传入的真正要执行的函数
            fn.apply(this, args)
        }, delay)
    }

    return _debounce
}
