const path = require("path");

// console.log(__dirname);
// console.log(path.extname(__filename));
// console.log(path.basename(__filename));
console.log(path.parse(__filename));

const myPath = path.parse(__filename);
console.log(myPath.root);
  