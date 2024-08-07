function throttle(fn, interval, options = { leading: true, trailing: false }) {
    // 1.记录上一次的开始时间
    const { leading, trailing } = options
    let lastTime = 0

    // 2.事件触发时, 真正执行的函数
    const _throttle = function(...args) {

        // 2.1.获取当前事件触发时的时间
        const nowTime = new Date().getTime()
        // 本来初始版本，开始会执行一次
        // 如果开始刚开始不触发 即lastTime为0且leading为false，那么刚开始时就不触发
        if (!lastTime && !leading) lastTime = nowTime

        // 2.2.使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长事件需要去触发函数
        const remainTime = interval - (nowTime - lastTime)
        if (remainTime <= 0) {
            // 2.3.真正触发函数
            fn(...args)
            // 2.4.保留上次触发的时间
            lastTime = nowTime
        }
    }

    return _throttle
}
