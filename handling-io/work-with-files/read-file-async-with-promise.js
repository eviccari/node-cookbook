const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(process.cwd(), "hello.txt");

async function run() {
  try {
    let data = await fs.readFile(filePath, "utf8");
    console.log(`File contents: \n${data}`);
    data = data.toUpperCase();
    await updateData(filePath, data);
  } catch (error) {
    console.error(error.message);
  }
}

async function updateData(filePath, data) {
  await fs.writeFile(filePath, data);
  console.log(`Content updated: \n${data}`);
}

run();
