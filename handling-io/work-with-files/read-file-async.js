const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "hello.txt");
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log(err.message);
    return;
  }

  console.log(`File contents: \n${data}`);
  data = data.toUpperCase();
  updateData(filePath, data);
});

function updateData(filePath, data) {
  fs.writeFile(filePath, data, (error) => {
    if (error) {
      console.log(error.message);
      return;
    }

    console.log(`Content updated: \n${data}`);
  });
}
