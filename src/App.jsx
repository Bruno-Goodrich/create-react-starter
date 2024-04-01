import { useState } from 'react';
import './App.css'
import { slots, randomSymbol} from './slotMachine';


const App = () => {
const [symbol1, setSymbol1] = useState(randomSymbol())

const spin = () => {
  setSymbol1(randomSymbol())
}

  return (
    <main>
      {/* Starter Code provided by teacher 
          -- you can remove this once you've updated this file
       */}
      Hello World
      <h1>BWOONO & LOOSHIN</h1>
     <button onClick={spin}>Spiny</button>
     <div>{symbol1}</div>
    </main>
  )
}

export default App;