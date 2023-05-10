const fs = require("fs").promises;
const file = process.argv[2];

async function printMetadata(file) {
  try {
    await fs.access(file);
    const fileStats = await fs.stat(file);
    console.log(fileStats);
  } catch (error) {
    console.error(error.message);
  }
}

printMetadata(file);
