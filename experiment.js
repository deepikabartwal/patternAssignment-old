const generateRow = function(length){
  row = "";
  for(let placeCount=1;placeCount<=length;placeCount++){
    row=row+"*";
  }
  return row;
}

const generateTriangle = function(length){
  triangle = "";
  delim = "";
  for(let rowCount=1; rowCount<=length; rowCount++){
    triangle = triangle +delim+ generateRow(rowCount);
    delim = "\n";
  }
  return triangle;
}

let length = process.argv[2];
console.log(generateTriangle(length));
