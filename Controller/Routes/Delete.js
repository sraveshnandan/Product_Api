const router = require('express').Router();
const product = require('../../models/product');
// Deleting product
router.delete('/product/', async (req, res) => {
    try {
      const data = await product.findByIdAndDelete(req.query);
      if (!data) {
        return res.status(404).json({
          success: false,
          message: "Product not found with given id."
        });
      }
      res.status(200).json({
        success: true,
        message: "Product Deleted Successfully"
      });
    } catch (err) {
      console.error('Error deleting product:', err.message);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
module.exports= router;