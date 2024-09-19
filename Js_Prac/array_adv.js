//array of objects will bw used
/*const hobies=new Array("cockong","walking")
console.log(hobies);

//array of objects

const foods=[
    {id:1, title:'biriyani', dietry:'non-veg'},
    {id:2, title:'sambar', dietry:'veg'},
    {id:3, title:'curdrice', dietry:'veg'}
]*/
/*console.log(foods);
//access particular key in array of object
console.log(foods[1].title);*/

//print in UI
//document.getElementById("msg").innerHTML =foods[1].title

//for loops to all value

/*for(let i=0;i<foods.length;i++){
    console.log('food itens- for-loop,',foods[i].id,foods[i].title,foods[i].dietry);
}*/

//another method for in loop method
/*for(let fooditem in foods){
    console.log(foods[fooditem]);
}*/

//for of loop
/*for(let fooditem of foods){
    console.log(fooditem);
}*/

//for each method
//foods.forEach(food => console.log("for each",foods))



//array iteration methods


//for each()
//map(true or false)
//filter(same map the produce result)
//reduce


//for each
var sample=[5,10,"is","what"]
/*sample.forEach(element => {
    console.log(typeof element)
});*/

//map
/*var store=sample.map(x => x >1)
console.log("sample",store);*/

//filter

/*var filterkry = sample.filter(x => x >5)
console.log(filterkry);
*///its also modified original array

/*var date=new Date().getFullYear()
console.log(date)
var date=new Date().getDay()
console.log(date)
var date=new Date().getHours()
console.log(date)
var date=new Date().getDate()
console.log(date)
var date=new Date().getTime()
console.log(date)

console.log( Date.now());
*/

/*var x=10
var y=5
//console.log("hello")
if(x==10){
    console.log("welcome");
    if(x==y){
        console.log("x and y are equal");
    }
    else{
        console.log("not equal");
    }
}
*/

var arr=[5,6,7]
var x=Math.random()*6
console.log(x)

switch(x){
    case 0:
        console.log("the value is 0");
        break;
    case 1:
        console.log("the value is 1");
        break;
    case 2:
        console.log("the value is 2");
        break;
    case 3:
        console.log("the value is 3");
        break;
    case 4:
        console.log("the value is 4");
        break;
    default:
        console.log("not a value");
}










