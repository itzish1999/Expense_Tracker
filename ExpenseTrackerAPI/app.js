const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require ('./config/queries');

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.get('/', helloController);

app.get('/users', (req, res) => {
    console.log('User Page')
    res.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


app.listen(8080, () => {
    console.log('Node server running on port 8080')
});

/*look at different libraries to see what you need on npmjs.com.
There is always a function for practically everything.
Even for allocating date and time. Choosing libraries is a senior thing to do.

For now this assignment is to make a controller folder, learn routes, http requests attach 2 different
database tables with a unique ID assigned to each User */