class Course {
  constructor() {
    this.classList = []
  }
  addChinese() {
    this.classList.push('chinese')
    return this
  }
  addMath(time) {
    this.classList.push('math')
    return this
  }
  total() {
    console.log(`I have ${this.classList.length} classes today.`)
  }
}

const course = new Course()
course.addChinese().addMath()

course.total() // output ?