const router = require('express').Router()

const {
    getProducts,
    getProduct,
    createProducts,
    updateProducts,
    deleteProducts
  } = require('./../controllers/controll-products')

router.get('/tables', getProducts)

router.post('/addProduct', createProducts)



module.exports = router