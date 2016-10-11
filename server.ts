
/// <reference path="typings/express/express.d.ts" />
import * as express from 'express';
import * as path from 'path';

//var httpProxy = require('http-proxy');
/*var proxy = httpProxy.createProxyServer({
  changeOrigin:true,
  port:80
});*/
var WWW  = path.resolve(__dirname);

const app:express.Express = express();

app.use(express.static(WWW));
/*app.get('/', function(request:express.Request, response:express.Response){
  response.sendFile('index.html',{ 'root':WWW});
});
app.get('/login', function(request:express.Request, response:express.Response){
  response.sendFile('index.html',{ 'root':WWW});
});*/

/*app.all('/proxy/!*', function(req: express.Request, res:express.Response) {
  var proxyURL = "http://grabopwstest.us-west-2.elasticbeanstalk.com/" ;
  req.url = req.url.substr(6);
  console.log(req.url);
  var options = {target : proxyURL};
  proxy.web(req, res, options);

});*/

function redirectIndex(req,res){  res.sendFile('index.html',{ 'root':WWW});}
app.use(redirectIndex);

/*
app.get('/welcome/', function(request:express.Request, response:express.Response){
  response.sendFile('index.html',{ 'root':WWW});
});
app.get('/welcome', function(request:express.Request, response:express.Response){
  response.sendFile('index.html',{ 'root':WWW});
});
app.get('/welcome/!*', function(request:express.Request, response:express.Response){
  response.sendFile('index.html',{ 'root':WWW});
});
*/





const port:number = process.env.PORT || 55555;

app.listen(port,function(){
  console.log('http://127.0.0.1:' + port);

});
