import { useState } from 'react';
import './App.css'
import { slots, randomSymbol, winnings} from './slotMachine';


const App = () => {
const [symbol1, setSymbol1] = useState(randomSymbol())
const [symbol2, setSymbol2] = useState(randomSymbol())
const [symbol3, setSymbol3] = useState(randomSymbol())
const [total, setTotal] = useState(0)
const [dollar, setDollar] = useState(0)



const spin = () => {
  let s1 = (randomSymbol())
  let s2 = (randomSymbol())
  let s3 = (randomSymbol())
  let d = winnings(s1,s2,s3)
  setDollar(d)
  setTotal(total + dollar)
  setSymbol1(s1)
  setSymbol2(s2)
  setSymbol3(s3)
}
  return (
    <main>
      {/* Starter Code provided by teacher 
          -- you can remove this once you've updated this file
       */}
      
      <h1>BWOONO's & LOOSHIN's great gambling machine that does not take money (yet).</h1>
     <button onClick={spin}>Spiny</button>
     <div>{symbol1}</div>
     <div>{symbol2}</div>
     <div>{symbol3}</div>
     <div>{total}</div>
    </main>
  )
}

export default App;