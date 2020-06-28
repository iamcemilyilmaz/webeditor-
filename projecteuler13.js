var fs=require("fs");
var total="\n";
let m1=fs.readFileSync('lines.txt').toString().split('\n').forEach(Line=>{
    total+=Line;
})
console.log(total)