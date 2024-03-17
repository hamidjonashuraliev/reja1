console.log("Web Serverni Boshlash");
const { log } = require("console");
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
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success" });
});

app.get("/", function (req, res) {
    res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});
