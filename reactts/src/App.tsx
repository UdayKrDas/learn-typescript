import React from 'react'
import "./App.css"
import { ChaiCard } from './components/ChaiCard.tsx'
import { Counter } from './components/Counter.tsx'
import type { Chai } from './types.ts'
import { ChaiList } from './components/ChaiList.tsx'


const menu: Chai[] = [
  {id: 1, name:"Masala", price: 30},
  {id: 2, name:"Ginger", price: 20},
  {id: 3, name:"Normal", price: 10},
]


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
      <div><Counter/></div>
      <div>
        <ChaiList items={menu}/>
      </div>
    </div>
  )
}

export default App