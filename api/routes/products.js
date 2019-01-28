const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling the GET request'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'Handling the POST request',
        createdProduct: product
    });
});

router.get('/:productId', (req, res, next) =>{
    const id = req.params.productId;
    if (id === 'gauni'){
        res.status(200).json({
            message : 'umepata gauni jipya',
            id : id
        });
    }else{
        res.status(200).json({
            message : 'umekosea njia'
        });
    }
});

router.patch('/:productId', (req, res, next) =>{
   // const id = req.params.productId;
        res.status(201).json({
            message : 'details updated',
        });
    

});

router.delete('/:productId', (req, res, next) =>{
    // const id = req.params.productId;
         res.status(201).json({
             message : 'details deleted',
         });
     
 
 });

module.exports = router;