//Youare given a number A in Kilometers. Convert this into B: Meters and C: Centi-Metres.
// Input Description:
// A number "A" representing some distance in kilometer is provided to you as the input.
// Output Description:
// Convert and print this value in meters and centimeters. 
/*let A = Number(prompt("enter the number :"))
let B = A*1000
let C = A*100000
console.log(B)
console.log(C)*/

// You are given A = Length of a rectangle & B = breadth of a rectangle. Find its area “C”.
// (A and B are natural numbers)
// Input Description:
// The inputs are two natural numbers representing the length and the breadth of a rectangle.
// Output Description:
// Find the area of the rectangle formed by the provided input. Round off the answer to the first decimal place if required.
/*let A = Number(prompt("length of rectangle :"))
let B = Number(prompt("breadth of rectangle :"))
let C = A*B
console.log(Math.round(C))*/

// You are provided with the radius of a circle "A". Find the length of its circumference.
// Note: In case the output is coming in decimal, roundoff to 2nd decimal place. In case the input is a negative number, print "Error".
// Input Description:
// The Radius of a circle is provided as the input of the program.
// Output Description:
// Calculate and print the Circumference of the circle corresponding to the input radius up to two decimal places.
/*let A=Number(prompt("enetr the radius"))
let c=2*3.14*A
if(c<0){
    console.log("error")
}
else{
    console.log(c.toFixed(Math.round(2)))
}*/

// You are provided with a number, "N". Find its factorial.
// Input Description:
// A positive integer is provided as an input.
// Output Description:
// Print the factorial of the integer.
/*let N=Number(prompt("enter the number"))
let fact=1
i=1
while(N>=i){
    fact=fact*i
    i+=1
}
console.log(fact);
*/

// You are given Two Numbers, A and B. If C = A + B. Find C.
// Note: Round off the output to a single decimal place.
// Input Description:
// You are provided with two numbers A and B.
// Output Description:
// Find the sum of the two numbers (A + B)
/*let A = Number(prompt("length of rectangle :"))
let B = Number(prompt("breadth of rectangle :"))
let C = A+B
console.log(C.toFixed(0))*/

// You are given with a number "N", find its cube.
// Input Description:
// A positive integer is provided.
// Output Description:
// Find the cube of the number. 
/*let N=Number(prompt("enter the number"))
let ans=N**3
console.log(ans);*/

// You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. Find Simple Interest.
// Print the output up to two decimal places (Round-off if necessary).
// (S.I. = P*T*R/100)
// Input Description:
// Three values are given to you as the input. these values correspond to Principle amount, Interest Rate and Time in that particular order.
// Output Description:
// Find the Simple interest and print it up to two decimal places. Round off if required.
/*let A = Number(prompt("enetr the amaount :"))
let B = Number(prompt("interest rate :"))
let C = Number(prompt("enter the time:"))
const ans=A*B*C/100
console.log(ans.toFixed(2));*/

// Print the First 3 multiples of the given number "N". (N is a positive integer)
// Note: print the characters with a single space between them.
// Input Description:
// A positive integer is provided to you as an input.
// Output Description:
// Print the First 3 multiples of the number with single spaces between them as an output.
/*let user=Number(prompt("enter the no:"))
let i=1,sum=  ""
while(i<=3){
    sum=sum + i*user +" "
    i+=1
}
console.log(sum);*/

// You are given three numbers A, B & C. Print the largest amongst these three numbers.
// Input Description:
// Three numbers are provided to you.
// Output Description:
// Find and print the largest among the three
/*let A = Number(prompt("enetr the no :"))
let B = Number(prompt("enetr the no :"))
let C = Number(prompt("enter the no :"))
if(A>B && A>C){
    console.log("the largest no is "+A);
}
else if(B>A && B>C){
    console.log("the largest no is "+B);
}
else{
    console.log("the largest no is "+C);
}*/

// You are provided with two numbers. Find and print the smaller number.
// Input Description:
// You are provided with two numbers as input.
// Output Description:
// Print the small number out of the two numbers.
/*let A = Number(prompt("enetr the no :"))
let B = Number(prompt("enetr the no :"))
const ans= A<B?A:B;
console.log(ans);*/

// Write a code to get the input and print it 5 times.
// Input Description:
// A single line contains an integer N.
// Output Description:
// Output contains 5 lines with each line having the value N.
/*let A = Number(prompt("enetr the no :"))
for(let i=1;i<=5;i++){
    console.log(A);
}*/

// Using the method of looping, write a program to print the table of 9 till N in the format as follows:
// (N is input by the user)
// 9 18 27...
// Print NULL if 0 is input
// Input Description:
// A positive integer is provided as an input.
// Output Description:
// Print the table of nine with single space between the elements till the number that is input.
/*let N = Number(prompt("enetr the no :"))
let sum=""
for(let i=1;i<=3;i++){
    sum=sum + i*N +" "
}
console.log(sum);*/

// You are provided with a number check whether its odd or even. 
// Print "Odd" or "Even" for the corresponding cases.
// Note: In case of a decimal, Round off to nearest integer and then find the output. Incase the input is zero, print "Zero".
// Input Description:
// A number is provided as the input.
// Output Description:
// Find out whether the number is odd or even. Print "Odd" or "Even" for the corresponding cases. Note: In case of a decimal, Round off to nearest integer and then find the output. In case the input is zero, print "Zero".
/*let N = Math.round(Number(prompt("enetr the no :")))
if(N>0){
    if(N%2==0){
        console.log("Even");
    }
}
else{
    console.log("zero");
}*/
/*let N = Number(prompt("enetr the no :"))
let a = 3
count=1
for(i=0;i<N;i++){
    count=count+i*a
    console.log(count)
}*/

// Write a code to get an integer N and print the values from N to 1.
// Input Description:
// A single line contains an integer N.
// Output Description:
// Print the values from N to 1 in a separate line.
/*let N = Number(prompt("enetr the no :"))
// let i=0
// while(N>i){
//     console.log(N)
//     N-=1
// }
for(let i=1;N>=i;N--){
    console.log(N)
}*/

// Write a code to get an integer N and print the digits of the integer.
// Input Description:
// A single line contains an integer N.
// Output Description:
// Print the digits of the integer in a single line separated by space,
let N = 348
let arr=[]
while(N>0){
    arr=arr+ N%10
    N=Math.floor(N/10)
}
//let arr3=arr.split('')
console.log(arr)
