import {Router} from 'express';
const router = Router();
import { User } from '../models/User';

// данный запрос будет конкатенироваться с /api/auth и получится /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const {email, password} = req.body;

    const candidate = await User.findOne({email: email}); // проверяем есть ли пользователь с таким email в базе данных

    if (candidate) {
      return res.status(400).json({message: 'Пользователь с таким email уже существует'});  // return в начале используем для того чтобы скрипт остановился. 
    }


  } catch (error) {
    res.status(500).json({message: 'Регистрация пользователя не удалась'})
  }

});

router.post('/login', (req, res) => {

});

export default router;