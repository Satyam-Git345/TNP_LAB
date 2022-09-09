function total(array) {
      let t=0;
      for(let i=0; i<array.length; i++){
           t=t+array[i];
      } 
      return t;
}
  function percentage(total){
   let per=total/5.0;
   return per;
    
}

function Greet(p){
  if(p>=65 && p<=75)
         console.log("Good!!");
  else if(p>=75 && p<=85)
         console.log("Very Good!!");
  else if(p>=85 && p<=100)
         console.log("Excelent!!");
}
function Grade(p){
    if(p<33)
         console.log("Fail! Do Hard Work ");
    else if(p>=33 && p<=45)
         console.log("3rd Division");
    else if(p>=45 && p<=60)
         console.log("2nd Division");
    else if(p>=60 && p<=100)
         console.log("1st Division");
}

function printmarksheet(array) {
let t=total(array);
let p=percentage(t);
console.log(t);
console.log(p);
Greet(p);
Grade(p);
}
let arr=[45,99,99,87,98];
printmarksheet(arr);