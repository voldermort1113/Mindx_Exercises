const is_inside = ([x,y],[recX,recY,recWidth,recHeight])=>{    
    let point = [x,y]; //điểm có tọa độ x,y
    let rectangle = [recX,recY,recWidth,recHeight];
    if ((x>=recX && x<=(recX+recWidth))&&(y>=recY && y<=(recY+recHeight))){
        return true;
    }else{
        return false;
    }
}
console.log( is_inside([100, 120], [140, 60, 	]) );
console.log( is_inside([200, 120], [140,60,100,200]) );