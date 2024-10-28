module.exports=function validation(req,res,next){
    if(req.token){
        console.log("token approved")
        next()
    }
    
    console.log('NO token')
    res.send("<h1>No auth</h1>")
}

