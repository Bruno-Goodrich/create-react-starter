export let slots = ["seven",
"cherries", "cherries", "cherries", 
"bannana", "bannana", "bannana", "bannana", "bannana", "bannana", 
"plum", "plum", "plum", "plum", "plum", "plum",
 "lemon", "lemon", "lemon", "lemon", "lemon", 
 "watermelon", "watermelon", "watermelon", "watermelon", "watermelon",
  "bell", "bell", "bell", "bell", 
  "orange","orange", "orange", "orange", "orange", "orange", 
  "bars", "bars"];

export const randomize = () =>{
  let randomInt = Math.floor(Math.random() * slots.length)
  let randomized = slots[randomInt]
  return randomized
}

const getValueOfSymbol = (symbol) =>{
  let value = 0
  if(symbol == "seven"){
    value = 100
  }
  else if(symbol == "cherries"){
    value = 80
  }
  else if(symbol == "bannana"){
    value = 50
  }
  else if(symbol == "plum"){
    value = 50
  }
  else if(symbol == "lemon"){
    value = 60
  }
  else if(symbol == "watermelon"){
    value = 60
  }
  else if(symbol == "bell"){
    value = 70
  }
  else if(symbol == "orange"){
    value = 50
  }
  else if(symbol == "bars"){
    value = 90
  }
  return value
}

export const winnings = (symbol1, symbol2, symbol3) =>{ 
  let money = 0
  if(symbol1 === symbol2 &&  symbol2 === symbol3){
    money = getValueOfSymbol(symbol1) * 3
  }
  else{
    if(symbol1 == symbol2){
      money = getValueOfSymbol(symbol1) + getValueOfSymbol(symbol2)
    }
    else if(symbol1 == symbol3){
      money = getValueOfSymbol(symbol1) + getValueOfSymbol(symbol3)
    }
    else if(symbol3 == symbol2){
      money = getValueOfSymbol(symbol3) + getValueOfSymbol(symbol2)
    }
    else {
      money = money
    }
  }
  
  return money
}
