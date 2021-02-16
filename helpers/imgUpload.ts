const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dfcqfoabr',
  api_key: '487722317766787',
  api_secret: 'wPrJS7RWPaJaOVxxfX4vCc9k8Aw'
});

// cloudinary.image("front_face.png", {
//   secure: true, transformation: [
//     { width: 150, height: 150 },
//   ]
// })

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