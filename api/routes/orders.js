const express = require('express');
const router = express.Router();
const morgan = require('morgan');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'orders were fetched'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'orders were created',
        order: order
    });
});

router.get('/:orderId', (req, res, next) =>{
    const id = req.params.orderId;
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

router.patch('/:orderId', (req, res, next) =>{
   // const id = req.params.productId;
        res.status(201).json({
            message : 'order updated',
        });
    

});

router.delete('/:orderId', (req, res, next) =>{
    // const id = req.params.productId;
         res.status(201).json({
             message : 'order deleted',
         });
     
 
 });

module.exports = router;