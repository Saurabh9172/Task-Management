const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'manager', 
    database: 'task_management',
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});


app.post('/tasks', (req, res) => {
    const { name, time } = req.body;
    const query = 'INSERT INTO tasks (name, time) VALUES (?, ?)';
    db.query(query, [name, time], (err, result) => {
        if (err) throw err;
        res.send({ success: true, id: result.insertId });
    });
});


app.get('/tasks', (req, res) => {
    const query = 'SELECT * FROM tasks ORDER BY time ASC'; 
    db.query(query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});


// Update Task Status
app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const query = 'UPDATE tasks SET status = "completed" WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) throw err;
        res.send({ success: true });
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
