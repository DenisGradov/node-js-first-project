const http = require("node:http");
const {
  loadIndex,
  loadRegister,
  loadLogin,
  registration,
  logining,
  getUsers,
} = require("./handlers");
const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    return loadIndex(req, res);
  }
  if (req.method === "GET" && req.url === "/login") {
    return loadLogin(req, res);
  }
  if (req.method === "GET" && req.url === "/register") {
    return loadRegister(req, res);
  }
  if (req.method === "POST" && req.url === "/register") {
    return registration(req, res);
  }
  if (
    req.method === "POST" &&
    (req.url === "/login" || req.url === "/login-not-correct")
  ) {
    return logining(req, res);
  }
  if (req.method === "GET" && req.url === "/users") {
    return getUsers(req, res);
  }
});

server.listen(PORT, () => {
  console.log("Server work");
});
