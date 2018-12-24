const filledLine = function(limit){
  let line="";
  for(let index = 0; index<limit; index++){
    line=line+"*";
  }
  return line;
}
const lineWithStarAtEnds = function(limit){
  hollowLine="";
  for(let index = 0; index<limit; index++){
    if(index==0 || index==limit-1){
      hollowLine=hollowLine+"*";
    }else{
      hollowLine=hollowLine+" ";
    }
  }
  return hollowLine;
}
const emptyRectangle = function(length,breadth){
  let row = "";
  let delim = "";
  for(let breadthIndex=0; breadthIndex<breadth; breadthIndex++){
    if(breadthIndex==0 || breadthIndex==breadth-1){
      row = row+delim+filledLine(length);
    }else{
      row=row+delim+lineWithStarAtEnds(length);
    }
    delim="\n";
  }
  return row;
}
let length = process.argv[2];
let breadth = process.argv[3];
console.log(emptyRectangle(length,breadth));
