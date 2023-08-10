let tg = window.Telegram.WebApp; //получаем объект webapp телеграма
window.Telegram.WebAppUser;
tg.expand(); //расширяем на все окно
tg.ready() // метод позволяет отследить, когда приложение готово к отображению.
tg.MainButton.text = "Changed Text"; //изменяем текст кнопки
tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({ color: "#143F6B" }); //так изменяются все параметры
tg.enableClosingConfirmation();


let usercard = document.getElementById("usercard"); //получаем блок usercard

let profName = document.createElement("p"); //создаем параграф
profName.innerText = `${tg.initDataUnsafe.user.username}`; //выдем username
usercard.appendChild(profName); //добавляем

let userphoto = document.getElementById("userphoto"); //получаем блок usercard
let pic = document.createElement('img'); //создаем img
pic.src = ${tg.initDataUnsafe.user.photo_url}; //задаём src 
userphoto.appendChild(pic); //добавляем элемент в карточку 
