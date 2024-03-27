export let slots = ["seven", "cherries", "cherries", "cherries", "bannana", "bannana", "bannana", "bannana", "bannana", "bannana", "plum", "plum", "plum", "plum", "plum", "plum", "lemon", "lemon", "lemon", "lemon", "lemon", "watermelon", "watermelon", "watermelon", "watermelon", "watermelon", "bell", "bell", "bell", "bell", "orange", "orange", "orange", "orange", "orange", "orange", "bars", "bars"];

export let randomSym = slots[0]

export const spin = () =>{
  let randomInt= Math.floor(Math.random()*slots.length)
  return slots[randomInt]
}


