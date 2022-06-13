class Person {
    constructor(address, name, students) {
        this.address = address
        this.name = name
        this.students = students
    }

    entry(student) {
        this.students.push(student)
    }

    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.students.length) {
                    return {done: false, value: this.students[index++]}
                } else {
                    return {done: true, value: undefined}
                }
            },
            //停止迭代时调用 必须return {done: true, value: undefined}
            return: () => {
                console.log('迭代器结束')
                return {done: true, value: undefined}
            }
        }

    }
}

const classroom = new Person('武汉市', '101', ['冰冰', '慧玲', '张扬'])
//无法迭代
for (let person of classroom) {
    //终止迭代
    if (person === '慧玲') {
        break
    }
    console.log(person)
}

let iterator = classroom[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())