const express = require('express');
const cors = require('cors');
const app = express();
const products = require('./products');

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=> {
    res.send("Welcome to our online shop ...");
})

app.get('/products', (req,res)=> {
    res.send(products);
})
const port = process.env.PORT || 5000;

app.listen(5000, console.log(`Server running on port 5000 ${port}`));