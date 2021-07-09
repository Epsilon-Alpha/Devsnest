//Write a JavaScript program to list the properties of a JavaScript object.

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

//Method 1
console.log(Object.keys(student));
console.log(Object.values(student));
console.log();


//Method 1
for(let key in student)
  console.log(key, student[key])
console.log();
  
//Write a JavaScript program to delete the rollno property from the following object.
console.log(student);
delete student.rollno;
console.log(student);
console.log();

//Write a JavaScript program to get the length of a JavaScript object.
student.rollno = 12;
console.log("Number of items in this object = " + Object.keys(student).length);
console.log();

//Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library = [{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
}, {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
}, {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
}];

for(let book of library){
  console.log("Book name: " + book.title);
  console.log("Book author: " + book.author);
  console.log("Status: " + (book.readingStatus ? "Reading" : "Not Reading"));
  console.log();
}

//Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

class Cylinder{
  constructor(r,h){
    this.r = r;
    this.h = h;
  }
  
  set radius(r){
    this.r = r;
  }
  
  set height(h){
    this.h = h;
  }
  
  get volume(){
    this.V = Math.PI*this.r*this.r*this.h;
    return Number.parseFloat(this.V).toFixed(4);
  }
}

let c1 = new Cylinder(1,2);
console.log(c1.volume);
let c2 = new Cylinder();
c2.radius = 5;
c2.height = 6;
console.log(c2.volume);

//Write a JavaScript program to sort an array of JavaScript objects.
//Assuming sorting on the basis of libary ID, descending

var library2 = [{
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
}, {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
}, {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
}];

library2.sort((a,b) => {
  return b.libraryID - a.libraryID;
})

console.log(library2);