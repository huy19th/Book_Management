"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkAuthorization = (req, res, next) => {
    if (req.decoded.role !== 'admin') {
        res.send('Unauthorized!');
    }
    else {
        next();
    }
};
exports.default = checkAuthorization;
//# sourceMappingURL=checkAuthorization.js.map