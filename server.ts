import * as express from 'express';
const app = express();

import * as morgan from 'morgan';

const logger = morgan("dev");
import * as bodyparser from 'body-parser';

import { apiGetTours } from './api/tours/apiGetTours';
import { apiGetTourDetail } from './api/tours/apiGetTourDetails';
import { apiCreateTour } from './api/tours/apiCreateTour';
import { apiDeleteTour } from './api/tours/apiDeleteTour';
import { apiUpdateTour } from './api/tours/apiUpdateTour';
import { CustomRequestHandler } from './model/express';
import { apiUploadImage } from './api/tours/apiUploadImage';
import { apiErrorHandler } from "./api/general/errorHandling";
// console.log(DataStore.tours);

// app.get('/', (req, res, next) => {
//   res.send('Hi Darwin');
// });

const authenticator: CustomRequestHandler = (req, res, next) => {
  const username = "Andy123";
  req.user = username;
  next();
}

const jsonParser = bodyparser.json();
const urlEncodedParser = bodyparser.urlencoded({ extended: true });
app.use(jsonParser);
app.use(urlEncodedParser);

app.use(authenticator);
app.use(logger);

import * as path from 'path';

app.use("/static", express.static(path.join(__dirname, "public", "img")));

app.get('/tours', logger, apiGetTours);

app.get('/tours/:id', apiGetTourDetail);

app.post('/tours', jsonParser, apiCreateTour);

app.delete('/tours/:id', apiDeleteTour);

app.put('/tours/:id', jsonParser, apiUpdateTour);

app.post("/tours/:id/img", apiUploadImage);

app.listen(process.env.PORT || 8091, () => {
  console.log('Server started');
});

app.use(apiErrorHandler);


