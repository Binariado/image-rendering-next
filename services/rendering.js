import { db } from "../firebase-config";
import { imgUpload, cloudinary, } from '../helpers/imgUpload'
import { size } from '../helpers/autosize'
import firebase from 'firebase';

class RenderingImg {
  constructor() {
    this.dbImage = db.collection("rendering-img");
  }

  autosize(file) {
    return size(file);
  }

  async addImg(metadata) {
    return await imgUpload(metadata, (dataFile) => {
      return this.dbImage.add(dataFile);
    });
  }
}

export {
  RenderingImg
}