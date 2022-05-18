class ApiError extends Error{
    constructor(status, message){
        super()
        this.status = status
        this.message = message
    }

    static badRequest(message){
        return new ApiError(404, message)
    }
    static wrongPassword(message){
        return console.log(message)
    }
}

module.exports = ApiError