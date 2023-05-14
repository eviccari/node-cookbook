const fs = require("fs");
const file = "./hello.txt";

function fileWatcher() {
  fs.watchFile(file, (current, previous) => {
    return console.log(`file ${file} updated at ${current.mtime}`);
  });
}

(() => {
  fileWatcher();
})();
