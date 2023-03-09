// how nodejs differs from vanilla js
// 1) Node runs on a server - not in a browser (backend not frontend)
// 2) The console is the terminal window
// 3) global object instead of window object
// console.log(global)
// console.log('hello world')
// 4) has common core modules that we will explore. these are the modules that relate to operating system or file system.
// 5) CommonJS modules instead of ES6 modules
// 6) missing sone JS APIs like fetch 
const os = require('os')
const path = require('path')
const math = require('./math')
console.log(math.add(50, 25))
console.log(math.subtract(50,25))
console.log(math.multiply(50, 25))
console.log(math.divide(50, 25))
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))
// console.log(path.parse(__dirname))