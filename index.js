// Packages
const express = require("express"),
	hbs = require("hbs");

// Express init
const app = express();
app.use(express.static("public"));
app.set('view engine', 'hbs');
app.listen(3100);
console.log("Express listening on port: 3100");

// Routers
// Home page
app.get("/", (req, res) => {
	res.render("index");
});

app.get("/index.html", (req, res) => {
	res.render("index");
});

// Pagina 2
app.get("/pagina2", (req, res) => {
	res.render("page2");
});

app.get("/pagina2.html", (req, res) => {
	res.render("page2");
});

// Pagina 3
app.get("/pagina3", (req, res) => {
	res.render("page3");
});

app.get("/pagina3.html", (req, res) => {
	res.render("page3");
});