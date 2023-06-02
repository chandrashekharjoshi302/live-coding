const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is the home page");
  } else if (req.url === "/data") {
    fs.appendFile("./newFile.txt", "csj", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File appended");
      }
      res.end();
    });
  } else if (req.url === "/todo") {
    fs.rename("./newFile.txt", "text.txt", (err) => {
      if (err) {
        console.log("File not found");
      } else {
        console.log("File renamed");
      }
      res.end();
    });
  } else if (req.url === "/addData" && req.method === "POST") {
    fs.unlink("./text.txt", (err) => {
      if (err) {
        console.log("File not found");
      } else {
        console.log("File deleted");
      }
      res.end();
    });
  } else if(req.url === "/read") {
    fs.readFile("./text.txt", "utf-8", (err, data) => {
      if (err) {
        console.log("File not found");
        res.end("File not found");
      } else {
        console.log("File content:", data);
        res.end("File content: " + data);
      }
    });
  }
});

server.listen(3000, () => {
  console.log("Server is running");
});
