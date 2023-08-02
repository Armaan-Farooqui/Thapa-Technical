const { error } = require("console");
const fs = require("fs");

// fs.writeFile("read.txt","today is awesome day", (err) => {
//     console.log("files is created");
//     console.log(err);  
// });

// fs.appendFile("read.txt", " waah de re", (err) => {
//     console.log("reacted");
// })

fs.readFile("read.txt", "utf-8", (error, data) => {
    console.log(data);
});
