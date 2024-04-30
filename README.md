# Simple NodeJS HTTP Server

## Requirment
* You must have [NodeJS](https://nodejs.org/en/download) installed

  
## Usage:
1) Clone the project.
   
```javascript
clone https://github.com/akbarijedi/Simple_NodeJS_Http_server
```
  
2) go to the project directory
   
```javascript
cd Simple_NodeJS_Http_server
```
  
3) Edit the server.js file
   
 ```javascript
 node server.js
```

 ## main file is SERVER.JS
 ```javascript
// import NodeJS http module
var http = require('http')
// import custome module tha create by myself :)
var dateTime = require('./dateTime')
// import NodeJS url module to split url 
var url = require('url')
// Define listening Port
let serverport = 9000

// create server project
http.createServer((req,res)=>{
    // indicate that this content is a text/html
    res.writeHead(200, {'Content-Type': 'text/html'});
    // pars URL
    var mydata = url.parse(req.url, true).query;
    // set data to reponse
    res.write(`<html>
        <body>
            ` +
            mydata.name
            +`
        </body>
    </html> <hr>  ` 
    // show current date and time
    + dateTime.nowDateTime()
    )
    res.end()
}).listen(serverport)

// say the server is running on this address
console.log(' Server is up and running on  http://localhost:'+ serverport)


```
