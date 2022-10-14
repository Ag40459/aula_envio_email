require('dotenv').config()
const express = require('express');
const { login } = require('./controladores/login');
const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.post('/login', login);

app.listen(port);