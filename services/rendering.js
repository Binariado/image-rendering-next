import { db } from "../firebase-config";
import { imgUpload } from '../helpers/imgUpload'
import { size } from '../helpers/autosize'
import Pusher from 'pusher';
import { Env } from "../utils/Env";

const pusher = new Pusher(Env.pusher);

class RenderingImg {
  constructor() {
   // this.dbImage = db.collection("rendering-img");
  }

  autosize(file) {
    return size(file);
  }

  async addImg(metadata) {
    return await imgUpload(metadata, (dataFile) => {
      const dataAllFile = {
        ...dataFile,
        // uid: db.collection('users-proteccion').doc('0123456789abcdef')
      }
      pusher.trigger("channel-upload-images", "event-0123456789abcdef", {
        message: dataAllFile
      });
     // return this.dbImage.add(dataAllFile);
    });
  }

  async searchImages(
    fil, cond, search, collect, ref = undefined
  ) {
    this.dbImage = db.collection(collect);

    if (ref) {
      this.dbImage = db.collection(ref).doc(search);
    }

    const images = [];

    (await this.dbImage
      .where(fil, cond, ref ? this.docRef : search)
      .get()).forEach(snap => images.push({
        $key: snap.id.toString(),
        ...snap.data()
      }));

    return images;
  }
}

export {
  RenderingImg
}