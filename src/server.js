const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');



app.listen(port, () => console.log(`You are on port ${port}`) )

app.use(cors());

// app.get('/express_backend', (req, res) => {
//     res.send({express: "You're express backend has been connected"});
// });

app.get('/express_backend', (req, res) => {
    res.send({
        createDate: 155025360000,
        description: "Work on get route",
        dueDate: 155025360000,
        id: 1,
        notes: "Due on Saturday",
        tags: [{
            color: "#310b0b",
            description: "red",
            id: 1, 
            isChecked: false
        }]
    })
})