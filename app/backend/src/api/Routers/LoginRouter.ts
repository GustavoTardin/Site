import { Router } from 'express';
import LoginController from '../Controller/LoginController';
import LoginValidation from '../middlewares/Validation';
import LoginService from '../Service/LoginService';

const loginRouter = Router();

const { validateEmail, validatePassword, validateToken } = new LoginValidation();
const loginService = new LoginService();
const loginController = new LoginController(loginService);

loginRouter.post('/', validateEmail, validatePassword, loginController.checkLogin);
loginRouter.get('/role', validateToken, loginController.getRole);

export default loginRouter;
