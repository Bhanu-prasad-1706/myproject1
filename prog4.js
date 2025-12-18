
let student = {
  name: "Bhanu prasad",
  age: 20,
  grade: "A",
  branch: "Computer Science"
};



console.log( "Initial Student Object",student);


student.email = "123@gmail.com";
//console.log( "After adding email",student);


student.age = 21;
//console.log( "After updating age",student);

delete student.branch;
//console.log( "After deleting branch",student);

console.log( "After adding email,updating age and deleting branch Student Object",student);
