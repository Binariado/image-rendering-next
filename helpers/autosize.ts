import { calculateAspectRatioFit } from "./calResize"
import sharp from 'sharp';

const PAGEDEFAULT = "A4";
const TAMNIOPAGE = {
  A4: {
    w: 796.8,
    h: 1123.2,
  }
}

interface FileProp {
  path: string,
  name: string,
  size: number,
}

/**
 *
 *
 * @param {FileProp} file imagen a procesar
 * @return {*}  {Promise<unknown>} promesa devuelta con los datos de la imagen
 */
export const size = (file: FileProp): Promise<unknown> => {
  return new Promise((resolve) => {
    sharp(file.path)
      .metadata().then((dimensions) => {
        const { height, orientation, width, format } = dimensions;
        const fullTamanio = TAMNIOPAGE[PAGEDEFAULT];

        const $orientation = orientation ? orientation : 0;

        const r1 = calculateAspectRatioFit(
          {
            srcWidth: width,
            srcHeight: height,
            maxWidth: fullTamanio.w,
            maxHeight: fullTamanio.h,
            orientation: $orientation,
          }
        );

        const dataFile = {
          height: Math.floor(r1.height),
          width: Math.floor(r1.width),
          orientation: $orientation,
          format: format ? format : '',
          path: file.path ? file.path : '',
          name: file.name ? file.name : '',
          size: file.size ? file.size : '',
        };

        resolve(dataFile);
      }
      );
  })
}