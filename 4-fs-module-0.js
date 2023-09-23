const {readFileSync , writeFileSync} = require('fs')

//read the file 
const first = readFileSync('./p1/first.txt','utf8')
const second = readFileSync('./p1/second.txt','utf8')
//write the file 
writeFileSync(
    './p1/3rdfile.txt' , `The mearged file is : --  ${first} and ${second} . . . .`,
    {flag : 'a'}
)
//print that file which i change it 
console.log(readFileSync('./p1/3rdfile.txt','utf8'))
