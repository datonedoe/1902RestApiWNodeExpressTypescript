"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var messages_1 = require("./../../model/shared/messages");
var data_1 = require("../../data/data");
var uuid = require("uuid/v4");
exports.apiCreateTour = function (req, res, next) {
    if (!req.body) {
        next(new messages_1.APIError("Data missing", "No Data in Request Body.", 400));
    }
    var newTour = {
        id: uuid(),
        location: req.body.location || "",
        tourTitle: req.body.tourTitle || "",
        tourCategory: req.body.tourCategory || "",
        tourDescription: req.body.tourDescription || "",
        price: req.body.price || 0,
        currency: req.body.current,
        img: []
    };
    data_1.DataStore.tours.push(newTour);
    res.json(new messages_1.PublicInfo("Tour added.", 200, { tour: newTour }));
};
