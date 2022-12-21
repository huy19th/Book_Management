import express from 'express';
import multer from 'multer';
import registerController from '../controllers/register.controller';
import checkIfEmailExists from '../middlewares/checkIfEmailExists';

let upload = multer();
let router = express.Router();

router.get("/", registerController.showFormRegister);
router.post('/', upload.none(), checkIfEmailExists, registerController.register);

export default router;