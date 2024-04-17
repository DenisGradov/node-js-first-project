const fs = require("node:fs");
const qs = require("node:querystring");
const dataBase = require("./data");
const { json } = require("stream/consumers");
function loadIndex(req, res) {
  fs.readFile("./files/index.html", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Server error while loading HTML file");
    } else {
      res.statusCode = 200;
      res.setHeader = ("Content-Type", "text/html");
      res.end(data);
    }
  });
}
function loadIndexWithLogin(req, res) {
  fs.readFile("./files/indexwithlogin.html", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Server error while loading HTML file");
    } else {
      res.statusCode = 200;
      res.setHeader = ("Content-Type", "text/html");
      res.end(data);
    }
  });
}

function loadLogin(req, res) {
  fs.readFile("./files/login.html", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Server error while loading HTML file");
    } else {
      res.statusCode = 200;
      res.setHeader = ("Content-Type", "text/html");
      res.end(data);
    }
  });
}
function getUsers(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(dataBase));
}

function loadLoginNotCorrect(req, res) {
  fs.readFile("./files/login-not-correct.html", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Server error while loading HTML file");
    } else {
      res.statusCode = 200;
      res.setHeader = ("Content-Type", "text/html");
      res.end(data);
    }
  });
}

function loadRegister(req, res) {
  fs.readFile("./files/register.html", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Server error while loading HTML file");
    } else {
      res.statusCode = 200;
      res.setHeader = ("Content-Type", "text/html");
      res.end(data);
    }
  });
}

function logining(req, res) {
  let body = "";
  req.on("data", (chunk) => (body += chunk.toString()));
  req.on("end", () => {
    try {
      const newUser = qs.parse(body);
      let userInDb = "";
      for (let i in dataBase) {
        console.log(dataBase[i].login);
        console.log(newUser.login);
        if (dataBase[i].login === newUser.login) {
          userInDb = dataBase[i];
          break;
        }
      }
      if (userInDb.password != newUser.password) {
        fs.readFile("./files/login-not-correct.html", (err, data) => {
          if (err) {
            res.statusCode = 500;
            res.end("Server error while loading HTML file");
          } else {
            res.statusCode = 200;
            res.setHeader = ("Content-Type", "text/html");
            res.end(data);
          }
        });
      } else {
        fs.readFile("./files/indexwithlogin.html", (err, data) => {
          if (err) {
            res.statusCode = 500;
            res.end("Server error while loading HTML file");
          } else {
            res.statusCode = 200;
            res.setHeader = ("Content-Type", "text/html");
            res.end(data);
          }
        });
      }
    } catch (error) {
      res.statusCode = 400;
      res.end("JSON is not valid");
    }
  });
  console.log(body);
}
function registration(req, res) {
  let body = "";
  req.on("data", (chunk) => (body += chunk.toString()));
  req.on("end", () => {
    try {
      const newUser = qs.parse(body);

      fs.readFile("./files/indexwithlogin.html", (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end("Server error while loading HTML file");
        } else {
          res.statusCode = 200;
          res.setHeader = ("Content-Type", "text/html");
          dataBase.push(newUser);
          res.end(data);
        }
      });
    } catch (error) {
      res.statusCode = 400;
      res.end("JSON is not valid");
    }
  });
  console.log(body);
}

module.exports = {
  loadIndex,
  loadLogin,
  loadLoginNotCorrect,
  loadRegister,
  loadIndexWithLogin,
  registration,
  logining,
  getUsers,
};
