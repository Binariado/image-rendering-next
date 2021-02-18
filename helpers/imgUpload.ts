const cloudinary = require('cloudinary').v2;
import { Env } from "../utils/Env";

cloudinary.config(Env.cloudinary);

export {
  cloudinary
};

export const imgUpload = async (dataFile: any, callback: Function) => {
  try {
    cloudinary.uploader.upload(dataFile.path, function (error: any, result: any) {
      if(!error){
        callback({
          ...dataFile,
          format: result.format,
          url: result.secure_url,
          secure_url: result.secure_url,
          public_id: result.public_id,
          originalWidth: result.width,
          originalheight: result.height,
        })
      }
    });
  } catch (error) {
    console.log(error)
  };
};