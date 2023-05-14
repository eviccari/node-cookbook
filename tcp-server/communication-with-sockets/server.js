const net = require("net");

const server = net.createServer((socket) => {
  console.log("Client connected");

  socket.on("data", (data) => {
    console.log(data.toString());
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});

process.on("SIGINT", () => {
  closeApp();
});

process.on("SIGTERM", () => {
  closeApp();
});

closeApp = () => {
  console.log("closed by user");
  process.exit(0);
};
