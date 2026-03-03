const ErrorMiddleware = (err, req, res, next) =>{
    try {
        let error = {}
        error.message = err.message;
        if (error.name === "CastError") {
            error.message = "Resource not found";
            error.statusCode = 404;
            res.json({
                success: false,
                message: error.message
            })
        }
        if (error.name === "ValidationError") {
            error.message = "Validation Error";
            res.json({
                success: false,
                message: error.message
            })
            error.statusCode = 400;
        }
        if (error.code === 11000) {
            error.message = "Duplicate field value entered";
            error.statusCode = 400;
            res.json({
                success: false,
                message: error.message
            })
        }
        
        res.status(error.statusCode || 500).json({message: error.message || "Server Error"});
    } catch (error) {
        next(error);
    }
}

export default ErrorMiddleware;