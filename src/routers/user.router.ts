import express from 'express';
import userController from '../controllers/user.controller';
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.get('/change-info', userController.showInfo);
router.post('/change-info', upload.none(), userController.saveInfo);
router.get('/change-password', userController.showFormChangePassword);
router.post('/change-password', userController.savePassword);
router.get('/logout', userController.logout);


export default router;