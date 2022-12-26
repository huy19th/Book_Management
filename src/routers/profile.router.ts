import express from 'express';
import userController from '../controllers/profile.controller';
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.get('/', userController.showInfo);
router.post('/', upload.none(), userController.saveInfo);
router.get('/confirm-current-password/:currentPassword', userController.confirmCurrentPassword);
router.get('/change-password', userController.showFormChangePassword);
router.post('/change-password', upload.none(), userController.savePassword);
router.get('/logout', userController.logout);


export default router;