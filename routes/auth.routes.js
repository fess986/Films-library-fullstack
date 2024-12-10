import {Router} from 'express';
const router = Router();
import bcrypt from 'bcryptjs';
import config from 'config';
import jwt from 'jsonwebtoken';
import { check, validationResult } from 'express-validator';
import { ApiRoutes } from '../const/const.js';

import { User } from '../models/User.js';

// данный запрос будет конкатенироваться с /api/auth и получится /api/auth/register
// между названием роута /register - и функцией - мы можем вставить мидлвары
router.post(
  ApiRoutes.REGISTER,
  [
    check('email', 'Некорректный email').isEmail(),  // isEmail - это встроенный метод валидатора, который защищает от ввода некорректных данных почты
    check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6}),  // isLength - проверка длины
  ],
  async (req, res) => {
  try {
    console.log('register');
    console.log('req.body', req.body);
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
    console.log(error);
    res.status(500).json({message: 'Регистрация пользователя не удалась'})
  }

});

router.post(ApiRoutes.LOGIN,
  [
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),  // нормализация email 
    check('password', 'Введите пароль').exists()  // проверка на существование
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);  
  
      if (!errors.isEmpty()) {  
        return res.status(400).json({  
          errors: errors.array(),  
          message: 'Некорректные данные при авторизации'  
        })
      }
  
      const {email, password} = req.body;

      const user = await User.findOne({email});  // ищем пользователя в базе по email
  
      if (!user) {  // если нет такого email - выходим
        return res.status(400).json({message: 'Пользователь с таким email не найден'});
      }
  
      const isMatch =  await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({message: 'Неверный пароль для данного пользователя'});
      }

      const token = jwt.sign({userId: user.id}, config.get('jwtToken'), {expiresIn: '1h'});  // создаем токен
  
      res.json({token, userId: user.id});  // отправляем токен на клиент
  
    } catch (error) {
      console.log(error);
      res.status(500).json({message: 'Авторизация пользователя не удалась'})
    }

});

export default router;