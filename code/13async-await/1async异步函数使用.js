function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
        console.log(ms)
    });
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}

asyncPrint('hello world', 1000);