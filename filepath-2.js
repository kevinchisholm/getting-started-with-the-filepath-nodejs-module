//get a reference to the filepath module
var fp = require('filepath'),
    //get a reference to the folder structure that leads up to the current file, 
    //set it to the path variable
    path = fp.newPath(),
    //get a reference to a list of all files in the current folder
    files = path.list();

//for each file name in the files array
files.forEach(function (fileName) {
    //output the full path to this file
    console.log(fileName.toString());
});
