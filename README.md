Видео - https://www.youtube.com/watch?v=ff3BAEbt8N0

Первый проект на node.js (если не считать коды в 5 строк, которые писались при обучении)

Проект запускается на http://localhost:5000 , набросал простенькую страничку главную сайта. Юзер не авторизован, это видно по активным кнопкам авторизации и регистрации.
Юзер может авторизоваться/зарегестрировать новый профиль воспользовавшись кнопками (http://localhost:5000/login + http://localhost:5000/register). Для авторизации пароль юзера должен совпадать с тем, что хранится на сервере (вместо базы данных константа "dataBase" + естественно нет никакой валидации данных). Список юзеров - тут http://localhost:5000/users
По дефолту в списке юзеров есть admin. Если пароль ввести не верно - откроется немного другой штмл документ, где указывается что данные не верно введены

максимально простой, кривой, но зато первый проект (если это чудо можно так назвать)
