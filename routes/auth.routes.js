import {Router} from 'express';
const router = Router();
import { User } from '../models/User';
import bcrypt from 'bcryptjs';
import { check, validationResult } from 'express-validator';

// данный запрос будет конкатенироваться с /api/auth и получится /api/auth/register
// между названием роута /register - и функцией - мы можем вставить мидлвары
router.post(
  '/register',
  [
    check('email', 'Некорректный email').isEmail(),  // isEmail - это встроенный метод валидатора, который защищает от ввода некорректных данных почты
    check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6}),  // isLength - проверка длины
  ],
  async (req, res) => {
  try {
    const errors = validationResult(req);  // таким образом мы подключаем валидацию

    if (!errors.isEmpty()) {  // проверяем ли есть что в массиве ошибок
      return res.status(400).json({  // возвращаем статус 400 - ошибка
        errors: errors.array(),  // массив ошибок
        message: 'Некорректные данные при регистрации'  // сообщение об ошибке
      })
    }

    const {email, password} = req.body;

    const candidate = await User.findOne({email: email}); // проверяем есть ли пользователь с таким email в базе данных

    if (candidate) {
      return res.status(400).json({message: 'Пользователь с таким email уже существует'});  // return в начале используем для того чтобы скрипт остановился. 
    }

    const hashedPassword = await bcrypt.hash(password, 12); // хэшируем пароль, 12 - так называемый salt, нужный для добавления сложности хэшированию. Операция асинхронная.

    const user = new User({
      email,
      password: hashedPassword,
    });

    await user.save();
    // 201 - статус для случаев, когда что то создаётся
    res.status(201).json({message: 'Пользователь успешно зарегистрирован'});


  } catch (error) {
    res.status(500).json({message: 'Регистрация пользователя не удалась'})
  }

});

router.post('/login', (req, res) => {

});

export default router;