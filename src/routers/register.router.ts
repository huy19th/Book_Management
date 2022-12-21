import express from 'express';
import multer from 'multer';
import registerController from '../controllers/register.controller';
import checkIfEmailExist from '../middlewares/checkIfEmalExists';

let upload = multer();
let router = express.Router();

router.get("/", registerController.showFormRegister);
router.post('/', upload.none(), checkIfEmailExist, registerController.register);


export default router;