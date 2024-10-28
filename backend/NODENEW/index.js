
//  ..................... Express....................................

const express =require('express');
const app = express()
const validation= require('./validation')
const Token = require('./token')

const middleware=[Token,validation]
app.get('/profile',[...middleware],(req,res)=>{
    console.log('user Logged')
    res.send('<h1>success</h1>')
})

const port = process.env.PORT || 3001;
app.listen(port)

  








// const logger =require('./utils')
// console.log(logger)



// const  http =require('http');
// const fs =require('fs');
// const path =require('path');
//  const server =http.createServer((req,res)=>{
//     const filepath= path.join(__dirname, 'views','index.html')

//     fs.readFile(filepath,"utf8",(err, data)=>{
//         if(err) throw err
        
//         res.writeHead(200,{"Content-Type":'text/html'})
//         res.end(data);
        
//     })
// });
// const port= process.env.PORT || 3001;
// server.listen(port,()=>console.log(`Server is running ${port}`))

