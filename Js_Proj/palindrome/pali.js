function pali(){
    let str=document.getElementById("input").value
    //"was it a car or a cat i saw"
    let arr= str.split('').reverse().join('')
    //console.log(arr.join())
    if(str === arr)
        output="palindrome"
    else
        output="not palindrome"
    let result=document.querySelector('#result')
    result.innerHTML="The string is "+ output 
}