import { PropsResize } from '../utils/autoResize';

/**
 * Conserve aspect ratio of the original region. Useful when shrinking/enlarging
 * images to fit into a certain area.
 *
 * @param {Number} srcWidth width of source image
 * @param {Number} srcHeight height of source image
 * @param {Number} maxWidth maximum available width
 * @param {Number} maxHeight maximum available height
 * @return {Object} { width, height }
 */
export function calculateAspectRatioFit({ srcWidth, srcHeight, maxWidth, maxHeight }: PropsResize) {
  const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
  return { width: srcWidth * ratio, height: srcHeight * ratio };
}

/**
 *
 *
 * @param {PropsResize} {srcWidth, srcHeight, maxWidth, maxHeight}
 * @return {Object} { width, height }
 */
export function resize_image({ srcWidth, srcHeight, maxWidth, maxHeight }: PropsResize) {

  // If the current width is larger than the max, scale height
  // to ratio of max width to current and then set width to max.
  if (srcWidth > maxWidth) {
    const ratio = maxWidth / srcWidth;
    return { width: maxWidth, height: srcWidth * ratio}
  }

  // If the current height is larger than the max, scale width
  // to ratio of max height to current and then set height to max.
  if (srcHeight > maxHeight) {
    const ratio = maxHeight / srcHeight;
    return { width: srcWidth * ratio, height: maxHeight }
  }
}