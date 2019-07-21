let flockSize = [];
let numberOfSheep = 7;
for(let i=0;i< numberOfSheep;i++){
    let newsheep= Math.floor(Math.random()*300);
    flockSize.push(newsheep);
}
console.log("Hello, my name is Hieu and these are my sheep sizes\n["+flockSize+"]");
let month =1;
for(;;month++){
    if(month>1){
        areUBoring = prompt(`${month -1} month passed!\nAre you boring? (y/n)`).toLowerCase();
        if (areUBoring===`y`){
            break;
        }
    }else{
        alert("Let's raise sheep!!");
    }
    //growth
    flockSize.forEach((size,index)=>{
        flockSize[index] = flockSize[index] + 50;
    })
    //
    console.log("MONTH "+month+"  :\nOne month passed, how is my flock\n["+flockSize+"]");
    //max
    let sizeOfBiggestSheep = Math.max.apply(Math, flockSize);
    console.log(`Now my biggest sheep has size ${sizeOfBiggestSheep}! Let shear it!`);
    let indexOfBiggestSheep = flockSize.indexOf(sizeOfBiggestSheep);
    flockSize[indexOfBiggestSheep]=8;
    console.log("After shearing, here is my flock\n["+flockSize+"]");
    //
}
let total = 0;
flockSize.forEach((size,index)=>{
    total = total+size;
})
console.log(`My flock has size in total: ${total}\nI would get ${total}*$2 = $`+total*2);
