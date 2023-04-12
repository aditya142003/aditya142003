var express = require("express");
var app = express();
var port = 3000;
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.Promise = global.Promise;mongoose.connect("mongodb+srv://adityabhatnagar142003:NwxU4aFXzr9y3Ba5@cluster0.o6jajlm.mongodb.net/`test");

var ProjectScehma = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});
var Project = mongoose.model("Project", ProjectScehma);

app.get("/", (req, res) => {
 res.send("Hello World");
});
 
app.post("/CreateProject", (req, res) => {
 var myProject = new Project(req.body);
 myProject.save()
 .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});

app.listen(port, () => {
 console.log("Server listening on port " + port);
});