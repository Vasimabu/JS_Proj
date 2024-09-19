// const person= {
//     firstname:  "Syed",
//     lastname: "Abuthakir",
//     age: 21,
//     /*Fullname:function(){
//         //return this.firstname+' '+this.lastname 
//         //another  method
//         return `${this.firstname} ${this.lastname}`
//     } */
//     //another method of function cration
//     fullname(){
//         return `${this.firstname} ${this.lastname}`
//     }  
// }
//console.log(person.fullname());

//object merging
 /*const personmethod={
    yearofbirth(){
        const DOB=2024-person.age
        console.log(DOB);
        return new Date().getFullYear() - this.age
        //new aboject will use construyctor of the date 
        //getfull year will bw use for the current year y
    },
    favcolor:"red",
    favnum:[1,3,5,7,9],
    get favnumcount(){//its will be use for like a propeerty metghod
        return this.favnum.length
    }
 }*/
 //object merging
 //Object.assign(person,personmethod)//object merging functions
 //console.log(person);
 //console.log(person.yearofbirth());

 //object cloning method - it's means copy the object
 //const copiedobj= Object.assign({}, person)
 //console.log(copiedobj);

 //object spread method
 /*const finalobj={...person, ...personmethod}
 console.log(finalobj);
 console.log(person.favnumcount);*///its called like property methoid nmot a function method

//types of object declarations

/*Using an Object Literal
Using the new Keyword
Using an Object Constructor
Using Object.assign()
Using Object.create()
Using Object.fromEnties()
*/

//Create an empty JavaScript object using {}
//Using an Object Literal

/*const person = {};
// Add Properties
person.firs_tName = "John";
person.last_Name = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person);*/

//Create an empty JavaScript object using new Object()
//Using the new Keyword

/*const person = new Object();

person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person);*/

// Note:
// The examples above do exactly the same.
// But, there is no need to use new Object().
// For readability, simplicity and execution speed, use the object literal method.

//Using an Object Constructor

// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.

/*function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  */

// In the constructor function, this has no value.
// The value of this will become the new object when a new object is created.

// Create a Person object
/*const myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather);
//Now we can use new Person() to create many new Person objects:

const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");

console.log(myMother,mySister,mySelf);*/

//A value given to a property will be a default value for all objects created by the constructor:
/*function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age
    this.eyeColor = eye
    this.nationality="indian"
  }
const mySelf = new Person("Johnny", "Rally", 22, "green");
console.log(mySelf);*/

//display the property and value in html page use Objecty.values() methods

// Create an Object
/*const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Create an Array
const myarray = Object.values(person);
console.log(myarray);

const mylist = Object.values(person);
console.log(mylist);
*/

//object destructuring

/*const person = {
    name: "John",
    age: 30,
    city: "New York"
//   }*/

  /*const{name,age,city,isalive=true} = person
  console.log(name,age ,city);
  console.log(name,age ,city,isalive);*/

  //object key name will be change
//Ex. const{name,age,oldkeyword : newkeyword}=person

/*const{name,age,city:country}=person
console.log(name,age,country);*/

//print all values 

/*const{name, ...remainingdetail}=person
console.log(name,remainingdetail);
*/

//object frameing

/*function person_det(personobj) {
    console.log(`hello my name is ${personobj.name} and my age is ${personobj.age} am from ${personobj.city}`);
}
person_det(person)*/
//another method of framing

/*function person_det({name,age,city}) {
    console.log(`hello my name is ${name} and my age is ${age} am from ${city}`);
}
person_det(person)*/

//for in method for object reteriving all values

/*for(let key in person){
    console.log(key,":",person[key]);
}*/

//for of in objects
/*for (let key of person){
    console.log(key);
}*/

//display the object inclue proprty and functions 

/*const person1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    age:function(){
        console.log("age is 21");
    }
  };*/
  
  //person1.age()
  // Add a Method
  /*person1.name = function Fullname() {
   return `${this.firstName} + " " + ${this.lastName}`;
  };*/
  /*console.log(person1.age);
  let ans="";
  for(let [key,value] of Object.entries(person1)){
    // ans+= person1[x]+ " ";
    console.log(key,value);
  }*/

  //console.log(ans);
  /*const arr= Object.entries(person1)
  console.log(arr);
  */


//new method of class using constructor

  /*class car{
     constructor(ut,tt,yt){
        this.ut = ut
        this.tt = tt
        this.yt = yt
     }
  }
  var bmw = new car('VW','Cruiser',1989);
  const arr1 =Object.entries(bmw)
  console.log(arr1);*/
  /*const person1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    age:(function(){
        console.log("my age is 21");
    })()
   // age:(`(function() { console.log("age is 21");}`)
  };
  console.log(person1);*/

  //JSON.Stringfiy() method use to convert all values as a string

  // Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York",
  };
  let obj=Object.entries(person)
  //console.log(obj);
  //var sum= obj.forEach(val =>{
    //console.log(val);
  //})*/
  for(let i=0;i<obj.length;i++){
    val=obj[i]
    for(let j=0;j<val.length;j++){
        //for(let z=0;j<z;z++){
          //  console.log(obj[j][z]);
        //}
        console.log(`${obj[i][j]}`);
    }
  }
 // console.log(sum);
  // Stringify Object
  //let myString = JSON.stringify(person);

//  console.log(myString);

  //object constructor changing method

/*  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create 2 Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  
  // Add a Name Method
  myMother.changeName = function (name) {
    this.lastName = name;
  }  
  // Change Name
  myMother.changeName("Doe");
  console.log(myMother.lastName);
  //console.log(myMother);
  
  //Adding a new method must be done to the constructor function prototype:
// another type of change name eithn the function name as person
  Person.prototype.changeName = function (name) {
    this.lastName = name;
  }
  
  myMother.changeName("Doe");
  console.log(myMother.lastName);*/

// javaScript Object Methods and Properties
// Name	Description
// assign()	Copies properties from a source object to a target object
// constructor	Returns the function that created an object's prototype
// create()	Returns an object created from an existing object
// defineProperties()	Adds or changes properties
// defineProperty()	Adds or changes a property
// entries()	Returns an array of the key/value pairs of an object
// freeze()	Prevents any changes to an object
// fromEntries()	Returns an object created from an iterable list of key/value pairs
// getOwnPropertyDescriptor()	Returns an array of the keys of an object
// getOwnPropertyDescriptors()	Returns an array of the keys of an object
// getOwnPropertyNames()	Returns an array of the keys of an object
// groupBy()	Groups object elements according to returned callback values
// isExtensible()	Returns true if an object is extensible
// isFrozen()	Returns true if an object is frozen
// isSealed()	Returns true if an object is sealed
// keys()	Returns an array of the keys of an object
// preventExtensions()	Prevents adding new properties to an object
// prototype	Let you to add properties and methods to JavaScript objects
// seal()	Prevents adding new or deleting existing object properties
// toString()	Converts an object to a string and returns the result
// valueOf()	Returns the primitive value of an object
// values()	Returns an array of the property values of an object

    
