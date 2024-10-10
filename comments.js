// create web server
// create a route for comments
// create a route for comments/:commentId

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.send('This is the comments route');
});

app.get('/comments/:commentId', (req, res) => {
  res.send(`This is the comment with id ${req.params.commentId}`);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});