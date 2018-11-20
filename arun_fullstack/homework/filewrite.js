var fs = require('fs');
fs.writeFile('./testfileAsync.txt','testing of async',function(err){
    if(err) 
    throw err;
    console.log("Successfully written to file");
})
fs.writeFileSync('./testfileSync.txt','testing of sync');