const errorHandler = (err, req, res, next) => {
    let errorCode;
    let errorMessages;

    switch (err.name) {
        case 'INVALID_ACCESS_TOKEN':
            errorCode = 401;
            errorMessages.push('invalid access token')
            break;
        case 'MISSING_ACCESS_TOKEN':
            errorCode = 401;
            errorMessages.push('missing access token')
            break;
        case 'REGISTRATION_FAILED':
            errorCode = 401;
            errorMessages.push('registration failed')
            break;
        case 'USER_NOT_FOUND':
            errorCode = 401;
            errorMessages.push('user not found')
            break;
    }
}