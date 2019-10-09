const express =require('express');
const router = express.Router()

router.get('/', (req, res, next)=>{
  res.status(200).json({
    message:'Handling GET Requests to /products'
  })
})

router.post('/',(req, res, next)=>{
  res.status(200).json({
    message: 'Handling post requests'
  })
})
router.get('/:id', (req, res, next)=>{
  const id =req.params.id;
  if(id == 'special'){
    res.status(200).json({
      message:'You discovered the Special ID'
    })
  }else{
  res.status(200).json({
    message: 'You passed some ID'
  })
  }

})
router.patch('/:id', (req, res, next)=>{
    res.status(200).json({
      message: 'Updated Product'
    })
})
router.delete('/:id', (req, res, next)=>{
  res.status(200).json({
    message: 'Product Deleted'
  })
})
module.exports = router;
