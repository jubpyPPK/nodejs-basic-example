var fs = require('fs')

var fileInfo = fs.readFileSync('example.txt','utf-8');
console.log('Detail file is :: ',fileInfo);

fs.writeFileSync('example2.txt',fileInfo);

fs.mkdir('menu',function(){
    fs.writeFileSync('menu/SPMenu.txt',fileInfo);
});