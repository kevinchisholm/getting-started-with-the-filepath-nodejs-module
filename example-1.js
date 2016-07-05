//get a reference to the filepath module
var fp = require('filepath');

//get a reference to the folder structure that leads up to the current file, 
//set it to the path variable
var path = fp.newPath();

//output the path variable 
console.log(path.toString());

