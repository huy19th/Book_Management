import orderController from "../../controllers/admin/order.controller";
import express from 'express';

let router = express.Router();

router.get('/:page', orderController.showOrderList);

router.get('/detail/:id', orderController.showOrderDetail);

router.get('/on-delivery/:page', orderController.showOrdersOnDelivery);

router.get('/completed/:page', orderController.showOrdersCompleted);

router.get('/delete', orderController.delete);

router.get('/search/filter', orderController.search);

export default router;
