console.log("Web Serverni Boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

//  MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");

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
    console.log("user entered  /create-item ");
    const new_store = req.body.store;
    db.collection("plans").insertOne({ store: new_store }, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    // console.log(id);
    // res.end("done");
    db.collection("plans").deleteOne(
        {_id: new mongodb.ObjectId(id) }, 
        function(err, data) {
        res.json({ state: "success" });
    }
    );
    });


app.get("/", function (req, res) {
    console.log("user entered  /");
    db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err);
                res.end("something went wrong");
            } else {
                res.render("store", { items: data });
            }
        });
});

module.exports = app;
