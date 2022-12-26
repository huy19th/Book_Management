import express from 'express';
import profileController from '../controllers/profile.controller';
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.get('/', profileController.showInfo);
router.post('/', upload.none(), profileController.saveInfo);
router.get('/confirm-current-password/:currentPassword', profileController.confirmCurrentPassword);
router.get('/change-password', profileController.showFormChangePassword);
router.post('/change-password', upload.none(), profileController.savePassword);
router.get('/logout', profileController.logout);


export default router;