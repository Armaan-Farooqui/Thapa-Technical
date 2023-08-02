const os = require("os");
const fs = require("fs");

// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.tmpdir());
console.log(os.type());

fs.rename("async.js", "OSmodule.js", (err) => {
    console.log("renamed")
})
fs.unlink("./OSmodule", (err) => {
    console.log("File deleted")
})
// const freeMemory = os.freemem();

// console.log(`${freeMemory/1024/1024/1024}`);

// const totalMemory = os.totalmem();

// console.log(`${totalMemory/1024/1024/1024}`);

