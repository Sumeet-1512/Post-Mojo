var express=require('express');
var app=express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/postMojo',function(req,res)
{
res.sendfile('Mainpage.html');
console.log(req.body)
});
app.get('/post',function(req,res){

res.sendfile('post.html');
})
app.get('/postit',function(req,res){
    res.sendfile('Postit.html')
})

app.get('/signup',function(req,res){

    res.sendfile('signup.html')
})

var server=app.listen(3000,function() {});
