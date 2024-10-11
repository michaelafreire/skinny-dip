import React from 'react'
import Button from './Button'

function Introduction() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <img
        src={`${import.meta.env.BASE_URL}background-img.png`}
        alt="Chicas en la playa"
        className="absolute inset-0 w-full h-full object-cover sm:hidden"
      />
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover hidden sm:block"
      >
        <source src={`${import.meta.env.BASE_URL}video-loop.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex items-top justify-center">
        <img
          className ="w-auto h-48"
          src={`${import.meta.env.BASE_URL}logo blanco.png`}
          alt="Logo Skinny Dip"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-white">
        <h1 className="m-6 text-4xl sm:text-6xl font-text font-bold">Rebajas de Fin de Temporada</h1>
        <p className="sm:text-2xl text-xl m-6 font-text">¡Todas las bikinis con un 50% de descuento!</p>
        <div className="mt-4">
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Introduction
