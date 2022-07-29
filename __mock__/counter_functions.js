export function itemCounter(array){
    return array.length ;
}

export function commentCounter(array,id){
   let counter = 0;
   array.forEach(element => {
        if(element.id === id) counter += 1;
   });
   return counter;
}
