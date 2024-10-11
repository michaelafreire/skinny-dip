import React from 'react'

function Image(props) {
  return (
    <div
      className="rounded relative h-52 w-auto bg-gray flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${props.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
  </div>
  )
}

export default Image
