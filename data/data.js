"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonTours = require('./tours.json');
var jsonReviews = require('./reviews.json');
var DataStore = /** @class */ (function () {
    function DataStore() {
    }
    DataStore.tours = jsonTours;
    DataStore.reviews = jsonReviews;
    return DataStore;
}());
exports.DataStore = DataStore;
