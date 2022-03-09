const http = require("http");
const app = require("./app/app.js");

const server = http.createServer(app);

const port = process.env.PORT || 80;

server.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
