import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import { RenderingImg } from "../../../services/rendering";
import Pusher from 'pusher';


const pusher = new Pusher({
  appId: "1157791",
  key: "417939ee8254e91f4f58",
  secret: "aaa4e0da19875746f36d",
  cluster: "us2",
  useTLS: true
});

const fs = require('fs');
const render = new RenderingImg;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const form = new formidable.IncomingForm();

    form.uploadDir = "./upload";
    form.multiples = true;
    form.maxFields = 0;
    form.keepExtensions = true;

    form.on('progress', (bytesReceived, bytesExpected) => {
      //console.log(bytesReceived, bytesExpected)
    });

    // form.on('fileBegin', (name, file) => {
    //   file.path = './upload/' + file.name
    // });

    const deleteFile = (path: any) => {
      fs.unlink(path, function (err: any) {
        if (err) {
          //sentry
          return;
        };
        console.log("REMOVE")
      });
    }

    form.on('file', (name, file) => {
      render.autosize(file)
        .then((metadata: any) => {
          render.addImg(metadata).then(() =>{
            deleteFile(file.path);
          });
        })
    });


    form.on('end', function (err, files) {
      res.status(200).json({ upload: true })
    });

    form.parse(req, (err: any, fields: formidable.Fields, files: formidable.Files) => {
      const { images } = files;
      const arrayImage = images instanceof Array ? images : [images];
      
      if (err) {
        res.status(404).json({ message: "error" })
      }
    });

  } catch (error) {
    res.status(500).json({ message: "internal_serve" })
  }
}