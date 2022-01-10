import { Router } from 'express';
import homeController from '../controllers/HomeController';
import userController from '../controllers/UserController';
import loginController from '../controllers/LoginController';
import typeAccountController from '../controllers/TypeAccountController';
import AccountUserController from '../controllers/AccountUserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

/** Create token */
router.post('/login', loginController.store);

router.post('/user', userController.store);

/** Middleware */
// router.use(loginRequired);

router.get('/home', homeController.index);
router.post('/home', homeController.store);

router.get('/user', userController.index);
router.get('/user/:id', userController.show);
router.put('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

/** Types accounts */
router.get('/types-count', typeAccountController.index);
router.post('/types-count', typeAccountController.store);

router.get('/account-user', AccountUserController.index);
router.post('/account-user', AccountUserController.store);
router.get('/account-user/:id', AccountUserController.show);
router.delete('/account-user/:id', AccountUserController.delete);
router.put('/account-user/:id', AccountUserController.update);

export default router;
