//indexDB数据库操作
const dbRequest = indexedDB.open('tcl')
dbRequest.onerror = function (err) {
    console.log('打开数据库失败')
}

let db = null
dbRequest.onsuccess = function (event) {
    db = event.target.result
}

//第一次打开数据库或者版本更新
dbRequest.onupgradeneeded = function (event) {
    const db = event.target.result

    //创建存储对象(表) keyPath作为表的主键
    db.createObjectStore("user", {keyPath: "id"})
}

class User {
    constructor(id, name, age) {
        this.id = id
        this.name = name
        this.age = age
    }
}

const users = [
    new User(0, "why", 18),
    new User(1, "kobe", 40),
    new User(2, "james", 30),
]
//获取按钮监听点击事件

const btns = document.querySelectorAll('button')
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        const transaction = db.transaction("user", "readwrite")
        const store = transaction.objectStore("user")
        switch (i) {
            case 0:
                console.log('新增')
                for (const user of users) {
                    const request = store.add(user)
                    request.onsuccess = function () {
                        console.log(`${user.name}添加成功`)
                    }
                }
                transaction.oncomplete = function () {
                    console.log('所有数据添加成功')
                }
                break;
            case 1:
                console.log('查询')
                //1:根据主键进行查询
                // const request = store.get(0)
                // request.onsuccess = function (event) {
                //     console.log(event.target.result)
                // }

                //2:store.openCursor()查询
                const request1 = store.openCursor()
                request1.onsuccess = function (event) {
                    const cursor = event.target.result
                    if (cursor) {
                        if (cursor.key === 1) {
                            console.log(cursor.key, cursor.value)
                        } else {
                            cursor.continue()
                        }
                    } else {
                        console.log("查询完成")
                    }
                }
                break;
            case 2:
                console.log('删除')
                const request2 = store.openCursor()
                request2.onsuccess = function (event) {
                    const cursor = event.target.result
                    if (cursor) {
                        if (cursor.key === 2) {
                            cursor.delete()
                        } else {
                            cursor.continue()
                        }
                    } else {
                        console.log("查询完成")
                    }
                }
                break;
            case 3:
                console.log('修改')
                const request3 = store.openCursor()
                request3.onsuccess = function (event) {
                    const cursor = event.target.result
                    if (cursor) {
                        if (cursor.key === 1) {
                            const value = cursor.value;
                            value.name = "curry"
                            cursor.update(value)                        } else {
                            cursor.continue()
                        }
                    } else {
                        console.log("查询完成")
                    }
                }
                break;
            default:
                break

        }
    }
}
