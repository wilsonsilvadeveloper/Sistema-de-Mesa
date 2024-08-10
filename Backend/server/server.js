const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const app = express();
const port = 3001;
const routes = require('./routes/index');

app.use(cors());
app.use(body_parser.json());
app.use(routes);

app.listen(port, ()=> {
    console.log('Server is running on port' + port);
})