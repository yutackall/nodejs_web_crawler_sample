var request = require('request');
var fs = require('fs');

var url = "http://kujirahand.com/";
var savepath = "test.html"

request(url).pipe(fs.createWriteStream(savepath));
