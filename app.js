let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

let tg = window.Telegram.WebApp.expand() //расширяем на все окно  

   tg.MainButton.text = "Changed Text"; //изменяем текст кнопки 
   tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
   tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
   tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
   tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры

   let btn = document.getElementById("btn"); //получаем кнопку скрыть/показать 

   btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
      if (tg.MainButton.isVisible){ //если кнопка показана 
         tg.MainButton.hide() //скрываем кнопку 
      }
      else{ //иначе
         tg.MainButton.show() //показываем 
      }
   });

   let btnED = document.getElementById("btnED"); //получаем кнопку активировать/деактивировать
   btnED.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
      if (tg.MainButton.isActive){ //если кнопка показана 
         tg.MainButton.setParams({"color": "#E0FFFF"}); //меняем цвет
         tg.MainButton.disable() //скрываем кнопку 
      }
      else{ //иначе
         tg.MainButton.setParams({"color": "#143F6B"}); //меняем цвет
         tg.MainButton.enable() //показываем 
      }
   });

   Telegram.WebApp.onEvent('mainButtonClicked', function(){
      tg.sendData("some string that we need to send"); 
      //при клике на основную кнопку отправляем данные в строковом виде
   });


   let usercard = document.getElementById("usercard"); //получаем блок usercard 

   let profName = document.createElement('p'); //создаем параграф
   profName.innerText = `${tg.initDataUnsafe.user.username}`;
   //выдем username
   usercard.appendChild(profName); //добавляем 

   let userpic = document.createElement('img'); //создаем еще параграф 
   userpic.scr = `${tg.initDataUnsafe.user.photo_url}`; //показываем user_id
   usercard.appendChild(userpic); //добавляем


   //работает только в attachment menu
   // let pic = document.createElement('img'); //создаем img
   // pic.src = tg.initDataUnsafe.user.photo_url; //задаём src 
   // usercard.appendChild(pic); //добавляем элемент в карточку 
