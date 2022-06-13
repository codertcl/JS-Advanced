class Classroom {
    constructor(address, name, students) {
        this.address = address
        this.name = name
        this.students = students
    }

    // foo = () => {
    //     console.log("foo function")
    // }
    foo() {
        console.log("foo function")
    }

    // [Symbol.iterator] = function*() {
    //   yield* this.students
    // }

    * [Symbol.iterator]() {
        yield* this.students
    }
}

const classroom = new Classroom("3幢", "1102", ["冰冰", "慧玲"])
for (const item of classroom) {
    console.log(item)
}

classroom.foo()