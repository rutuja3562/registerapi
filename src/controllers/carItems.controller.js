
const express = require("express")

const router = express.Router();


const CarItem = require("../models/carItems.model")

router.post("",  async (req, res) => {

    req.body.user_id = req.user._id;
    
    try{
        const item = await CarItem.create(req.body)
        return res.status(200).send(item)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
})

router.patch("/:id",async(req, res) => {
    try{
        const item = await CarItem.findByIdAndUpdate(req.params.id, req.body, {new:true})
        return res.status(200).send(item)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

router.get("", async (req, res) => {
    try{
        const item = await CarItem.find()
        return res.status(200).send(item)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

module.exports = router;