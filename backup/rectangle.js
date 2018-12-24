let breadth = +process.argv[3];
let length = +process.argv[2];
const filledRectangle = function(length,breadth){
  let row = "";
  let delim="";
  let line = "";
  for(lengthIndex=0;lengthIndex<length;lengthIndex++){
    line=line+"*";
  }
  for(breadthIndex=0;breadthIndex<breadth;breadthIndex++){
    row=row+delim+line;
    delim="\n";
  }
  return row;
}
console.log(filledRectangle(length,breadth));
