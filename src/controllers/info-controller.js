const {statusCodes} = require('http-status-codes')
const info = (req,res) =>{
    return res.status(statusCodes.OK).json({
        success:true,
        message:"Ok",
        error:{},
        data:{}
    })
}
module.exports ={
    info
}