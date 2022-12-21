const checkAuthorization = (req, res, next) => {
    if (req.decoded.role !== 'admin') {
        res.send('Unauthorized!');
    }
    else {
        next();
    }
}

export default checkAuthorization;