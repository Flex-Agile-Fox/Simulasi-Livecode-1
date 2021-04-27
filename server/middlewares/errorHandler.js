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
    }
}