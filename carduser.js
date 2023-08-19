let tg = window.Telegram.WebApp; //получаем объект webapp телеграма

tg.expand(); //расширяем на все окно

tg.MainButton.text = "Купить"; //изменяем текст кнопки
tg.MainButton.setText("Купить"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#ffffff"; //изменяем цвет текста кнопки
tg.MainButton.color = "#00BA78"; //изменяем цвет бэкграунда кнопки
tg.MainButton.setParams({ color: "#143F6B" }); //так изменяются все параметры
tg.enableClosingConfirmation();

let btn = document.getElementById("btn"); //получаем кнопку скрыть/показать 

 btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
  if (tg.MainButton.isVisible){ //если кнопка показана 
   tg.MainButton.hide() //скрываем кнопку 
  }
  else{ //иначе
   tg.MainButton.show() //показываем 
       }
    });

let usercard = document.getElementById("usercard"); //получаем блок usercard

let profName = document.createElement("p"); //создаем параграф
profName.innerText = `${tg.initDataUnsafe.user.first_name}`; //выдем username
usercard.appendChild(profName); //добавляем

let pic = document.getElementById('userphoto').setAttribute('src', tg.initDataUnsafe.user.photo_url);
pic.src = tg.initDataUnsafe.user.photo_url;
userphoto.appendChild(pic);

tg.getUserProfilePhotos();

 window.Telegram.WebApp.ready();
