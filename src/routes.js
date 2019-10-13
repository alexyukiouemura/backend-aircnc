const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

const sessionController = require('./controllers/SessionController');
const spotsController = require('./controllers/SpotController');
const dashboardController = require('./controllers/dashboardController');
const bookingController = require('./controllers/bookingController');

routes.post('/sessions', sessionController.store);

routes.get('/spots', spotsController.index);
routes.post('/spots', upload.single('thumbnail'), spotsController.store);

routes.get('/dashboard', dashboardController.show);

routes.post('/spots/:spot_id/bookings', bookingController.store);

module.exports = routes;