function throttle(fn, interval, options = {leading: false, trailing: true}) {
    const {leading, trailing, resultCallback} = options
    let lastTime = 0, timer = null

    const _throttle = function (...args) {
        return new Promise((resolve, reject) => {
            let nowTime = new Date().getTime()
            if (!leading && !lastTime) lastTime = nowTime

            const remainTime = interval - (nowTime - lastTime)
            //间隔时间达到，则触发事件
            if (remainTime <= 0) {
                ////避免定时器重复
                if (timer) {
                    clearTimeout(timer)
                    timer = null
                }
                const res = fn.apply(this, args)
                // /传入了回调函数
                resolve(res)
                lastTime = nowTime
                return
            }

            //trailing控制结束时后达到remainTime是否触发
            if (trailing && !timer) {
                timer = setTimeout(() => {
                    const res = fn.apply(this, args)
                    // /传入了回调函数
                    resolve(res)
                    //如果leading为true,则初始会执行,则下一次点击又会立即执行一次
                    // lastTime = 0
                    lastTime = !leading ? 0 : new Date().getTime()
                    // 便于下一次进行设置定时器
                    timer = null
                }, remainTime)
            }
        })
    }

    //取消
    _throttle.cancel = function () {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
    }
    return _throttle
}
