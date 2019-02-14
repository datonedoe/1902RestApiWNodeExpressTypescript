import { APIError, PublicInfo } from './../../model/shared/messages';
import { DataStore } from '../../data/data';
import { RequestHandler } from 'express';
import * as uuid from 'uuid/v4';

export const apiCreateTour: RequestHandler = (req, res, next) => {
  if (!req.body) {
    next(new APIError("Data missing", "No Data in Request Body.", 400));
  }
  const newTour = {
    id: uuid(),
    location: req.body.location || "",
    tourTitle: req.body.tourTitle || "",
    tourCategory: req.body.tourCategory || "",
    tourDescription: req.body.tourDescription || "",
    price: req.body.price || 0,
    currency: req.body.current,
    img: []
  }

  DataStore.tours.push(newTour);
  res.json(new PublicInfo("Tour added.", 200, {tour: newTour}));
}