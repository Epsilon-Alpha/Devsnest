//Declare myName in global scope
var myName = 'Emin';

//Declare a function to change this.myName to differentiate scope
function setName(name){
	this.myName = name;
}

const obj1 = {
	myName: 'Dhruv'
};

const obj2 = {
	myName: 'Deepak'
};

//Print myName in all three scopes
function print(){
	console.log(myName + " " + obj1.myName + " " + obj2.myName);
	console.log("------------------------");
}

//Initial Call
print();


//Function call in global scope
const s = setName;
s('Kaustubh');
print();

//Function call in obj1 scope using call
s.call(obj1, 'Siddhant');
print();

//Function call in obj2 scope using apply
s.apply(obj2, ['Saquib']);
print();

//Function call in obj1 scope using bind
const s2 = s.bind(obj1, 'Emin');
s2();
print();