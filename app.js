console.log("Web Serverni Boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

//  MongoDB chaqirish
const db = require("./server").db();

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
    res.render("store");
});

module.exports = app;
