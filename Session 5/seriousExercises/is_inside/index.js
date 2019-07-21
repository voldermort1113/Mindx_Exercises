const is_inside = ([x,y],[recX,recY,recWidth,recHeight])=>{    
    let point = [x,y]; //điểm có tọa độ x,y
    let rectangle = [recX,recY,recWidth,recHeight];
    if ((x>=recX && x<=(recX+recWidth))&&(y>=recY && y<=(recY+recHeight))){
        return true;
    }else{
        return false;
    }
}
console.log("Is inside: "+ is_inside([100, 120], [80, 60,30,70]) );