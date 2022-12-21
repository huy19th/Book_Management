import express from 'express';
import multer from 'multer';
import passport from '../middlewares/passport';
import authController from '../controllers/auth.controller';

let upload = multer();
let router = express.Router();

router.get("/", authController.showFormLogIn);
router.post('/', upload.none(), authController.authenticate);
router.get('/google', authController.showFormLogInGoogle);


router.get("/google/callback", passport.authenticate('google'), (req, res) => {
    res.send("You are authenticated")
});

export default router;