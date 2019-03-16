const express = require('express');
const app = express();
const logger = require('morgan');
const { Client } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
const user_id = 16;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const client = new Client({
    label: "Task_manager",
    host: "pgdb.accsoftwarebootcamp.com",
    database: "accsoftwarebootcamp",
    certPath: "",
    port: 5432,
    user: "task_manager",
    password: "tm_rocks"
})

client.connect((err) =>{
    if (err){
        console.log("DB connection error is ", err.stack)
    } else {
        console.log(`Connected to ${client.database} DB`)
    }
})

const port = process.env.PORT || 5000;

app.use(cors());
app.use(logger('dev'));

// app.get('/express_backend', (req, res) => {
//     res.send({
//         createDate: 155025360000,
//         description: "Work on get route",
//         dueDate: 155025360000,
//         id: 1,
//         notes: "Due on Saturday",
//         tags: [{
//             color: "#310b0b",
//             description: "red",
//             id: 1, 
//             isChecked: false
//         }]
//     })
//     });

app.get('/express_backend', (req, res) => {
    let query = `SELECT *
                 FROM task_manager_schema.todos`;
    client.query(query, (err, result) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log("DB connected");
            res.send(result)
        }
    })
});

app.post('/express_backend', (req, res) => {
    let newDescription = req.body.description;
    let newDueDate = req.body.dueDate;
    let newNote = req.body.note;
    // let newCreateDate = req.body.createDate;
    
    if(!newDescription){
        res.status(411).send({ message: "No task entered."})
    };
    let query = `INSERT INTO task_manager_schema.todos(description, notes, due_date, create_date)
                 VALUES ('${newDescription}', '${newNote}', ${newDueDate})`;
    client.query(query, (err, result) => {
        if(err){
            console.log(err.stack);
            res.end();
        }
        console.log(result);
        res.send(result);
    })
})

app.listen(port, () => console.log(`You are on port ${port}`));