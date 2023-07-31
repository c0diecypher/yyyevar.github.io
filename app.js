let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

   tg.expand(); //расширяем на все окно  

   tg.MainButton.text = "Changed Text"; //изменяем текст кнопки 
   tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
   tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
   tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
   tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры
   tg.enableClosingConfirmation(); 
      
   let btn = document.getElementById("btn").onclick = function() {
  window.location.href = 'new.html' //получаем кнопку скрыть/показать 

   btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
      if (tg.BackButton.isVisible){  //если кнопка показана 
         tg.BackButton.hide() //скрываем кнопку
      }
      else{ //иначе
         tg.BackButton.show() //показываем 
      }
   });

   // backbutton.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
    //  if (tg.MainButton.isVisible){ //если кнопка показана 
    //     tg.MainButton.hide() //скрываем кнопку 
    //  }
    //  else{ //иначе
    //     tg.MainButton.show() //показываем 
   //   }
  //  });

   let usercard = document.getElementById("usercard"); //получаем блок usercard 

   let profName = document.createElement('p'); //создаем параграф
   profName.innerText = `${tg.initDataUnsafe.user.username}`;
   //выдем username
   usercard.appendChild(profName); //добавляем 


   //работает только в attachment menu
   // let pic = document.createElement('img'); //создаем img
   // pic.src = tg.initDataUnsafe.user.photo_url; //задаём src 
   // usercard.appendChild(pic); //добавляем элемент в карточку 
