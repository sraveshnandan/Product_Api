const router = require('express').Router();
const product = require('../../models/product');
// Updating data
router.put('/product/:id', async (req, res) => {
    try {
      const data = await product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useFindAndModify: false,
        runValidators: true
      });
      if (!data) {
        return res.status(404).json({
          success: false,
          message: "Product not found."
        });
      }
      res.status(200).json({
        success: true,
        message: "Product modified successfully.",
        response: data
      });
    } catch (err) {
      console.error('Error updating product:', err.message);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
module.exports= router;