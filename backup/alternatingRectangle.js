const dashline = function(limit){
  let dashline ="";
  for(let index=0; index<limit;index++){
    dashline = dashline+"-";
  }
  return dashline;
}
const starline = function(limit){
  let starline ="";
  for(let index=0; index<limit;index++){
    starline = starline+"*";
  }
  return starline;
}
let length = process.argv[2];
let breadth = process.argv[3];
const alternatingRectangle = function(length,breadth){
  row ="";
  delim ="";
  for(breadthIndex=0;breadthIndex<breadth;breadthIndex++){
    if(breadthIndex%2==0){
      row=row+delim+starline(length);
    }else{
      row=row+delim+dashline(length);
    }
    delim = "\n"
  }
  return row;
}
  console.log(alternatingRectangle(length,breadth));
