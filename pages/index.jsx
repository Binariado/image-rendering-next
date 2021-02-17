import React from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'

const ORIENTATION = {
  "1": "transform rotate-0",
  "8": "transform rotate-90",
  "3": "transform rotate-180",
  "6": "transform -rotate-90",
}
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
const urlImageBase = 'https://res.cloudinary.com/dfcqfoabr/image/upload';
const verion = 'v1613592899';

export default function Home() {
  const images = useSelector(state => state.images);
  const { imagesAll } = images;
  console.log(imagesAll)
  return (
    <div className="h-screen flex">
      <NavBar />
      <div className="h-full flex-1 container px-4 overflow-x-auto bg-gray-100">
        <div className="grid-flow-row auto-rows-max pt-3.5 pb-10 w-full">

          {imagesAll.map((item, idx) => (
            <div id={`page-${idx + 1}`} key={`page-${item.name}-${idx}`} className="conte-page flex justify-center">
              <div className={`aspect-w-16 aspect-h-10 mb-2.5 ${ORIENTATION[item.orientation]} page bg-white shadow relative ${styles.page}`}>
                <div className="absolute h-20 z-10 top-0 flex justify-start">
                  <div className="flex flex-col justify-center p-4">
                    <span>
                      <span>Orientación: </span>{item.orientation}
                    </span>
                    <span>
                      <span>width: </span>{item.width}
                    </span>
                    <span>
                      <span>height: </span>{item.height}
                    </span>
                  </div>
                  <span className="flex-grow absolute right-0 p-1">{idx + 1}</span>
                </div>
                <div className="flex justify-center items-center">
                  <img className=""
                    src={`${urlImageBase}/w_${item.width},h_${item.height}/${verion}/${item.public_id}.${item.format}`} />
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
