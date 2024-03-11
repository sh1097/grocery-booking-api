import express from 'express';
import adminController from '../controllers';

const router = express.Router();

router.post('/grocery-items', adminController.addGroceryItem);

export default router;
