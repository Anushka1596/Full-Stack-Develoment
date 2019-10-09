const express =require('express');
const router = express.Router()


//Handle incoming Requests
router.get('/', (req, res, next)=>{
  res.status(200).json({
    message:'Orders were fetched'
  })
})

router.post('/',(req, res, next)=>{
  res.status(201).json({
    message: 'Orders were  created'
  })
})
router.get('/:orderid', (req, res, next)=>{
    res.status(200).json({
      message: 'You Order ID details',
      orderId:req.params.orderid
    })
})
router.delete('/:orderid', (req, res, next)=>{
  res.status(200).json({
    message: 'You Order ID deleted',
    orderId:req.params.orderid
  })
})

module.exports = router;
