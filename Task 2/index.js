// Task 2: Array Filtering and Transformation
// Write a program that performs the following operations on an array of objects:
// 1. Create an array of objects with different properties.
// 2. Use array methods like filter, map, or reduce to filter and transform the array based on specific conditions.
// 3. Display the updated array in the console after each operation.


// created an array over here
let studentProfile =[{Name: "Aaqil", Course: "Computer Science", Age: 21, isEnrolled: true},
                     {Name: "Sara", Course: "Mathematics", Age: 22, isEnrolled: false},
                     {Name: "John", Course: "Physics", Age: 23, isEnrolled: true},
                     {Name: "Emma", Course: "Chemistry", Age: 20, isEnrolled: true},
                     {Name: "Mike", Course: "Biology", Age: 24, isEnrolled: false},
                     {Name: "Sophia", Course: "History", Age: 21, isEnrolled: true}];
console.log(studentProfile);
console.log("First Student Name: " + studentProfile[0].Name);


// Filtering enrolled students
let enrolledStudents = studentProfile.filter(student => student.isEnrolled);
console.log("Enrolled Students: ", enrolledStudents);

// Mapping enrolled student names
let enrolledNames = studentProfile
                        .filter(student => student.isEnrolled)
                        .map(student => student.Name);

    console.log("Names of Students Enrolled: ", enrolledNames);

 // Reducing to get the average age of all the students 
 let averageAge = studentProfile
                        .map(student => student.Age)
                        .reduce((acc, age) => acc + age, 0) / studentProfile.length;
    console.log("Average Age of Students: " + averageAge);

// Reducing to get the total number of students who are enrolled 
let totalEnrolled = studentProfile
                        .filter(student => student.isEnrolled)
                        .reduce((acc, student) => acc + 1, 0);
    console.log("Total Number of Students Enrolled: " + totalEnrolled);
