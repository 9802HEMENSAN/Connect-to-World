const express = require('express');

// https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=221e180a111fac6abf3e20a582138e8d



const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`)
})