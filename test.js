const express = require('express');
const mongo = require('mongodb');
const app = express();
const path = require('path');
const router = express.Router();


app.use(express.static("public"));
// app.set("images", path.join(__dirname, "images"));
app.use('/images',express.static( __dirname +'/images'))
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');