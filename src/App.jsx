import { useState } from 'react';
import './App.css'
import { slots, randomize, winnings} from './slotMachine';

const Strip = ({symbol}) => {
    let symIndex = slots.indexOf(symbol)
    let offset = -1 * symIndex * 100

    const getColor = (s) =>{
      if (s == 'bannana')return "yellowgreen"
      if (s =='lemon')return "yellow"
      if (s == 'watermelon')return "hotpink"
      if (s == 'bars')return "white"
      if (s == 'seven')return "red"
      if (s == 'orange')return "orange"
      if (s == 'cherries')return "crimson"
      if (s == 'bell')return "darkgodlenrod"
      if (s == 'plum')return "purple"
    }

  return (
    <section class="slot-col">
        <div class="strip"
        style={{top: offset}}>
          {slots.map(
            (s)=>(<div className="slot-item"
                style={{
                  borderColor : getColor(s)
                }}
            >{s}</div>)
          )}
          </div>
      </section>
  )
}

const App = () => {
const [symbol1, setSymbol1] = useState(randomize())
const [symbol2, setSymbol2] = useState(randomize())
const [symbol3, setSymbol3] = useState(randomize())
const [total, setTotal] = useState(1000)
const [dollar, setDollar] = useState(0)


const spin = () => {
  let s1 = (randomize())
  let s2 = (randomize())
  let s3 = (randomize())
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
const getOffset = (symbol) =>{
  let symIndex = slots.indexOf(symbol)
  let offset = -1 * symIndex * 100
  return offset
}
  return (
    <main>
      <h1>Welcome to our slot machine that doesn't take real money. Click spin to spin, doesn't lose all your money.</h1>
     <button onClick={spin}>Spin, -$50</button><br/>
     <div class ="symbolz">

      <Strip symbol={symbol1}/>
      <Strip symbol={symbol2}/>
      <Strip symbol={symbol3}/>


     </div>
     <div>you got ${dollar}</div>
     <div>${total + dollar}</div>
     
    </main>
  )
}

export default App;