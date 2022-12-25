import express from 'express';
import multer from 'multer';
import registerController from '../controllers/register.controller';
import validateRegisterInput from '../middlewares/validateRegisterInput';

let upload = multer();
let router = express.Router();

router.get("/", registerController.showFormRegister);
router.post('/', upload.none(), validateRegisterInput, registerController.register);

export default router;