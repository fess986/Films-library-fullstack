import jwt from 'jsonwebtoken'
import config from 'config'

export default (req, res, next) => {
  // console.log('req.headers - ', req.headers)
  // если запрос OPTIONS - пропускаем проверку
  if (req.method === 'OPTIONS') {
    return next()
  }
  try {
    const token = req?.headers?.authorization?.split(' ')[1] // токен будет храниться в хедере в виде "Bearer token_value"

    if (!token) {
      return res.status(401).json({ message: 'Вы не авторизованы!' })
    }

    // получаем закодированное значение {userId: 'id'}
    const decoded = jwt.verify(token, config.get('jwtToken'))
    req.user = decoded // записываем в объект запроса req.user {userId: 'id'}
    // console.log(req.user)
    next() // продолжаем скрипт
  } catch (e) {
    console.log(e)

    if (e.name === 'TokenExpiredError') {
      return res
        .status(401)
        .json({
          message:
            'Срок действия токена истёк. Пожалуйста, авторизуйтесь заново.',
        })
    }

    return res.status(401).json({ message: 'ошибка авторизации пользователя' })
  }
}
