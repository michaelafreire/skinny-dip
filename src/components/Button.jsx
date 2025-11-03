import React from 'react'

function Button() {
  return (
    <div>
      <a href="https://api.whatsapp.com/send?phone=+51993523236&text=Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20bikinis" target="_blank" rel="noopener noreferrer">
        <button className="sm:text-xl text-lg bg-orange hover:bg-white hover:text-orange text-white font-text py-2 px-10 rounded transition duration-500 ease-out">
          Comprar ahora
        </button>
      </a>
    </div>
  )
}

export default Button
