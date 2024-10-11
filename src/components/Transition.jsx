import React from 'react'
import Button from './Button'
import Image from './Image'

function Transition() {
  return (
    <div className="container mx-auto px-4 mt-8 sm:mt-16">
      <div className="flex items-center justify-center">
        <p className="sm:text-2xl text-xl mb-8 sm:mb-16 font-text text-blue">¡No dejes que el sol te atrape sin un buen bikini!</p>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        <Image src={`${import.meta.env.BASE_URL}look-and-feel-I.png`} alt="Chica en la playa con bikini celeste"/>
        <Image src={`${import.meta.env.BASE_URL}look-and-feel-II.png`} alt="Chica en la playa con bikini amarillo"/>
        <Image src={`${import.meta.env.BASE_URL}look-and-feel-IV.png`} alt="Chica en la playa con bikini blanco"/>
        <Image src={`${import.meta.env.BASE_URL}look-and-feel-III.png`} alt="Chica en la playa con bikini amarillo"/>
      </div>
      <div className="my-16 sm:my-16 flex justify-center items-center">
        <Button />
      </div>
    </div>
  )
}

export default Transition
