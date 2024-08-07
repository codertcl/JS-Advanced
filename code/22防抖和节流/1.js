function throttle(fn, interval, ...args) {
    let lastTime = 0;
    return () => {
        let nowTime = Date.now();
        if (interval <= nowTime - lastTime) {
            fn(...args);
            lastTime = nowTime;
        }
    }
}

console.log(new Date().getTime(),)