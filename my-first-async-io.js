const fs = require ('fs');
const fileName = process.argv[2];
let buffer = fs.readFile(fileName, function(e,data) {
console.log(data.toString().split('\n').length-1);
});