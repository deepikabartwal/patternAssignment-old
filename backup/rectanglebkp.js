let length = +process.argv[2];
let line = "";
let lengthIndex = 0;
let breadth = +process.argv[3];
let breadthIndex = 0;
let row = "";
let delim="";
while(breadthIndex<breadth){
  while(lengthIndex<length){
    line=line+"*";
    lengthIndex++;
  }
  row=row+delim+line;
  delim="\n";
  breadthIndex++;
}
console.log(row);
