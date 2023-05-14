const net = require("net");

const socket = net.connect(3000, "localhost");
socket.write("hello from client");
socket.on("data", (data) => {
  console.log(`response from server: ${data.toString()}`);
});

socket.on("end", () => {
  console.log("connection closed");
});
