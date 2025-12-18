
let student = {
  name: "Bhanu Prasad",
  age: 20,
  grade: "A",
  major: "Computer Science"
};


console.log("Student Properties:");
for (let property in student) {
  console.log(property + ": " + student[property]);
}
