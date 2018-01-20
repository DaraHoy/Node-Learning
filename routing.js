var express = require("express");
var app = express();

var quotes = {
    "einstein": "life is like riding a bicycle..."
}

app.get('/quotes/name', function(req, res){
    var quote = quote[req.params.name];
    res.render('quotes.ejs', {
        name: req.params.name,
        quote: quote
    });
});

app.listen(8080);