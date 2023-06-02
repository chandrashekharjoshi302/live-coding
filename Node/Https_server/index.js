const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is the home page");
  } else if (req.url === "/data") {
    fs.readFile("./data.json", "utf-8", (err, data) => {
      if (err) {
        res.write(err.toString());
        res.end();
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/todo") {
    fs.readFile("./todo.json", "utf-8", (err, data) => {
      if (err) {
        res.write(err.toString());
        res.end();
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/addData" && req.method === "POST") {
    let str = "";
    req.on("data", (chunk) => {
      str += chunk;
    });

    req.on("end", () => {
      console.log(str);
      res.end("Data has been added");
    });
  } else {
    res.end("404");
  }
});

server.listen(3000, () => {
  console.log("Server is running");
});
