const express=require("express");
const app=express();
const https=require("https");

app.get('/',function(req,res){
    const url="https://api.openweathermap.org/data/2.5/weather?q=bharatpur,india%20india&appid=79b1455751d63c15bc51c3ed8836ba77";
    https.get(url,function(response){
        console.log(response.statusCode);
    });
    res.send("server is up and running.");
});

app.post('/bharat', function(req,res){
    const url="https://api.openweathermap.org/data/2.5/weather?q=indore,india%20india&appid=79b1455751d63c15bc51c3ed8836ba77";
    https.get(url,function(response){
        console.log(response.statusCode);
    });
    res.send("server is up and running.");
});

app.listen(8080,function(){
    console.log("app is listening on 8080");
});
