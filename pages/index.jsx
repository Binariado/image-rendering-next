import React from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'


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
            <div id={`page-${idx}`} key={`page-${item.name}-${idx}`} className="conte-page flex justify-center">
              <div className={`aspect-w-16 aspect-h-10 mb-2.5 page bg-white shadow  ${styles.page}`}>
                <div className="flex justify-center items-center">
                  <img  
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
