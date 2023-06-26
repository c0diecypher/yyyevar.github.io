from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.web_app_info import WebAppInfo

bot = Bot('tokenapi')
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    markup = types.ReplyKeyboardMarkup()
    markup.add(types.KeyboardButton('Открыть Каталог', web_app=WebAppInfo(url='https://yyyevar.github.io/')))
    await message.answer('Здравствуйте, откройте каталог, чтобы посмотреть товар в наличии', reply_markup=markup)

executor.start_polling(dp)
