const express = require('express');

const app = express();
const port = 5000;

// DB Connection
require("./src/database/connection");

// Table Creation
const db = require("./src/models/student");
db.sync();

// Static Files
app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));
app.use(express.json());
app.use(express.urlencoded());

//express layouts
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

// Templating Engine
app.set('views','./src/views');
app.set('view engine','ejs');

// Student and Teacher Routes
const teacherRoutes = require("./src/routes/teacherRoutes");
const studentRoutes = require("./src/routes/studentRoutes");
app.use('/teacher',teacherRoutes);
app.use("/student",studentRoutes);

// Routes
app.get('/', (req, res) => {
    res.render('index');
  });

// Listen on port 5000
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});