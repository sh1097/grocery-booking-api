import express from 'express';
import { getAvailableGroceryItems } from '../controllers/userController';

const router = express.Router();

router.get('/available-grocery-items', async (req: Request, res: Response) => {
    try {
        const availableItems = await getAvailableGroceryItems();
        return res.status(200).json({ success: true, data: availableItems });
    } catch (error) {
        console.error('Error fetching available grocery items:', error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
    }
});


router.post('/orders', async (req: Request, res: Response) => {
    try {
        // Assuming the request body contains the necessary information for creating the order
        const newOrder = await createOrder(req.body);
        return res.status(201).json({ success: true, data: newOrder });
    } catch (error) {
        console.error('Error creating new order:', error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
    }
});


export { router as userRoutes };
