import { useState } from 'react'

import './App.css'
import { Navbar } from './components/layout/navbar/Navbar'
import { ItemListContainer } from './components/pages/itemList/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <ItemListContainer/>
    </>
  )
}

export default App
