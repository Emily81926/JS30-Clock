const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')

//取得現在時間
const Now = new Date()
const currentHour = Now.getHours()
const currentMin = Now.getMinutes()
const currentSecond = Now.getSeconds()

//設定時、分、秒的移動角度
const hourRotateDeg = (currentHour / 12) * 360
const minRotateDeg = (currentMin / 60) * 360
const secondRotateDeg = (currentSecond / 60) * 360

//讓三個指針轉動
function rotate(element, degree) {
  element.style.transform = `rotate(${degree + 90}deg)`
  //因為0 degree實際指在9點鐘方向，故➕90度 讓指針從0點開始
}

rotate(hourHand, hourRotateDeg)
rotate(minHand, minRotateDeg)
rotate(secondHand, secondRotateDeg)







