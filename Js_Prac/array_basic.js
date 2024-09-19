//array basic
/*var actors=["vijay",0.2,"dhnaush","surya"]
console.log(actors[0])
console.log(actors[1])
console.log(actors[2])
//heterogeneous elements means multiple data types
//homogeneous means single type of data
//arrays
let cities=["chennai","madurai","tuty"]
let marks=[40,50,40,40]*/
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

//arrays in depth concept

//adding elemnt in array
/*const n=[4,5,6]
console.log(n)

let user=prompt("enter the fruits")
let a=["apple","banana"]
a.push("gauva")
for(i=0;i<1;i++)
     a.unshift(user)
console.log(a);*/

//guvi array problems
//3.
/*Sample Input :
3
7 4 9
Sample Output :
3
*/
/*let user=Number(prompt("enter the fruits"))
let a=[]
let count=0
for(i=1;i<=user;i++){
     let n=Number(prompt("enter the fruits"));
     a.push(n)
     count=+i
}
console.log(count);
*/

/*4.Input Description:
First line contains a number denoting size of array ‘n’.Next line contains n space separated numbers
Output Description:
Print the number which is repeated twice
Sample Input :
5
13 12 13 12 13
Sample Output :
12*/

//not solvable

/*let user=Number(prompt("enter the number"))
let a=[]
for(i=1;i<=user;i++){
     let n=Number(prompt("enter the array"));
     a.push(n);
}

let value=0
let count=0
for(i=0;i<a.length;i++){
     for(j=0;j<i;j++){
           //if(i!=j)
                if(a[i]==a[j])
                     count=count+1
     if(count==2)
           console.log(a[i]);
               //console.log(count)
          }
    //if(count==2)
      //   value=a[i]
    //console.log(value);
}*/
//if(count==2)
//console.log(count);
//console.log(value);

/*you are given with array of numbers.you have to find whether array is beautiful or not. A beautiful array is an array whose sum of all numbers is divisible by 2, 3 and 5
Input Description:
You are given a number ‘n’ denoting the size of array.Next line contains n space separated numbers.
Output Description:
Print 1 if array is beautiful and 0 if it is not
Sample Input :
5
5 25 35 -5 30
Sample Output :
1
*/

// solvable

/*let user=Number(prompt("enter the number"))
let a=[]
for(i=1;i<=user;i++){
     let n=Number(prompt("enter the array"));
     a.push(n);
}
for(i=0;i<a.length;i++)
      if((a[i]%2==0 && a[i]%3==0) && (a[i]%5==0))
           console.log(a[i],"1");
*/

/*You are given an array of ids of prisoners. The jail authority found that there are some prisoners of same id. Your task is to help the authority in finding the common ids.
Input Description:
First line contains a number ‘n’ representing no of prisoners. Next line contains n space separated numbers.
Output Description:
Print the ids which are not unique. Print -1 if all ids are unique
Sample Input :
7
1 1 11 121 131 141 98
Sample Output :
1*/

//solvable

/*let user=Number(prompt("enter the number"))
let a=[]
for(i=1;i<=user;i++){
     let n=Number(prompt("enter the array"));
     a.push(n);
}
for(i=0;i<a.length;i++)  
      for(j=0;j<i;j++)
           if(i!=j)
                if(a[i]==a[j])
                     console.log("1")*/
//array methods
/*var array=[1,2,3,4,5] 
let obj={id:1}
let other= undefined
let string="abu"              
function checkIfArray(val){
     if(typeof val=="string"){
          console.log("it is an string");
     }
     else if(typeof val=="number"){
          console.log("it is an number");
     }
     else if(typeof val=="undefined"){
          console.log("it is an undefined");
     }
     else{
          console.log("it is an array");
     }
}
checkIfArray(string)*/
// array adding element new methods
/*var array = [1,2,3,4,5]
//M1
array.push("Apple")
array[array.length]="biscuit"
console.log(array);*/
//array index
/*var arr=["a","b","c","d"]
let result =arr.indexOf("d")
console.log(result);*/
//searching inbdex will not showed 
/*var arr=["a","b","c","d"]
let result =arr.indexOf("z")//consume -1 index
console.log(result)*/
/*var items = ["milk","bread","sugar"]
function checkForProduct(){
     if(items.indexOf("water")==-1){
          console.log("item doesnt exist");
     }else{
          console.log("item exists");
     }
}
checkForProduct("banana")*/
/*let n=Number(prompt("enter the number"))
let m=Number(prompt("enter the number"))
let user1=n
let user2=m
function array(){
     let n=[]
     let m=[]
     for(i=0;i<user1;i++){
           let n1=Number(prompt("enter the array"));
          n.push(n1);
     }
     for(i=0;i<user2;i++){
          let m1=Number(prompt("enter the array"));
          m.push(m1);
     }
     console.log(n.sort());
     console.log(m.sort())
     console.log(m.reverse())
     console.log([(n)+(m)])
}
array()
*/
// product of index and remove it
/*var items =["milk","bread","sugar"]
function checkForProduct(product){
     let index = items.indexOf(product)
     if(index==-1){
          console.log("item doesn't exist");
     }
     else{
          items.splice(index,1)
          console.log("item exists");
     }
}
checkForProduct("sugar")
*/
//copywithin method
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
//let val=fruits.copyWithin(2, 0);
//console.log(val);
console.log(fruits.copyWithin(2, 0));
*/
//flat() method
//The flat() method creates a new array with sub-array elements concatenated to a specified depth.
/*const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);
*/
// Splicing and Slicing Arrays
// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.
//splice method
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(2, 0, "Lemon", "Kiwi"));
console.log(fruits);
//let val=fruits.splice(2, 0, "Lemon", "Kiwi");
//console.log(val);

// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
*/

//The splice() method returns an array with the deleted items:
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits.splice(2, 2, "Lemon", "Kiwi"))
let val=fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(val);
console.log(fruits);
*/
//tospliced() method
// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array,
// keeping the original array unchanged,while the old method altered the original array.
/*const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced);*/
/*var a=5
console.log(typeof(a));
*/

//arrays 

// [ ]	Creates a new Array
// new Array()	Creates a new Array
// at()	Returns an indexed element of an array
// concat()	Joins arrays and returns an array with the joined arrays
// constructor	Returns the function that created the Array prototype
// copyWithin()	Copies array elements within the array, to and from specified positions
// entries()	Returns a key/value pair Array Iteration Object
// every()	Checks if every element in an array pass a test
// fill()	Fill the elements in an array with a static value
// filter()	Creates a new array with every element in an array that pass a test
// find()	Returns the value of the first element in an array that pass a test
// findIndex()	Returns the index of the first element in an array that pass a test
// findLast()	Returns the value of the last element in an array that pass a test
// findLastIndex()	Returns the index of the last element in an array that pass a test
// flat()	Concatenates sub-array elements
// flatMap()	Maps all array elements and creates a new flat array
// forEach()	Calls a function for each array element
// from()	Creates an array from an object
// includes()	Check if an array contains the specified element
// indexOf()	Search the array for an element and returns its position
// isArray()	Checks whether an object is an array
// join()	Joins all elements of an array into a string
// keys()	Returns a Array Iteration Object, containing the keys of the original array
// lastIndexOf()	Search the array for an element, starting at the end, and returns its position
// length	Sets or returns the number of elements in an array
// map()	Creates a new array with the result of calling a function for each array element
// of()	Creates an array from a number of arguments
// pop()	Removes the last element of an array, and returns that element
// prototype	Allows you to add properties and methods to an Array object
// push()	Adds new elements to the end of an array, and returns the new length
// reduce()	Reduce the values of an array to a single value (going left-to-right)
// reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// reverse()	Reverses the order of the elements in an array
// shift()	Removes the first element of an array, and returns that element
// slice()	Selects a part of an array, and returns the new array
// some()	Checks if any of the elements in an array pass a test
// sort()	Sorts the elements of an array
// splice()	Adds or Removes array elements
// toReversed()	Reverses the order of array elements (to a new array)
// toSorted()	Sorts the elements of an array (to a new array)
// toSpliced()	Adds or Removes array elements (to a new array)
// toString()	Converts an array to a string, and returns the result
// unshift()	Adds new elements to the beginning of an array, and returns the new length
// valueOf()	Returns the primitive value of an array
// with()	Returns a new array with updated elements

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.copyWithin(2, 0));












      




