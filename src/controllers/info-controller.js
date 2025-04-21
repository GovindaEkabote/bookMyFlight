

const info = (req,res) =>{
    return res.status(200).json({
        success:true,
        message:"Ok",
        error:{},
        data:{}
    })
}
module.exports ={
    info
}