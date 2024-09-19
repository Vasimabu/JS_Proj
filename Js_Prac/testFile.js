var testing=() =>{
    console.log("imported arrow function works");
}

var anothertesting=(name,age) =>{
    if(age>15){
        let consoleValues = name+" "+"age is"+age
        console.log(consoleValues);
    }else{
        let consoleValues = name+" "+"age is lessthen 15"+age
        console.log(consoleValues);
    }
    //console.log("imported arrow function works");
};
module.exports = {
    testing,
    anothertesting,
}