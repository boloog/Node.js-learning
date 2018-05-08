require('colors');
var a = require('./module_a');
// require('./module_b');
var Person = require('./person');

var john = new Person('WEN');
john.talk();

console.log('hello node! '.rainbow);
// console.log(a.name)
// console.log(a.data);
// console.log(a.getPrivate());

var mybuffer = new Buffer('==ii1j2i3h1i23h', 'base64');
console.log(mybuffer);
require('fs').writeFile('logo.png', mybuffer);
