/**
 * Created by imamudinnaseem on 5/22/17.
 */

var express = require('express');
var app = express();
var proxy = require('express-http-proxy');


app.use('/polymer', proxy('https://shop.polymer-project.org'))
app.get('/api/data', (req, resp) => {
    resp.send("Hello world")
});
app.listen(4001)
console.log('listening to port ' + 4001)