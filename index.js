const express = require('express');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/', function(req, res){
    return res.render('home', {
        title : "To-Do App",
        todos : todoList
    });
});

var todoList = [
    {
        title: "Why not add a task?",
        date: "may 2, 2019",
        category: "Other"
    },
    {
        title: "Let's make a todo app",
        date: "APR 28, 2019",
        category: "Scool"
    },
    {
        title: "Annual report submission deadline",
        date: "Jun 1, 2019",
        category: "work"
    }
];
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server up and running on port: ${port}`);
});