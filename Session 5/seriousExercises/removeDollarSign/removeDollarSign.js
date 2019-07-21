const removeDollarSign = (inputString) =>{
    let regex = '$';
    // let removeString = "";   
    // for(let i=0;i<inputString.length;i++){
    //     removeString += inputString[i].replace(regex,"");        
    // }
    let removeString = inputString.split(regex).join('');
    console.log(removeString);
    return removeString;
}
