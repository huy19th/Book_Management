import { Router } from 'express';
import DashboardController from "../../controllers/user/dashboard.controller";
import multer from "multer";
const userRouter = Router();

const dashboardController = new DashboardController();
userRouter.get('/dashboard',dashboardController.showDashBoard);

export default userRouter;