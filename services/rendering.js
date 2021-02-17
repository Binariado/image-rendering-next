import { db } from "../firebase-config";
import { imgUpload } from '../helpers/imgUpload'
import { size } from '../helpers/autosize'

class RenderingImg {
  constructor() {
    this.dbImage = db.collection("rendering-img");
  }

  autosize(file) {
    return size(file);
  }

  async addImg(metadata) {
    return await imgUpload(metadata, (dataFile) => {
      return this.dbImage.add({
        ...dataFile,
        uid:  db.collection('users-proteccion').doc('0123456789abcdef')
      });
    });
  }
}

export {
  RenderingImg
}