import orderController from "../../controllers/admin/order.controller";
import express from 'express';

let router = express.Router();

router.get('/', orderController.showOrderList);

export default router;
