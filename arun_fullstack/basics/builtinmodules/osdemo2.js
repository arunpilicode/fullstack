const os=require('os');

var total=os.totalmem();
var free=os.freemem();


console.log(`total memory=${total}`);
console.log(`Free memory=${free}`);