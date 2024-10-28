module.exports= function Token(req,res,next){
    console.log("creating token")

       
        req.token=true
        next()

}