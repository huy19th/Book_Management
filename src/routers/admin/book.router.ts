import { Router } from 'express';
import multer from 'multer';
import bookController from '../../controllers/admin/book.controller';
import checkAuthorization from '../../middlewares/checkAuthorization';
import validateBookProperties from '../../middlewares/validateBookProperties';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/sharing/img/book')
    },
    filename: function (req, file, cb) {
        let reg = /png|jpg|jpeg|svg|webp/;
        let type = file.mimetype.match(reg);
        let filename = `${file.fieldname}-${Date.now()}.${type}`;
        cb(null, filename);
    }
})


const upload = multer({ storage: storage })

const router = Router();

router.get('/add', checkAuthorization, bookController.showFormAddBook);

router.post('/add', upload.single('image'), validateBookProperties, bookController.saveBook);

router.get('/:page', bookController.showList);

router.post('/detail/:id', upload.single('image'), validateBookProperties, bookController.saveBook);

router.get('/detail/:id', bookController.showBookDetail);

router.get('/delete/:id', bookController.deleteBook);

router.get('/search/filter', bookController.search);

export default router;