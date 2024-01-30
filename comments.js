// Create web server with express
const express = require('express');
const app = express();

// Import comments data
const comments = require('./data/comments');

// Set up a route for GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Set up a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
  // Find comment that matches the id in the request
  const foundComment = comments.find((comment) => {
    return comment.id === Number(req.params.id);
  });

  // Send the comment as JSON
  res.json(foundComment);
});

// Start listening on port 8000
app.listen(8000, () => {
  console.log('Server is listening on port 8000. Ready to accept requests!');
});