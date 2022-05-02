const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { json, response } = require('express');
const { Pool } = require('pg');
const { pool } = require('./config/db');

const PORT = process.env.PORT || 3001;

app.use(bodyParser/json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  // res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening om ${PORT}`)
});