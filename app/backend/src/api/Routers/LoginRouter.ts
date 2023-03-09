import { Router } from 'express';
import LoginController from '../Controller/LoginController';
import LoginValidation from '../middlewares/loginValidation';
import LoginService from '../Service/LoginService';

const loginRouter = Router();

const { validateEmail, validatePassword } = new LoginValidation();
const loginService = new LoginService();
const loginController = new LoginController(loginService);

loginRouter.post('/', validateEmail, validatePassword, loginController.checkLogin);

export default loginRouter;
