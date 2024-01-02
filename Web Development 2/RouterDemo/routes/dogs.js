const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('All Dogs')
})
router.get('/show',(req,res)=>{
    res.send('DOGS PAGE')
})
router.get('/edit',(req,res)=>{
    res.send('EDITING DOGS PAGE')
})
router.get('/:id',(req,res)=>{
    res.send(`${req.params.id} dog`)
})
module.exports = router