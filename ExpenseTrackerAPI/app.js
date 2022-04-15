const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.send('Hello World!')

});

app.listen(8080, () => {
    console.log('Node server running on port 8080')
});