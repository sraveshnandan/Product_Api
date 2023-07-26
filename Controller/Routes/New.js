const router = require('express').Router();
const product = require('../../models/product');

// Creating new product
router.post('/product/new', async (req, res) => {
    try {
      const data = await product.create(req.body);
      res.status(201).json({
        success: true,
        message: 'Product created successfully!',
        data
      });
    } catch (err) {
      console.error('Error creating product:', err.message);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });

  module.exports= router;