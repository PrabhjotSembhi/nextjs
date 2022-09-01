import dbConnect from '../../../db/dbconnect'

import Hero from '../../../models/Hero'

dbConnect();

export default async (req, res) => {
    const {method} = req

    switch (method) {
        case 'GET':
            try{
               const heros = await Hero.find({})
               res.status(200).json({success:true, hero: heros})
            }catch{
                res.status(400).json({success:false})
            }
            break;

            
        case 'GET':
            try{
                const hero = await Hero.create(req.body)
                res.status(200).json({success:true, hero: hero})
            }catch{
                res.status(400).json({success:false})
            }
            break;
       

    
        default:
            res.status(400).json({success:false})

            break;
    }
}