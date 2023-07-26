const router = require('express').Router();
const product = require('../../models/product');
// Read product
router.get('/products', async (req, res) => {
    try {
      const data = await product.find();
      res.status(200).json({
        success: true,
        data
      });
    } catch (err) {
      console.error('Error retrieving products:', err.message);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
  module.exports= router;