"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./../../config");
var path = require("path");
var uuid = require("uuid/v4");
var multer = require("multer");
function getStaticHome(env) {
    switch (env) {
        case "development":
            return "http://localhost:8091/static/";
        case "production":
        // cdn
        default:
            break;
    }
}
exports.getStaticHome = getStaticHome;
function fileMapper(env) {
    return function (filename) { return getStaticHome(env) + filename; };
}
exports.fileMapper = fileMapper;
function getFileUploader(env) {
    switch (env) {
        case "development":
            var fileID_1 = uuid();
            var fileStore = multer.diskStorage({
                destination: function (req, file, callback) {
                    callback(null, path.join(config_1.__root, "public", "img"));
                },
                filename: function (req, file, callback) {
                    callback(null, fileID_1 + path.extname(file.originalname));
                }
            });
            return multer({ storage: fileStore }).single("file");
        // case "production":
        default:
            return function (req, res, next) { return next(); };
    }
}
exports.getFileUploader = getFileUploader;
