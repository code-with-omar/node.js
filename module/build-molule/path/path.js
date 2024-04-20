// console.log(__dirname)
// console.log(__filename)
const path = require('path')
// console.log(path)
const extensionName = path.extname("index.html") //Find the extension name
console.log(extensionName)

const joinName = path.join(__dirname + "/views")// Add url
const joinName1 = path.join(__dirname + "/../views")// Add url
console.log(joinName)
console.log(joinName1)
//The path.parse() method returns an object whose properties represent significant elements of the path. Trailing directory separators are ignored, see
const parse = path.parse('/home/user/dir/file.txt');
console.log(parse)