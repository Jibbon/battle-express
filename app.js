var express = require('express');
var app = express();

app.use(express.static('public', {
  maxAge: '31556952000' // uses milliseconds per docs
}))

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
