import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import { useForm } from '../hooks'
import { api } from '../api'


export default function Home() {
  const refFile = React.useRef(null);
  const [formValue, handleInput, handleInputReset] = useForm({
    images: []
  });

  const { images } = formValue;

  const uploadFile = async () => {
    if (images.length === 0) {
      return;
    }

    try {
      const resp = await api.uploadImages({ images });
      console.log(resp);
      handleInputReset();
      refFile.current.value = '';
    } catch (error) {

    }
  }

  const handleButtonUpload = () => {
    refFile.current.click();
  }

  React.useEffect(() => {
    uploadFile();
  }, [images])

  return (
    <div className="h-screen flex">
      <NavBar />
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
