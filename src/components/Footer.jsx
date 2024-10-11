import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
      <footer className="bg-gray mt-32 h-40 sm:h-52 flex items-end pb-6">
        <div className="container mx-auto px-4 flex">
          <div className="relative">
            <p className="font-text text-blue">Skinny Dip</p>
            <p className="font-text text-blue">Pico Alto, Punta Hermosa</p>
          </div>
          <div className="ml-auto">
            <div className="flex">
              <a href="https://www.instagram.com/skinny_dip.pe/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="m-2 text-2xl text-blue"/>
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
