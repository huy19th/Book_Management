import { Router } from 'express';
import CartController from "../../controllers/user/cart.controller";
const cartRouter = Router();

const cartController = new CartController();
cartRouter.get('/getCart',cartController.getCart);
cartRouter.post('/addToCart',cartController.addToCart);

export default cartRouter;