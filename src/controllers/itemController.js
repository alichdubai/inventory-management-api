// src/controllers/itemController.js
const itemService = require('../services/itemService');

class ItemController {
    async createItem(req, res) {
        try {
            const item = await itemService.createItem(req.body);
            res.status(201).json(item);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getItems(req, res) {
        try {
            const items = await itemService.getItems();
            res.status(200).json(items);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getItemById(req, res) {
        try {
            const item = await itemService.getItemById(req.params.id);
            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.status(200).json(item);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateItem(req, res) {
        try {
            const item = await itemService.updateItem(req.params.id, req.body);
            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.status(200).json(item);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteItem(req, res) {
        try {
            const item = await itemService.deleteItem(req.params.id);
            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.status(204).json();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new ItemController();
