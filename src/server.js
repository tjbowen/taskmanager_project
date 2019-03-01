const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`You are on port ${port}`) )

app.get('/express_backend', (req, res) => {
    res.send({express: "You're express backend has been connected"});
});