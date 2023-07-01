require("dotenv").config();
const express = require('express')
const app = express()
const sum = require("./sum");
const PORT = process.env.PORT || 8000;

if(!PORT) throw "PORT is not set";

app.get('/sum', function (req, res) {  
  const result = sum(req.query.n1, req.query.n2);
  return res.json({result});
})

app.listen(PORT)