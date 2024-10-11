import React from 'react'
import ProductCard from './ProductCard'
import Button from './Button'

function Products() {
  return (
    <div className="container mx-auto px-4 mt-8 sm:mt-16">
      <div className="flex items-center justify-center">
        <div className="mb-8 sm:mb-16">
          <div className="flex items-center justify-center">
            <p className="sm:text-2xl text-xl font-text text-blue">Tus bikinis favoritos al 50% de descuento.</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="sm:text-2xl text-xl font-text text-blue"> No pierdas la oportunidad.</p>
          </div>
        </div>
      </div>
      <div className="mb-8 sm:mb-16 flex justify-center items-center">
        <Button />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ProductCard src={`${import.meta.env.BASE_URL}M1I.png`} hoverSrc={`${import.meta.env.BASE_URL}M1II.png`} alt="Bikini blanco" name="Luna Blanco"/>
        <ProductCard src={`${import.meta.env.BASE_URL}M2I.png`} hoverSrc={`${import.meta.env.BASE_URL}M2II.png`} alt="Bikini verde" name="Luna Verde"/>
        <ProductCard src={`${import.meta.env.BASE_URL}M3I.png`} hoverSrc={`${import.meta.env.BASE_URL}M3II.png`} alt="Bikini amarillo con flores" name="Pitas Amarillo"/>
        <ProductCard src={`${import.meta.env.BASE_URL}M4I.png`} hoverSrc={`${import.meta.env.BASE_URL}M4II.png`} alt="Bikini celeste con flores" name="Pitas Shells"/>
        <ProductCard src={`${import.meta.env.BASE_URL}M5I.png`} hoverSrc={`${import.meta.env.BASE_URL}M5II.png`} alt="Bikini con estampado de guepardo y flores" name="Colombia Animal Print"/>
        <ProductCard src={`${import.meta.env.BASE_URL}M6I.png`} hoverSrc={`${import.meta.env.BASE_URL}M6II.png`} alt="Bikini con estampado tropical" name="Colombia Flowers"/>
        <ProductCard src={`${import.meta.env.BASE_URL}M7I.png`} hoverSrc={`${import.meta.env.BASE_URL}M7II.png`} alt="Bikini con estampado tropical" name="Colombia Parrots"/>
        <ProductCard src={`${import.meta.env.BASE_URL}M8I.png`} hoverSrc={`${import.meta.env.BASE_URL}M8II.png`} alt="Bikini celeste" name="Pitas Turquesa"/>
        <ProductCard src={`${import.meta.env.BASE_URL}M9I.png`} hoverSrc={`${import.meta.env.BASE_URL}M9II.png`} alt="Bikini rojo" name="Luna Vino"/>
        <ProductCard src={`${import.meta.env.BASE_URL}M10I.png`} hoverSrc={`${import.meta.env.BASE_URL}M10II.png`} alt="Bikini verde con flores" name="Pitas Flowers"/>
        <ProductCard src={`${import.meta.env.BASE_URL}M11I.png`} hoverSrc={`${import.meta.env.BASE_URL}M11II.png`} alt="Ropa de baño rosada" name="Bathing Suit Rosado"/>
      </div>
      <div className="mt-8 sm:mt-16 flex justify-center items-center">
        <Button />
      </div>
    </div>
  )
}

export default Products
