// Packages
const express = require("express"),
	hbs = require("hbs");

// Express init
const app = express();
app.use(express.static("public"));
app.set('view engine', 'hbs');
app.listen(process.env.PORT || 3000);
console.log("Express is listening");

// Routers
// Home page
app.get(["/", "/index.html", "/index", "/pagina1", "/pagina1.html"], (req, res) => {
	res.render("index");
});

app.get(["/pagina2", "/pagina2.html"], (req, res) => {
	res.render("page2");
});

app.get(["/pagina3", "/pagina3.html"], (req, res) => {
	res.render("page3");
});

// 14 day system
app.get(["/dag:day/", "/dag:day/index.html"], (req, res) => {
    res.render(`day${req.params.day}/index`);
});

app.get(["/dag:day/pagina2", "/dag:day/pagina2.html"], (req, res) => {
    res.render(`day${req.params.day}/page2`);
});

app.get(["/dag:day/pagina3", "/dag:day/pagina3.html"], (req, res) => {
    res.render(`day${req.params.day}/page3`);
});

// 404 Page
app.use((req, res) => {
    res.status(400);
    res.render("day2/404.hbs");
});