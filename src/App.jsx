import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'
import Products from './components/Products'
import Introduction from './components/Introduction'
import Transition from './components/Transition'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Introduction/>
      <Products/>
      <Transition/>
      <Footer/>
    </>
  )
}

export default App
