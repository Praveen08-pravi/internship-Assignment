const fs = require("fs");


const folderName = "dataFolder";

if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log("Folder created successfully");
}


const filePath = `${folderName}/info.txt`;


fs.writeFileSync(filePath, "Hello! This is stored data in the folder.");


const data = fs.readFileSync(filePath, "utf8");

console.log("Retrieved Data:");
console.log(data);