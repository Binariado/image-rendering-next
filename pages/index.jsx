import React from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'

const ORIENTATION = {
  "1": "vertical",
  "8": "horizontal",
  "3": "vertical",
  "6": "horizontal",
}

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
              <div className={`aspect-w-16 aspect-h-10 mb-2.5 bg-white shadow relative ${styles[`page-${ORIENTATION[item.orientation]}`]}`}>
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
