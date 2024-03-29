const express = require('express')
const router= express.Router()


router.get('/',(req,res)=>{
    res.send('All Shelters')
})
router.get('/:id',(req,res)=>{
    res.send('Viewing a shelter')
})
router.get('/:id/edit',(req,res)=>{
    res.send('Editing one Shelter')
})

module.exports = router