import { Router } from 'express';
import multer from 'multer';
import bookController from '../controllers/book.controller';
import checkAuthorization from '../middlewares/checkAuthorization';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/public/img/book')
    },
    filename: function (req, file, cb) {
        let reg = /png|jpg|jpeg|svg/;
        let type = file.mimetype.match(reg);
        let filename = `${file.fieldname}-${Date.now()}.${type}`;
        cb(null, filename);
    }
})

const upload = multer({ storage: storage })

const router = Router();

router.get('/add', checkAuthorization, bookController.showFormAddBook);

router.post('/add', upload.single('image'), bookController.addBook);

router.get('/', bookController.showList);

router.post('/update/:id', upload.single('image'), bookController.updateBook);

router.get('/detail/:id', bookController.showBookDetail);

router.get('/delete/:id', bookController.deleteBook);


export default router;