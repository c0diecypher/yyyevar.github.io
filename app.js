let tg = window.Telegram.WebApp;

tg.expand()
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "2cab37";

let item = "";

let bt1 = document.getElementById("btn1")
let bt1 = document.getElementById("btn2")
let bt1 = document.getElementById("btn3")
let bt1 = document.getElementById("btn4")
let bt1 = document.getElementById("btn5")
let bt1 = document.getElementById("btn6")

btn1.addEventListener("click", function(){
  if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
  }
  else {
    tg.MainButton.setText("Выбрано")
    item = "1";
    tg.MainButton.show();
  }
});

btn2.addEventListener("click", function(){
  if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
  }
  else {
    tg.MainButton.setText("Выбрано")
    item = "2";
    tg.MainButton.show();
  }
});

btn3.addEventListener("click", function(){
  if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
  }
  else {
    tg.MainButton.setText("Выбрано")
    item = "3";
    tg.MainButton.show();
  }
});

btn4.addEventListener("click", function(){
  if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
  }
  else {
    tg.MainButton.setText("Выбрано")
    item = "4";
    tg.MainButton.show();
  }
});

btn5.addEventListener("click", function(){
  if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
  }
  else {
    tg.MainButton.setText("Выбрано")
    item = "5";
    tg.MainButton.show();
  }
});

btn6.addEventListener("click", function(){
  if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
  }
  else {
    tg.MainButton.setText("Выбрано")
    item = "6";
    tg.MainButton.show();
  }
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
  tg.sendData(item);
});

let usercard = document.getElementById("usercard");
let p = document.createElement("p");
p.innerText = '${tg.initDataUnsafe.first_name}'
${tg.initDataUnsafe.user.id}

usercard.appendChild(p);
