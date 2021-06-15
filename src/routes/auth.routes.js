import {Router} from 'express';
const router = Router();

import * as authController from '../controllers/usersController'



router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn)

export default router;