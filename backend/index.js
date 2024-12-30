const express = require('express');
const cors = require('cors');
const PORT = 3000;

const app = express();
app.use(cors());

let books = [];

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});
