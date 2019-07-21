window.onload = ()=>{
    let  even_list = get_even_list([1, 2, 5, 9, -10, 6])
    let testList = [2,-10,6];
    let check = (JSON.stringify(testList) === JSON.stringify(even_list)); 
    if (check == true){
        console.log("Your function is correct")
    }
    else{
        console.log("Ooops, bugs detected");
    }
}    