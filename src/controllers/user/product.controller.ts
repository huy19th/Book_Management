import Book from "../../models/book.model";
import Author from "../../models/author.model";
import Publisher from "../../models/publisher.model";
import Category from "../../models/category.model";
import multer from 'multer';
const upload = multer();


class Product {
    async showProductList(req, res, next) {
        try{
            const size = 9;
            const total = await Book.count();
            const numberOfPage = Math.ceil(total / size);
            const page = +req.query.page || 1;
            let products = await Book.find().skip((page - 1) * 10).limit(size);
            res.render('user/book/shop',{data:{products,pagination:{total, numberOfPage, page}}});
        } catch(err){
            res.render(err);
        }
    }

    async showProductDetails(req, res, next) {
        try{
            const product = await Book.findOne({_id: req.params.id}).populate('publisher').populate('author')
                .populate('category');
            console.log(product);
            res.render('user/book/product-details',{data:product});
        } catch(err) {
            console.log(err);
            res.render(err)
        }
    }
    async search(req,res,next){
        try {
            console.log(3)
            let products = await Book.find({
                name: {$regex: req.query.keyword, $options: 'i'}
            });
            console.log(products)
            res.status(200).json(products)
        } catch (e) {
            res.json({
                'error': e.message
            })
        }
    }

}
export default Product;