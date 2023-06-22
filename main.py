from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.web_app_info import WebAppInfo
from telegrambot import token


bot = token
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
  markup = types.ReplyKeyboardMarkup()
  markup.add(types.KeyboardButton('text', web_app=WebAppInfo(url='site')))
  await message.answer('otvet', replay_markup=markup)

executor.start_polling(dp)
