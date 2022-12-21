import express from 'express';
import multer from 'multer';
import registerController from '../controllers/register.controller';
<<<<<<< HEAD
import checkIfEmailExist from '../middlewares/checkIfEmalExists';
=======
import checkIfEmailExists from '../middlewares/checkIfEmailExists';
>>>>>>> 4297fc14139cd6d2c6a138122657c908441e7e90

let upload = multer();
let router = express.Router();

router.get("/", registerController.showFormRegister);
<<<<<<< HEAD
router.post('/', upload.none(), checkIfEmailExist, registerController.register);

=======
router.post('/', upload.none(), checkIfEmailExists, registerController.register);
>>>>>>> 4297fc14139cd6d2c6a138122657c908441e7e90

export default router;