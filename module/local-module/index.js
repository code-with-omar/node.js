//import here from student.js
const student = require('./student')
console.log(student.getName())
console.log(student.getAge())
console.log(student.cgpa)


//find only getName
const { getName } = require('./student')
console.log("Name :", getName())
