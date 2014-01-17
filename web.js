var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());
var htmlfile = "index.html";

var buf = fs.readFileSync(htmlfile);
var out = buf.toString();
app.get('/', function(request, response) {
  response.send(out);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
