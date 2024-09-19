function EB_Bill(){
    let units=Number(document.getElementById("input").value)
    let bill=0
    let tot=0
    if(units<=50){
        bill=units*0.75
    }
    else if(units<=150){
        bill=50*0.75+(units-50)*1
    }
    else if(units<=250){
        bill=50*0.75+100*2+(units-150)*1.30
    }
    else if(units>250){
        bill=50*0.75+100*2+150*3+(units-250)*1.51
    }
    if(bill>150){
        tot=bill+bill*0.2
    }
    else{
        tot=0
    }
    let result=document.querySelector('#result')
    result.innerHTML="Your monthly Eb Bill amount is "+ tot 
   /* let months=Number(document.getElementById("input").value)
    let rate= 0
    if(months<3)
        rate=5.8
    else if(months>=3 && months<=6)
        rate=6.5
    else if(months>=7 && months<=9)
        rate=6.8
    else 
        rate=7
    let result= document.querySelector('#result')
    result.innerHTML="your interest rate is "+ rate + "%"*/
}
/*
let units=75
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
}
*/
