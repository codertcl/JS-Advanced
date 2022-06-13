require.config({
    baseUrl: '',//默认值为该文件路径 ./src,如果不设置该属性,则下面的路径不需要加src
    paths: {
        //路径相对于index.html
        foo: "./src/foo",
        bar: "./src/bar"
    }
})

require(["foo", "bar"], function (foo) {
    console.log("main:", foo)
})
