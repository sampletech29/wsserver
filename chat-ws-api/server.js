const WebSocket = require("ws");

const http = require("http");

// Create an HTTP server to integrate with WebSocket
const server = http.createServer();

const wss = new WebSocket.Server({
  port: 4001,
  verifyClient: (info, done) => {
    const allowedOrigins = ["http://localhost:8081"]; // List of allowed origins
    const origin = info.origin;

    // Check if the origin matches an allowed one
    if (allowedOrigins.includes(origin)) {
      done(true); // Allow connection
    } else {
      done(false, 403, "Forbidden"); // Reject connection
    }
  },
});

wss.on("connection", (ws) => {
  console.log("nunber of connected devices", wss.clients.size);

  ws.send("Welcome to websocket server!");

  ws.on("message", (message) => {
    if (Buffer.isBuffer(message)) {
      message = message.toString("utf8"); // Convert Buffer to string
    }
    console.log(`recieved from client: ${message}`);
    ws.send(
      JSON.stringify({
        message,
        status: 200,
        date: new Date().toLocaleTimeString(),
      })
    );
  });

  // setInterval(() => {
  //   ws.send(
  //     `Totally there are ${wss.clients.size} clients connected to the server`
  //   );
  // }, 5000);

  ws.on("close", () => {
    console.log(
      `client disconnected, Total no of clients: ${wss.clients.size}`
    );
  });
});

console.log("WebSocket server is running on ws://localhost:4001");
