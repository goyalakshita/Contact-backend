//? when we were running body and getting error we were getting it in the form of html but when need a custom middlewear that takes req,res and in between convert the response in json
const {constants} =require("../constants")
const errorHandler=(err, req, res, next) => {
    const statusCode=res.statusCode ? res.statusCode :500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title:"Validation Failed",message:err.message,stackTrace:err.stack});
            break;
        case constants.NOT_FOUND: 
            res.json({title:"Not found",message:err.message,stackTrace:err.stack});
            break;
        case constants.UNAUTHORIZED: 
            res.json({title:"Unauthorised",message:err.message,stackTrace:err.stack});
            break;
        case constants.FORBIDDEN: 
            res.json({title:"Forbidden",message:err.message,stackTrace:err.stack});
            break;
        case constants.SERVER_ERROR: 
            res.json({title:"Server_Error",message:err.message,stackTrace:err.stack});
            break;
        default:
            console.log("No error, All good");
            break;
    }
    
    
};

module.exports=errorHandler;
