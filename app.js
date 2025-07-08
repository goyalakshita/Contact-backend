// console.log("hello world")

// var a=7
// var b=8
// var c=a+b
// console.log(c)

//! creating a service
//? we need to use http module
var http=require('http')  //? reuire function we are using ..('http') we are saying we want http module



//? createServer is a function which will create a service for u..
http.createServer(function(req,res) {     //? passing function insode function..this function will accept 2 parameters..first is which you received from client..second is you want to sent to the client
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write("welcome back alien")  //? or if we want only 1 statement we can use end instead if write
    res.end()   
            


}).listen(8080)