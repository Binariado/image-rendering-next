import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useForm } from '../hooks'
import {api} from '../api'


export default function Home() {
  const refFile = React.useRef(null);
  const [formValue, handleInput, handleInputReset] = useForm({
    images: []
  });

  const { images } = formValue;

  const uploadFile = async () => {
    if(images.length === 0) {
      return;
    }

    try {
      const resp = await api.uploadImages({images});
      console.log(resp);
      handleInputReset();
      refFile.current.value = '';
    } catch (error) {
      
    }
  }

  React.useEffect(() => {
    uploadFile();
  }, [images])

  return (
    <div className="h-screen flex">
      <div className="h-full w-1/5 max-w-sm">
        <div className="">
          <input ref={refFile} name="images" onChange={handleInput} type="file" multiple />
        </div>
        <div className="w-full  p-2">
          <figure className="w-full rounded-xl flex h-30 max-h-30">
            <img className="w-16 h-16 md:h-auto" src="https://ep01.epimg.net/elpais/imagenes/2019/08/26/buenavida/1566815443_201344_1566817103_noticia_normal.jpg" />
            <div className="truncate pl-1">
              perro mirando la calle
              perro mirando la calle
            </div>
          </figure>
        </div>
      </div>
      <div className="h-full flex-1 container px-4 overflow-x-auto bg-gray-100">
        <div className="grid-flow-row auto-rows-max pt-3.5 pb-10 w-full">

          <div className="conte-page flex justify-center">
            <div className={`aspect-w-16 aspect-h-10 mb-2.5 page pag-1 bg-white shadow ${styles.page}`}>
              1
            </div>
          </div>
          <div className="conte-page flex justify-center">
            <div className={`aspect-w-16 aspect-h-10 mb-2.5 page pag-2 bg-white shadow ${styles.page}`}>
              2
            </div>
          </div>
          <div className="conte-page flex justify-center">
            <div className={`aspect-w-16 aspect-h-10 mb-2.5 page pag-3 bg-white shadow ${styles.page}`}>
              3
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
