let tg = window.Telegram.WebApp; //получаем объект webapp телеграма

tg.expand(); //расширяем на все окно

tg.MainButton.text = "Changed Text"; //изменяем текст кнопки
tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({ color: "#143F6B" }); //так изменяются все параметры
tg.enableClosingConfirmation();

let usercard = document.getElementById("usercard");
usercard.localStorage.getItem("usercard"); //получаем блок usercard

let profName = document.createElement("p"); //создаем параграф
profName.innerText = ${tg.initDataUnsafe.user.username}; //выдем username
usercard.appendChild(profName); 
usercard.localStorage.setItem("usercard"); //добавляем
