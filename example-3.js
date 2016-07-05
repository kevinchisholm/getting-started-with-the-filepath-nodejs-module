//get a reference to the filepath module
var fp = require('filepath');

//list all files in all folders in the current folder
//and recursively do the same for any sub-folders
fp.newPath(__dirname).recurse(function (path) {
	console.log(path.toString());
})