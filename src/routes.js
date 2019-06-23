const express = require('express');
const multer = require('multer');
const routes = new express.Router();
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const upload = multer(uploadConfig);


routes.get('/',(req, res) => {
  return res.send(`oooiiOOO ${req.query.name}!!!`);
});

routes.post('/posts', upload.single('image'), PostController.store);
routes.get('/posts', PostController.index);
routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;
