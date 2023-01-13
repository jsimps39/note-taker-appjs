const express = require('express');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const path = require('path');

const app = express();

//path for index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './puclic/index.html'));
});

//path for notes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './puclic/notes.html'));
});

app.listen(PORT, () => {});