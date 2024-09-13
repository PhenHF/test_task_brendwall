# Тестовое задание на должность Python Developer

Для запуска потребуется python версии 3.10 или выше.
 1) Клонируйте репозиторий `git clone git@github.com:PhenHF/test_task_brendwall.git` затем перейдите в папку проекта `cd test_task_brenwall`
 2) Создайте виртуальное окружение командой Linux - `python3 -m venv venv`, для Windows - `python -m venv venv`
 3) Далее активируйте его командой Linux - `source venv/bin/activate`, Windows `venv/Scripts/activate`
 4) Далее установите зависимости `pip install -r requirements.txt`
 5) Перейдите в папку "test_task_brenwall" командой `cd test_task_brendwall`
 6) Теперь к настройкам Django. Командой `python3 manage.py makemigrations` создайте миграции, после комадной `python3 manage.py migrate` примените их. Для Windows тоже самое, но без версии Python.
 7) Готово! Командой `python3 manage.py runserver` запустите тестовый сервер и перейдите по адрессу `localhost:8000`
