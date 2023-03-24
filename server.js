const express = require('express');
const budget = require('./models/budget');
const app = express();
const budgets = require('./models/budget');

//middleware
app.set('view engine', 'ejs');
app.use(express.json());

app.use(express.urlencoded({ extended:false }));
// app.use(express.static());

//routes

//INDEX route
app.get('/budgets', (req, res) => {
    res.render('index', {budgets});
})

//SHOW route
app.get('/budgets/:index', (req, res) => {
    let budget = budgets[req.params.index];
    res.render('show', {budget: budget});
})

//NEW route
app.get('/budgets/new', (req, res) => {

})

//CREATE route
app.post('/budgets', (req, res) => {

})

//FALLBACK route
app.get('/*', (req, res) => {
    res.send("You've done bad");
})

app.listen(4000, () => {
    console.log(`🏝️ Server is listening to port 4000 🎧`);
})