process.on("SIGINT", () => {
  process.stdout.write("\nprocess terminate");
  process.exit(0);
});

process.stdin.on("data", (data) => {
  const name = data.toString().trim().toUpperCase();
  if (name) {
    process.stdout.write(`Hello ${name}`);
  } else {
    process.stderr.write("Input was empty");
  }
});
