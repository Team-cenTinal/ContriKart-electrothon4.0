const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");

require("./db/conn");
const Donate = require('./models/donate');
const { default: mongoose } = require("mongoose");

const port = process.env.PORT || 5000;

const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../views");

app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "ejs");
app.set("views", "../views")
    // app.set("view engine", "ejs");


const itemsSchema = {
    first_name: String,
    textarea: String,
    Address: String,

    contact_no: Number
};

const Item = mongoose.model('item', itemsSchema);


app.get("/", (req, res) => {
    return res.render("index")
});


app.get("/dform", (req, res) => {
    return res.render("dform")
});


app.get("/list", (req, res) => {
    Item.find({}, function(err, items) {
        return res.render("list", {
            itemsList: items
        })
    })

});

app.post("/dform", async(req, res) => {
    try {
        const doantion = new Donate({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            contact_no: req.body.contact_no,
            email_id: req.body.email_id,
            Address: req.body.Address,
            pincode: req.body.pincode,
            textarea: req.body.textarea,


        })

        const doanted = await doantion.save();
        res.status(201).render("index");

    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log("server is running at port: ", port);
});