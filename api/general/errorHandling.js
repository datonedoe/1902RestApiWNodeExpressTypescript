"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiErrorHandler = function (err, req, res, next) {
    switch (req.app.get("env")) {
        case "development":
            console.log('ERROR:', err.message);
            return res.status(err.status).json(err);
        case "production":
            // production logging
            return res.status(err.status).json(err.publicVersion());
    }
};
