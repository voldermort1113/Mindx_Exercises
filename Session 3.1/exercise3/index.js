let items = ["T-Shirt","Sweater","Jeans"];
for(;;){
    let cmd = prompt("Welcome to our shop, what do you want? (C,R,U,D)\n(Other words to exit)").toLowerCase();
    let ourItems = "Our items: ";
    if(cmd ===`r`){
    }else if(cmd ===`c`){
        let newItem = prompt("Enter new item: ");
        items.push(newItem);
    }else if(cmd ===`u`){
        let indexOfItem = Number(prompt(`Update position? \n(1-${items.length})`));
        let newItem = prompt("Enter new item: ");
        items[indexOfItem-1]=newItem;       
    }else if(cmd ===`d`){
        let indexOfItem = Number(prompt(`Delete position?  \n(1-${items.length})`));
        items.splice(indexOfItem -1 ,1);        
    }else{
        break;
    }
    console.log("Our Items: "+items.toString());
}