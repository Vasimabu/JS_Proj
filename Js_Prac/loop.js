//problems of js
//1. 1 to 100 numbers divisble by 2
/*var num=100
i=0
while(i<=num){
    if(i%2==0){
        console.log(i)
    }
    i++
}*/
//2.1 to 100 numbers divisble by 3
/*var num=100
i=0
while(i<=num){
    if(i%3==0){
        console.log(i)
    }
    i++
}*/
//3. 1 to 100 numbers divisble 2 and 3
// var num=100
// i=0
// while(i<=num){
//     if(i%2==0 && i%3==0)
//     {
//         console.log(i)
//     }
//     i++
// }
//4. 1 to 100 numbers divisble 2 or 3
/*var num=100
i=0
while(i<=num){
    if(i%2==0 || i%3==0)
    {
        console.log(i)
    }
    i++
}*/
//5. total count in first 100 numbets
/*var num=100
i=0
count=0
while(i<=num){
    count=i+count
    i++
}
console.log(count)*/
//6. prime number program
/*no=10
isprime=true
if(no<1){
    console.log("not prime")
}
else if(no>1){
    i=2
    while(i<no){
        if(no%i==0){
        isprime=false
        break
    }
    i++
   }
   if(isprime==true){
    console.log("prime")
   }
   else{
    console.log("not prime")
   }
}
else{
    console.log("not a prime")
}*/
/*if(prime==1){
    console.log("prime")
}*/
//loping

/*var a=5;
console.log(a);
for(let initialize=10;initialize>5;initialize--){
    for(let j=1;j<3;j++){
        var a=a+j+initialize
        console.log("inside the nested loop",a);
    }
    var a=a+initialize;
    console.log("inside loop",a);
}*/

//console.log("outside loop",a);

var a = 10 
console.log("value a",a)

for(let i =0;i<a;i+=2){
    for(let j =0;j<i;j++){
    var b = j//a+j+i
    console.log("nested loop a ",b);
 }  
    //var a = a+i
    //console.log(a)
}
/*var a=10
for(let i=0;i<a;i+=2){
    console.log("the value is ",i);
}*/

let promisevalue=new Promise(res,err)=>{
    checkvalue=0
    if(checkvalue=1){
        res("it was error")
    }
    else{
    err("no it was a error")
     }
}
console.log(promisevalue);






 

















