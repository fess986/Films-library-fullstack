import {Router} from 'express';
const router = Router();

// данный запрос будет конкатенироваться с /api/auth и получится /api/auth/register
router.post('/register', async (req, res) => {

});

router.post('/login', (req, res) => {

});

export default router;