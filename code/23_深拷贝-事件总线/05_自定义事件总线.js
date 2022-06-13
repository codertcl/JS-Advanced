class HYEventBus {
    constructor() {
        this.eventBus = {}
    }

    on(eventName, eventCallback, thisArg) {
        let handlers = this.eventBus[eventName]
        if (!handlers) {//初始化
            handlers = []
            this.eventBus[eventName] = handlers
        }
        //eventBus数组内添加处理的回调函数
        handlers.push({
            eventCallback,
            thisArg
        })
        // console.log(this.eventBus)
    }

    off(eventName, eventCallback) {
        const handlers = this.eventBus[eventName]
        if (!handlers) return
        //拷贝handlers,handlers中可能存在某个事件监听了两次,所以需要拷贝
        const newHandlers = [...handlers]
        for (let i = 0; i < newHandlers.length; i++) {
            const handler = newHandlers[i]
            if (handler.eventCallback === eventCallback) {
                //从原数组handlers中获取handler的下标
                const index = handlers.indexOf(handler)
                handlers.splice(index, 1)
            }
        }
    }

    emit(eventName, ...payload) {
        const handlers = this.eventBus[eventName]
        //没有监听则结束
        if (!handlers) return
        handlers.forEach(handler => {
            //执行回调函数
            handler.eventCallback.apply(handler.thisArg, payload)
        })
    }
}

const eventBus = new HYEventBus()

// main.js
eventBus.on("abc", function (...args) {
    console.log("监听abc1", this, args)
}, {name: "why"})

const handleCallback = function (...args) {
    console.log("监听abc2", this, args)
}
eventBus.on("abc", handleCallback, {name: "why"})

// utils.js
eventBus.emit("abc", 123)

// 移除监听
eventBus.off("abc", handleCallback)
eventBus.emit("abc", 123)
