const express=require('express')
const ProductDetails=require('../controller/product.controller')
const router=express.Router()

router.post('/createproduct',ProductDetails.createProduct)
router.get('/viewproduct',ProductDetails.viewAllproducts)
router.get('/singleproduct/:id',ProductDetails.viewSingleProduct)
router.put('/editproduct/:id',ProductDetails.editProduct)
router.delete('/deleteproduct/:id',ProductDetails.deleteProduct)
module.exports=router