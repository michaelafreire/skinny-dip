import React, { useState } from 'react';

function ProductCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="rounded relative h-96 w-auto bg-gray flex flex-col items-center justify-center">
      <img
        src={isHovered ? props.hoverSrc : props.src}
        alt={props.alt}
        className="object-contain w-full h-3/4 transition duration-500 transform"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <p className="font-text text-blue mt-4">{props.name}</p>
      <p className="font-text text-blue mb-4"> <span className="line-through mx-2">s/.300</span> <span className="text-orange font-bold">s/.150</span></p>
    </div>
  )
}

export default ProductCard
