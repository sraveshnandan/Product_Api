const router = require('express').Router();
const product = require('../../models/product');
//Api Filter Resquest Endpoint
router.get('/products/filter/', async (req, res) => {
    try {

        const data = req.query.by;
        if (data === 'name') {
            try {
                const name = await product.distinct('name');
                res.status(200).json({
                    count: name.length,
                    name: name
                })
            } catch (error) {
                res.status(501).json({
                    success:false,
                    message:"Internal Server Error!"
                })
            }
        }
        else if(data === 'category')
            {
                const category = await product.distinct('category');
                res.status(200).json({
                    count:category.length,
                    categories: category
                })
            }
        else if(data === 'price')
            {
                const category = await product.distinct('price');
                res.status(200).json({
                    count:category.length,
                    categories: category
                })
            }


    }
    catch (error) {
        res.status(502).json({
            success: false,
            message: `Internal Server Error! ${error}`
        })

    }
})
module.exports = router;