/*var number =prompt("enetr any number :")
if(number%2==0)
{
    console.log("even number")
}
else{
    console.log("odd number")
}*/
//citizen ship logic
/*var age = prompt("enetr yoir age :")
if(age>=60)
{
    console.log("first priority")//its also display the answer in console 
    alert("first")//also display the anser
}
else if(age>=40){
    console.log("second priority") 
    alert("second")
}
else{
    console.log("ypur not eligible")
    alert("not eligible")
}*/
/*var name =prompt("enter your name")
console.log(name.length)*/
//array basic program
/*var name =prompt("enter your name:")
console.log(name.length)
i=0
while(i<name.length){
console.log(name[i])
 i++
}*/
/*var num=prompt("enter the divisor of number:")
console.log("the divisor no is"+num)
i=0
while(i<=num){
    if(num%i==0){
        console.log(i)
    }
i++
}*/
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
//console.log()
buy_veg()
console.log(salary)*/
//array basic
/*var actors=["vijay","ajith","dhnaush","surya"]
console.log(actors[0])
console.log(actors[1])
console.log(actors[2])*/
//string
/*let str1="strive not to be a success"
let str2="but rather to be a value"
console.log(str2.slice(4,10))//take characters
console.log(str2.slice(-5))
console.log(str2.substr(4,10))//firts 4 consider index of starting character second 10 lenthgh of how much characters will be need
//above line 4place to take 10 charaters to print
console.log(str2.substr(-4,10))
console.log(str1.replace('strive','aim'))
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str1.length)
let str3="  strive not to be a success"
console.log(str3.trim())//trim wiol be use to avoid the space
let bill="Rs.10"
console.log(bill.length)
console.log(bill.padEnd(7,'0'))//0 will be add in 7th position
console.log(bill.charAt(1))
console.log(bill.indexOf('s'))
console.log(str1.lastIndexOf('i0'))
console.log(str1.search('not'))
console.log(str1.includes('not'))
console.log(str1.lastIndexOf('i0'))
console.log(str1.startsWith('s'))*/
//template literals
/*let firstname="syed"
let lastname="abuthakir"
let city="chennai"
console.log(firstname+" "+ lastname +" lives in"+city)
let msg=`${firstname} ${lastname} livesin ${city}`
console.log(msg)
let txt=`happy
birthday you welcom
to you`
console.log(txt)*/

//arrays
let cities=["chennai","madurai","tuty"]
let marks=[40,50,40,40]
/*console.log(cities.length)
console.log(cities)
console.log(cities.push("ngl"))
console.log(cities)
console.log(cities.pop())
console.log(cities)
//shift method also removes the first values
console.log(cities.shift())
console.log(cities)
//unshift is also adds the value in first position
console.log(cities.unshift("kodai"))
console.log(cities)
delete cities[2]*/

/*console.log(cities)
// delete alternative method is splice
//splice
console.log(cities.splice(2,1))// 2means 2 elemtb in 1position
console.log(cities)
console.log(cities.splice(1,1,'m'))//delet and after replace
console.log(cities)
console.log(cities.splice(1,2,'x','y'))//delete 2values and alternative to insert 2values
console.log(cities)
console.log(cities.splice(1,0,'b'))//no deletion insert 1st position values
console.log(cities)*/

//slice method
/*console.log(cities.slice(1,2))
console.log(cities)
console.log(cities.reverse())
console.log(cities)
let str=cities.join()//convert into string
console.log(str)
//split -converts string to arrary
let str3="g,t,j,r"
let arr3=str3.split(',')
console.log(arr3)*/

//task 2
//random letter
/*let name="abuthakir"
console.log(name[Math.floor(Math.random()*name.length)])
*/

//task 3 template literals
/*let str="you have 5 items in your cart. you bill amount is "
let itemcount=95
console.log(`${str} $${itemcount}`)*/

//task 4 arrays
/*let arr=[5,8,10,7,9,11]
//replace method
console.log(arr.splice(3,3,17,19,111))
console.log(arr)
//insert method
console.log(arr.unshift(100))
console.log(arr)
//insert in last one position
console.log(arr.splice(7,0,200))
console.log(arr)
//add to push end
console.log(arr.push(1000))
console.log(arr)
//insert 0 in the middle use arr lenght to fing middle positiob
let len=(arr.length)/2
console.log(arr.splice(Math.round(len),0,0))
console.log(arr)*/

//task 5 count the words
/*let str=`when you call yourself an indian or a muslim or a christian 
or a european or anything else, you are being violent`
let arr=str.split(' ',100)
console.log(arr.length)*/

//task 6 fd rate calculate
/*let month=Number(prompt("enter the month"))
if (month<3){
    rate=5.8%
}
else if(month>=3 && month<=6){
    rate=6.5%
}
else if(month>=7 && month<=9){
    rate=6.8%
}
else if(month>=10){
}*/
//task 7 palindrome checking
/*let str="madam"
let arr= str.split('').reverse().join('')
console.log(arr)
//console.log(arr.join())
if(str === arr){
    console.log("palindrome")
}
else{
    console.log(" not palindrome")
}*/
//switch 
//task 8 eb bill
/*let units=75
let bill=0
if(units<=50){
    bill=units*0.75
}
else if(units<=150){
    bill=50*0.75+(units-50)*1
}
else if(units<=250){
    bill=50*0.75+100*2(units-150)*1.30
}
else if(units>250){
    bill=50*0.75+100*2+150*3+(units-250)*1.51
}
if(bill>150){
    bill=bill+bill*0.2
    console.log(bill)
}
else{
    console.log("no bill")
}*/
//object access methods
/*let item={
    name:'phone',
    parice:25000,
    quantity:1
}
console.log(item)
let item2 = new Object()
item2.name='charger'
item2.price=700
item2.quantity=1
item2.warranty='1 year'
item2.gurantee='1 year'
console.log(item2)
//dot notation
console.log(item.parice)
item.parice=28000
console.log(item)
//add  new items
item.warranty='1year'
console.log(item)
//square bracket notation
console.log(item['parice'])
item['warranty']='Not avilable'
console.log(item)*/
//object inside methods
/*let item={
    name:'phone',
    parice:25000,
    quantity:1,
    buy: function(){
        console.log('item added to cart')
    },
    addtolist(){
        console.log('item added to list')
    }
}
item.buy()
item.addtolist()*/
//while
/*while(true){
    let num= Number(prompt('enter a number'))
    if(!isNaN(num))
       break;
}*/
//for loop
/*let arr=['apple','orange','banana','graphes']
for(let i=0;i<arr.length;i++){
    console.log(arr[i].toUpperCase())
}
//arra to change valuie in other array
for(let fruit of arr)
   console.log(fruit)
//objects for loop in for..in
let item={
    name:'phone',
    parice:25000,
    quantity:1
}
for(let key in item){
    console.log(key,item[key])
}*/
//function declarition
/*function Num(num){
    return num
}
console.log(Num(4))
function sayHello(){
    console.log('hello')
}
sayHello()*/
//default parameters
/*function greet(name='there'){// defalut value
    console.log('hi',name)
}
greet('abu')
greet()*/
//recursion - function calling itself same function
//factorial - product of first n numbers
/*function factorial(n){
    if(n==1)
        return 1
    return n*factorial(n-1)
}
console.log(factorial(5))*/
//function expression
//assigned to a variable as object
/*let a=100
let isEven =function(num){
    return num%2==0
}
console.log(isEven(5))*/
//arrow fumction
//switch case
/*let savings=Number(prompt("enter the amount :"))
switch(true){
    case savings>10000:
        console.log("Buy android mobile");
        break
    case savings>60000:
        console.log("buy iphone mobile :");
        break
    case savings>5000 && savings <10000:
        console.log("Buy Basic mobile");
        break
    default:
        console.log("you can't afford mobile phone now");
}*/
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
trisha.greeting()*/
//factory function
/*function createperson(name){
    return{
        name,
        greeting(){
            console.log(`mhy name is${this.name}`)
        }
    }
}
//constructor function
function Person(name){//pascal -> MyFirstName (first chracter capital)
    this.name=name
    this.greeting=function(){
        console.log(`my name is ${this.name}`);
    }
}
let person=new Person("abu")
person.greeting()*/
//dynamic object
/*const person={
    name:"abu"
}
person.age=24
person.greeting=function(){}
delete person.greeting
console.log(person);*/

//built-in js constructors

//JavaScript has built-in constructors for all native objects:


/*new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object*/

//

/*const promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let user={name:'Abu'}; resolve() },1000)
});
console.log(promise);

console.log(promise);*/

//try catch
// function add(a,b){
//     return a*b
// }
/*try{
    let result=add(10,20)
    console.log(result);
}catch(e){
    console.log({name:e.name,message:e.message});
}
*/
//try catch finally
// let result=0
// try{
//     result=add(10,20)
//     console.log(result);
// }catch(e){
//     console.log({name:e.name,message:e.message});
// }finally{
//     console.log(result);
// }
let result=0
function add(a,b){
    return a*b
}
try{
    result=add(10,20)
    console.log(result);
}catch(e){
    console.log({name:e.name,message:e.message});
}finally{
    console.log({result});
}















































