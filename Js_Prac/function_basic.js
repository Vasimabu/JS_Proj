//functions
// function wish(name){
//     console.log("all the best"+name)
// }
// name=prompt("enter your name")
// wish(name)
// aruguments name was change
// function wish(abc){
//     console.log("all the best"+abc)
// }
// name=prompt("enter your name")
// wish(name)
//aruguments and valies are change
/*function repay(amount){
    console.log("you repaid" + amount)
}
salary=10000
repay(salary)*/
//muliply with return statement,this method also outside the values
/*function multiply(no1,no2){
    return no1*no2
}
var result=multiply(10,20)
console.log(result)*/
//its arguments passed methods,marks based functions ,get inputs in the user
/*function calculate(tamil_mark, english_mark){
    return tamil_mark + english_mark
}
var tamil = Number(prompt("enter tamil mark:"))
var english = Number(prompt("enter english marks:"))
var result = calculate(tamil,english)
console.log(result)*/
//local and global variable
/*var salary=25000//global variable
function buy_veg(){
    amount=200
    console.log("buying vegetables")
    console.log(salary)
}
//console.log(amount) beacuse the amount is local variable
console.log()
buy_veg()
console.log(salary)*/
//for in loop
/*const person={
    name:"abu",
    age: 20,
    sex: 'male'
}
for(let key in person){
    console.log(key +" : ",person[key]);
}
//for in loop in array
let color=['red','blue','green','yellow']
for(let key in color){
    console.log(key +" : ", color[key]);
}*/
//for of loop
/*let color=['red','blue','green','yellow']
for(let colors of color){
    console.log("colors: "+ color);
}*/
//object creation and function calling
//object oriented programming
/*let person={
    name:"abu",
    age: 20,
    sex: 'male',
    interest: ['creating, teaching new things.'],
    isAlive: true,
    address:{
        city:"chennai",
        state:"Tamilnadu"
    },
    greeting: function(){
        let msg=`my name is ${this.name},i love${this.interest}`
        console.log(msg);
    }
}
person.greeting()*/
//factory function -- dynamic functions
/*function createperson(name){
    return{
        name: name,
        greeting(){
            let msg=`mhy name is${this.name}`
            console.log(msg);
        }
    }
}
let abu=createperson("abu")
let trisha=createperson("trisha")
abu.greeting()
trisha.greeting()
//dynamic object
const person={
    name:"abu"
}
person.age=24
person.greeting=function(){}
delete person.greeting
console.log(person);  
*/

/*function myFunction() {
    let carName = "Volvo";
    let text = "Inside: " + typeof carName + " " + carName;
    console.log(text); 
    //document.getElementById("demo2").innerHTML = text;
  }
  myFunction();
  let text1 = "Outside: " + typeof carName;
  //document.getElementById("demo1").innerHTML = text;
  console.log(text1);

//   myFunction();

function myData(){
    console.log();
}
*/
function Fullname(){
    let first_name="syed"
    let last_name="abu" 
    console.log(first_name+last_name);
}