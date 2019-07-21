const get_even_list = (numberList) => {
    resultList = [];
    for(let i=0;i<numberList.length;i++){
        if (numberList[i]%2==0){
            resultList.push(numberList[i]);
        }
    }
    return resultList;
}