import { __root } from './../../config';
import * as path from 'path';
import * as uuid from 'uuid/v4';
import multer = require('multer');
import { RequestHandler } from 'express';
export function getStaticHome(env: string) {
  switch (env) {
    case "development":
      return "http://localhost:8091/static/"
    case "production":
    // cdn
    default:
      break;
  }
}

export function fileMapper(env: string): (filename: string) => string {
  return (filename) => getStaticHome(env) + filename;
}

export function getFileUploader(env: string): RequestHandler {
  switch(env) {
    case "development":
      const fileID = uuid();
      const fileStore = multer.diskStorage({
        destination: function(req, file, callback) {
          callback(null, path.join(__root, "public", "img"));
        },
        filename: function(req, file, callback) {
          callback(null, fileID + path.extname(file.originalname));
        }
      });
      return multer({storage: fileStore}).single("file")
    // case "production":
    default:
      return (req, res, next) => next();
  }
}