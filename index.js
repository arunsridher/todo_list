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

var id = 3;
var todoList = [
    {
        title: "Why not add a task?",
        date: "may 2, 2019",
        category: "Other",
        id: 1
    },
    {
        title: "Let's make a todo app",
        date: "APR 28, 2019",
        category: "Scool",
        id: 2
    },
    {
        title: "Annual report submission deadline",
        date: "Jun 1, 2019",
        category: "work",
        id: 3
    }
];

app.post("/create-card", function(req, res){
    todoList.push({
        title: req.body.description,
        date: req.body["due-date"],
        category: req.body.category
    });
    res.redirect('back');
});

app.post("/delete", function(req, res){
    let ids = req.body.ids;
    ids.forEach(element => {
        let cardIndex = todoList.findIndex(card => card.id == element);
        console.log("cardIndex " + cardIndex);
        if(cardIndex != -1){
            todoList.splice(cardIndex, 1);
        }
    });

    res.redirect('back');
    // todoList.findByIdAndDelete(id, function(err){
    //     if(err){
    //         console.log("Couldn't delete contact");
    //         return;    
    //     }

    //     return res.redirect('back');
    // });
    // let contactIndex = contactList.findIndex(contact => contact.phone == phone);
    
    // if(contactIndex != -1){
    //     contactList.splice(contactIndex, 1);
    // }

    // return res.redirect("back");
});

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server up and running on port: ${port}`);
});