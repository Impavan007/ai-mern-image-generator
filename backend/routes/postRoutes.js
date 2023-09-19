import express from 'express';
import * as dotenv from 'dotenv';
import {v2 as cloudinary, v2} from 'cloudinary';
import Post  from "../mongodb/models/post.js"

dotenv.config()


          
cloudinary.config({ 
  cloud_name: process.env.cloud_name, 
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});



const router = express.Router();
router.route('/').post(async(req,res)=>{
   try {
    const {name,photo,prompt} = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo)
    const newPost = await Post.create({
        name,
        prompt,
        photo:photoUrl.url,
       
    })
    res.status(200).json({data:newPost,success:true})
   } catch (error) {
    res.status(500).json({success:false,message:error})
    console.log(error)
   }
})
router.route('/').get(async(req,res)=>{
    try {
        const allPost = await Post.find({})
        res.status(200).json({success:true,data:allPost})
    } catch (error) {
        res.status(500).json({success:false,message:error})
        console.log(error)

    }
})
export default router