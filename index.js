const { Router } = require('express');
const express = require('express')
const path = require('path')
const app = express();
const port = 8080;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/index.html"))
})

app.get('/contact-me', function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/contact-me.html"))
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/about.html"))
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/404.html"))
})

app.listen(port, () => {
  console.log(`Basic website app listening on port ${port}`);  
})
