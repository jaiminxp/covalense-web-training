class Person {
  constructor(name, age) {
    console.log("person constructor was called");
    this.name = name;
    this.age = age;
  }

  walk() {
    console.log("tik tok");
  }
}

class Teacher extends Person {
  constructor(subject, grade, name, age) {
    super(name, age);
    this.subject = subject;
    this.grade = grade;
  }

  giveHomework() {
    console.log("write it 500 times");
  }
}
