const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "hello.txt");
let content = fs.readFileSync(filePath, "utf8");
console.log(`File contents: \n${content}`);
content = content.toUpperCase();
fs.writeFileSync(filePath, content);
console.log(`Content updated: \n${content}`);
