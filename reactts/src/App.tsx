import React from 'react'
import "./App.css"
import { ChaiCard } from './components/ChaiCard.tsx'

const App = () => {
  return (
    <div>
      <div>
        <h1>Hi</h1>
        <ChaiCard name="Headphones" price={5000} isSpecial = {false}
        />
        <ChaiCard name="iPhone" price={10000} isSpecial = {true}
        />
      </div>
    </div>
  )
}

export default App