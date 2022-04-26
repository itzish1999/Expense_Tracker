const express = require('express');
const app = express();
const pool = require('./db.js')

app.use(express.json());

//get all users
app.get("/users", async (req, res) =>{
    try {
        const allUsers = await pool.query("SELECT * FROM users");

        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a specific user
app.get("/users/:id", async (req, res) =>{
    const { id } = req.params;
    try {
        const users = await pool.query("SELECT * FROM users WHERE user_id = $1", [id])
        res.json(users.rows[0]);
    } catch (err){
        console.error(err.message);
    }
});

//post new user
app.post('/users', async(req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        const newUser = await pool.query ("INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *", [firstname, lastname, email, password]);
        
        res.json(newUser.rows[0]);

    } catch (err) {
        console.error(err.message)
    }
});

//update a user
app.put("/users/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { firstname, lastname, email, password } = req.body;

        const updateUsers = await pool.query("UPDATE users SET firstname = $1, lastname = $2, email = $3, password = $4 WHERE user_id = $5", 
        [firstname, lastname, email, password, id]);
        res.json("User was updated");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a user
app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1", [id])
        res.json("User was successfully deleted");
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(8080, () => {
    console.log('Node server running on port 8080');
});