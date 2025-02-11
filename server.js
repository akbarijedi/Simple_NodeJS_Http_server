// import NodeJS http module
var http = require('http')

// import custome module tha create by myself :)
var dateTime = require('./dateTime')

// import NodeJS url module to split url 
var url = require('url')

// import filesystem
var fs = require('fs')

// Define listening Port
let serverport = 9000

// create server project
http.createServer((req,res)=>{
    fs.readFile('fsmoduletest.html',(err,data)=>{
        // indicate that this content is a text/html
        res.writeHead(200, {'Content-Type': 'text/html'});
        // pars URL
        var mydata = url.parse(req.url, true).query;
        // set data to reponse
        res.write(`<html>
            <body>
                ` +
                data
                //mydata.name
                +`
            </body>
        </html> <hr>  ` 
        // show current date and time
        + dateTime.nowDateTime()
        )
        res.end()
    })
}).listen(serverport)

// say the server is running on this address
console.log(' Server is up and running on  http://localhost:'+ serverport)
