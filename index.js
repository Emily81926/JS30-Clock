const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')

//讓三個指針轉動
function rotate(element, degree) {
  element.style.transform = `rotate(${degree + 90}deg)`
  //因為0 degree實際指在9點鐘方向，故➕90度 讓指針從0點開始
}

function clockTicking() {
  //取得現在時間
  const Now = new Date()
  const currentHour = Now.getHours()
  const currentMin = Now.getMinutes()
  const currentSecond = Now.getSeconds()

  //設定時、分、秒的移動角度
  //時針要 （現在的時刻）＋（分針經過的時刻 12分 時針走一小格）
  //分針要 （現在的分鐘）＋（秒針經過的時刻 6秒 分針走一格）
  const hourRotateDeg = (currentHour / 12) * 360 + (currentMin / 60) * 30
  const minRotateDeg = (currentMin / 60) * 360 + (currentSecond / 60) * 6
  const secondRotateDeg = (currentSecond / 60) * 360

  rotate(hourHand, hourRotateDeg)
  rotate(minHand, minRotateDeg)
  rotate(secondHand, secondRotateDeg)
}

//讓時鐘可以每秒執行時鐘轉動的功能
setInterval(clockTicking, 1000)









