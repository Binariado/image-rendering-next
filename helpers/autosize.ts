import type { NextApiRequest, NextApiResponse } from 'next'
import { calculateAspectRatioFit, resize_image } from "./calResize"

const sizeOf = require('image-size');

const PAGEDEFAULT = "A4";
const TAMNIOPAGE = {
  A4: {
    w: 796.8,
    h: 1123.2,
  }
}

export const size = (file: any): Promise<unknown> => {
  return new Promise((resolve, reject) => {

    sizeOf(file.path, function (err: any, dimensions: { width: any; height: any; orientation?: any; type?: any; }) {
      const { height, orientation, width, type } = dimensions;
      const fullTamanio = TAMNIOPAGE[PAGEDEFAULT];

      const r1 = calculateAspectRatioFit(
        {
          srcWidth: width,
          srcHeight: height,
          maxWidth: fullTamanio.w,
          maxHeight: fullTamanio.h
        }
      );

      const dataFile = {
        height: Math.floor(r1.height),
        width: Math.floor(r1.width),
        orientation,
        type,
        path: file.path,
        name: file.name,
        size: file.size,
      };

      resolve(dataFile);
    })
  })
}