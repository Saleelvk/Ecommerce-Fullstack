const express =require('express')
const cors =require('cors')
const app = express()
app.use(cors());
app.get('/',(req,res)=>{
    req.object='saleel'
    res.send()

})
const port=process.env.port || 3000

app.listen(port,()=>{
    console.log(`running ${port}`)
})
 