"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (req, res, next) {
    res.send('Hi Darwin');
});
app.listen(process.env.PORT || 8091, function () {
    console.log('Server started');
});
