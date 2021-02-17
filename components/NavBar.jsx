import React from 'react'
import { useSelector } from 'react-redux'
import Upload from './Upload'

/* 
format: "jpg"
height: 1062
name: "1.jpg"
orientation: 1
originalWidth: 3024
originalheight: 4032
path: "upload/upload_635a4fb7247c528c6dfa9d1c7d3d64a5.jpg"
public_id: "p85t1c9etbtqyjpkqv4k"
secure_url: "https://res.cloudinary.com/dfcqfoabr/image/upload/v1613592899/p85t1c9etbtqyjpkqv4k.jpg"
size: 1618804
*/

/**
 *
 *
 * @export
 * @return {Function} 
 */
export default function NavBar() {
  const images = useSelector(state => state.images);
  const {imagesAll} = images;

  return (
    <div className="h-full overflow-x-auto cursor-pointer">
      <Upload />
      <div className="w-full  p-2">
        {imagesAll.map((item, idx) => (
          <figure key={`${item.name}-${idx}`} className="w-full rounded-xl flex h-30 max-h-30 justify-center">
            <img className="w-20 h-20 md:h-auto" src={item.secure_url} />
          </figure>
        ))}
      </div>
    </div>
  )
}
