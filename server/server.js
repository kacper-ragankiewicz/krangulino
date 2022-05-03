'use strict';
const express = require('express');
const app = express();
const { pool } = require('./config/dbConfig');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: false}));
app.use(express.static('../client/build'))

app.get('/', (req,res) => {
})

app.post('/user/register', (req,res) => {
  let [name, email, password] = req.body;

  console.log(
    name,
    email,
    password
  )
})

app.listen(PORT, ()=> {
  console.log(`Server is running on ${PORT}`)
})
































































// const path = require('path');
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const { json, response } = require('express');

// const PORT = process.env.PORT || 3001;

// //mocked
// const controler = require('./control/control');

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // Handle GET requests to /api route
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// // All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   // res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

// app.listen(PORT, () => {
//     console.log(`Server listening om ${PORT}`)
// });