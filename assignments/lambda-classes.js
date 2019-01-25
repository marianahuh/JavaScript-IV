// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    return (`Hello, my name is ${this.name}, I am from ${this.location}.`);
  }
} // End of Base Class Person

class Instructor extends Person {
  constructor(instructorAttrs) {
    super(instructorAttrs);
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }
  demo(subject) {
    return (`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    return (`${student.name} receives a perfect score on ${subject}.`);
  }
} // End of Child Class Instructor

class Student extends Instructor {
  constructor(studentAttrs) {
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
  }
  listSubjects(favSubjects) {
    console.log(`${this.favSubjects}`);
  }
  PRAssignment(student, subject) {
    console.log(`${student.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(student, subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }
} // End of GrandChild class Student

class ProjectManager extends Student {
  constructor(projectManAttrs) {
    super(projectManAttrs);
    this.gradClassName = projectManAttrs.gradClassName;
    this.favInstructor = projectManAttrs.favInstructor;
  }
  standUp(PM, gradClassName) {
    return (`${this.name} ${this.gradClassName}, @channel standUp time!`);
  }
  debugsCode(PM, student, subject) {
    return (`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
} // GreatGrandChild class ProjectManager


const amy = new Student({
  name: 'Amy',
  age: 29,
  location: 'Baltimore',
  gender: "female",
  previousBackground: 'Professional Chef',
  className: 'webpt4',
  favSubjects: [
    'Html',
    'CSS',
    'JavaScript',
  ]
});

const joe = new Instructor({
  name: 'Joe',
  specialty: 'Redux',
  catchPhrase: "Don't forget the homies",
  favSubjects: [
    'JavaScript',
    'Python',
    'Elm',
  ]
});

const bob = new ProjectManager({
  name: 'Bob',
  gradClassName: 'CS1',
  favInstructor: 'Sean',
});

amy.speak();
console.log(joe.demo('JavaScript'));
console.log(joe.grade(amy, 'JavaScript'));
amy.listSubjects();
amy.PRAssignment(amy, 'CSS');
amy.sprintChallenge(amy, 'JavaScript');
console.log(bob.standUp());
console.log(bob.debugsCode(bob, amy, 'JavaScript'));
