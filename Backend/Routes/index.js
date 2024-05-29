import express from 'express';

import UserRoutes from './UserRoutes.js';

const router = express.Router();

router.use("/Userroutes", UserRoutes)

export default router;