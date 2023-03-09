import { Router } from 'express';
import LoginValidation from '../middlerares/loginValidation';

const usersRouter = Router();

const { validateEmail, validatePassword } = new LoginValidation();

usersRouter.post('/', validateEmail, validatePassword);

export default usersRouter;
