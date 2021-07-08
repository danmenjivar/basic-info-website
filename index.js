const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const q = url.parse(req.url, true);
    let filePath = `./pages${q.pathname === "/" ? "/index" : q.pathname}.html`;
    console.log(filePath);

    fs.readFile(filePath, function (err, data) {
      console.log(filePath);

      if (err) {
        return fs.readFile('./pages/404.html', (err, data) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
        })
      
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
