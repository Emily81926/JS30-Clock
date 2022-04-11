const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')
//讓三個指針轉動
function rotate(element){
  element.style.transform = "rotate(180deg)"
}

rotate(hourHand)