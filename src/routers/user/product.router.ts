import { Router } from 'express';
import Product from "../../controllers/user/product.controller";
import multer from "multer";
const userProductRouter = Router();

const product = new Product();
userProductRouter.get('/products',product.showProductList);
userProductRouter.get('/productDetails',product.showProductDetails);
userProductRouter.get('/search',product.search);
export default userProductRouter;



