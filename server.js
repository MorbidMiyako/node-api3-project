const express = require('express');
const userDB = require("./users/userDb")
const userRouter = require("./users/userRouter")

const server = express();

server.use(logger)

server.use(express.json())

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use("/api/users", userRouter)
//custom middleware

function logger(req, res, next) {
  const method = req.method
  const endpoint = req.originalUrl

  console.log(`***LOGGER:   ${method} to ${endpoint}    ***`)

  next();
}

module.exports = server;
