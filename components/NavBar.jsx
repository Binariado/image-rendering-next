import React from 'react'
import Upload from './Upload'

export default function NavBar() {

  return (
    <div className="h-full ">
      <Upload />
      <div className="w-full  p-2">
        <figure className="w-full rounded-xl flex h-30 max-h-30 justify-center">
          <img className="w-20 h-20 md:h-auto" src="https://ep01.epimg.net/elpais/imagenes/2019/08/26/buenavida/1566815443_201344_1566817103_noticia_normal.jpg" />
          {/* <div className="truncate pl-1">
          perro mirando la calle
          perro mirando la calle
        </div> */}
        </figure>
      </div>
    </div>
  )
}
