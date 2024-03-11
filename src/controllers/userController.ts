import { Request, Response } from 'express';
import knex from '../database';

export const createOrder = async (req: Request, res: Response) => {
    const { userId, items } = req.body;

    try {
        
        for (const item of items) {
            await knex('orders').insert({
                user_id: userId,
                item_id: item.itemId,
                quantity: item.quantity
            });
        }
        res.status(201).json({ message: 'Order created successfully' });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Failed to create order' });
    }
};

async function getAvailableGroceryItems(req: Request, res: Response) {
    try {
        // Query the database to fetch available grocery items
        const groceryItems = await knex('grocery_items').select('*');
        
        // Send the response with the fetched grocery items
        res.json(groceryItems);
    } catch (error) {
        // Handle errors
        console.error('Error fetching available grocery items:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export { getAvailableGroceryItems };

