console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();
const http = require("http");

//1 KIRISH codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 Session codes

//3 Views codes
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing codes
app.get("/hello", function (req, res) {
    res.end(`<h1>Hello World by JOHN</ h1>`);
});
app.get("/gift", function (req, res) {
    res.end(`<h1>siz sovga pagedasz</ h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});
