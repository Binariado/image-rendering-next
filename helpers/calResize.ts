import { PropsResize } from '../utils/autoResize';

/**
 * Conserva la relación de aspecto de la región original
 *
 * @param {Number} srcWidth ancho de la imagen de origen
 * @param {Number} srcHeight altura de la imagen de origen
 * @param {Number} maxWidth ancho máximo disponible
 * @param {Number} maxHeight altura máxima disponible
 * @return {Object} { width, height }
 */
export function calculateAspectRatioFit({ srcWidth, srcHeight, maxWidth, maxHeight }: PropsResize) {
  const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
  return { width: srcWidth * ratio, height: srcHeight * ratio };
}