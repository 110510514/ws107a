const http = require ('http')
const fs = require('fs')
const url = require ('url')

const server = http.createServer (function(req , res) {
  const path = url.parse (req.url)
  const filePath = '.' + path.pathname
  console.log ('filepath=' + filePath )
  fs.readFile(filePath , 'utf8' , function(err) {
    switch(req.url){
            case '/hello' :
                Text = '你好' ; 
                break ;
        
            case '/name' :
                Text = '莊奕軒' ; 
                break ;
        
            case '/id' :
                Text = '110510514' ; 
                break ;
            

    }
    res.writeHead(200, {'Content-Type': 'text/html ; charset=utf-8'})
    res.write(Text)
    res.end()
    
})
})
server.listen(3000)
console.log('Server running at http://localhost:3000')