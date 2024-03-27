import './App.css'
import { slots, spin, randomSym} from './slotMachine';


const App = () => {

  return (
    <main>
      {/* Starter Code provided by teacher 
          -- you can remove this once you've updated this file
       */}
      Hello World
      <h1>{slots[5]}</h1>
      <button onClick={spin}>Spin</button>
      <h1>{spin}</h1>
    </main>
  )
}

export default App;