import { useState } from 'react';
import './App.css'
import { slots, randomSymbol, winnings} from './slotMachine';


const App = () => {
const [symbol1, setSymbol1] = useState(randomSymbol())
const [symbol2, setSymbol2] = useState(randomSymbol())
const [symbol3, setSymbol3] = useState(randomSymbol())
const [total, setTotal] = useState(1000)
const [dollar, setDollar] = useState(0)


const spin = () => {
  let s1 = (randomSymbol())
  let s2 = (randomSymbol())
  let s3 = (randomSymbol())
  let d = winnings(s1,s2,s3)
  setDollar(d)
  setTotal(total - 50 + dollar)
  setSymbol1(s1)
  setSymbol2(s2)
  setSymbol3(s3)
}

if (total <= 0){
  setTotal(1000)
}
  return (
    <main>
      {/* Starter Code provided by teacher 
          -- you can remove this once you've updated this file
       */}
      
      <h1>Welcome to our slot machine that doesn't take real money. Click spiny to spin, doent lose all your money.</h1>
     <button onClick={spin}>Spin, -$50</button><br></br>
     <div class ="symbolz">
      <div class ="sym">{symbol1}</div>
      <div class ="sym">{symbol2}</div>
      <div class ="sym">{symbol3}</div>
     </div>
     <div>you got ${dollar}</div>
     <div>${total + dollar}</div>
    </main>
  )
}

export default App;