const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');



router.post('/',async (req,res)=>{
    try{
    const ndata = req.body
    const menu = new MenuItem(ndata); // Capital 'MenuItem'
  
    const responses = await menu.save();
    console.log('data saveds');
    res.status(200).json(responses);
  
  
  
  
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'internal server error'});
      
    }
  
    
  
  
  
  
  })
  router.get('/',async (req, res) =>{
    try{
      const data = await MenuItem.find();
      console.log('data fetch');
      res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'internal server error'});
  
    }
})

router.put('/:id',async (req,res)=>{
    try{
        const menuId=req.params.id;
        const upadteMenu = req.body;

        const response = await MenuItem.findByIdAndUpdate(menuId,upadteMenu, {
            new:true,
            runValidation: true,
        }) 
        if (!response) {
            return res.status(404).json({ error: 'Person not found'
            });
            }
            

        console.log('data  updated');
        res.status(200).json(response);
        
    }catch(err){
        console.log(err);
      res.status(500).json({error: 'internal server error'});
  
    }
})

module.exports = router;