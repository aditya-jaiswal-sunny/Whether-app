var express = require('express');
var bodyParser = require('body-parser');
var app = express();

 app.set('view engine', 'ejs');


 app.use(express.static('./public'));

 
 app.get('/' , function(req , res){	
 res.render('index');
});

let port = process.env.PORT;
if(port == null || port == "")
{
	port = 3000;
}
 app.listen(port);
 console.log('listening at port 3000');   