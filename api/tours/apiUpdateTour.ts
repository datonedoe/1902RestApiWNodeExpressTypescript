import { DataStore } from '../../data/data';
import { RequestHandler } from 'express';

export const apiUpdateTour: RequestHandler = (req, res, next) => {
  const tourID = req.params.id;
  const tourIndex = DataStore.tours.findIndex((item: any) => {
    return item.id === tourID;
  });

  if (tourIndex > -1) {
    const originalTour = DataStore.tours[tourIndex];
    const newTour = {
      id: tourID,
      location: req.body.location || "",
      tourTitle: req.body.tourTitle || "",
      tourCategory: req.body.tourCategory || "",
      tourDescription: req.body.tourDescription || "",
      price: req.body.price || 0,
      currency: req.body.current,
      img: originalTour.img
    }
    DataStore.tours[tourIndex] = newTour;
    res.json({
      "status": "success",
      "message": "Element updated"
    })
  } else {
    res.json({
      "status": "error",
      "message": "Element not found"
    })
  }
};