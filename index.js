const express = require('express');

const path = require('path');

require('dotenv').config({ path: 'variables.env' });

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('listening on port' + port);
})

