require('dotenv').config();
var express = require('express');
bodyParser = require('body-parser');
const mongoose = require('mongoose');
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const UrlModel = require('./models/UrlModel.js');

mongoose.connect(process.env.MONGODBURL, {useNewUrlParser: true, useUnifiedTopology : true})

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.get("/", function (request, response) {
    response.render("index");
  });

app.post('/shorten', async (req, res) =>{
 await UrlModel.create({fullUrl : req.body.url})
 res.send(200)

})

app.get('/getUrls', async(req, res)=>{
    const urls = await UrlModel.find();
   
    res.send(urls)
})

app.get('/:shortUrl', async (req, res)=>{
    const url = await UrlModel.findOne({shortUrl : req.params.shortUrl})
    if (url == null) return res.sendStatus(404)
    url.clicks++
    url.save()
    res.redirect(url.full)
})

  var listener = app.listen(3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });