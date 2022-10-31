/*const fs = require('fs')
const buffer = fs.readFileSync(process.argv[2]);

let content = buffer.toString()
content.split(",");
console.log(content)*/

/*var fs=require('fs');//codigo de lu para comparar
bf=fs.readFileSync('README.md', 'utf8').split('\n');
console.log(bf);

console.log(process.argv)*/

const fs = require ('fs');
const fileName = process.argv[2]
let buffer = fs.readFileSync(fileName);
let div = buffer.toString().split('\n');
console.log(div.length-1);

