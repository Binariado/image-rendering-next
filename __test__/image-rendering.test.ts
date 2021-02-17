import { size } from '../helpers/autosize';

test('should ', async () => {

  const exif: unknown = await size({
    path: `${__dirname}/1.jpg`,
    name: '1',
    size: 123
  });
  const { name }: any = exif;
  
  expect(typeof exif).toBe('object');
  expect(name).toBe('1');

})
