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