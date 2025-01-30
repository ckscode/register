import express from 'express'
import { getCurrentUser, Login, Register } from '../Controllers/userController.js';
import { protect } from '../Middlewares/AuthMiddleware.js';

const router = express.Router();

router.post('/user/register',Register)
router.post('/user/login',Login)
router.get('/user/get-current-user',protect,getCurrentUser)




export default router;