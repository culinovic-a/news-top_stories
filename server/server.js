'use strict';
// const cors = require('cors');
const authRoutes = require('./auth/auth.routes');
const express = require('express');
const properties = require('./config/properties');
const DB = require('./config/db');
//init db
DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// app.use(cors());

app.use('/api', router);
authRoutes(router);
router.get('/', (req, res) => {
  res.send('hello from home');
});

app.use(router);

app.listen(properties.PORT, () =>
  console.log(`server running on port ${properties.PORT}`)
);
