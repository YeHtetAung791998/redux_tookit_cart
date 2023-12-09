const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.get('/', (req,res)=> {
    res.send("Welcome to our online shop ...");
})

const port = process.env.PORT || 5000;

app.listen(5000, console.log(`Server running on port 5000 ${port}`));