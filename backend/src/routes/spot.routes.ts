import { request, response, Router } from 'express'
import SpotService from '../services/SpotService'

import multer from 'multer'

import uploadConfig from '../config/upload'
import { getRepository } from 'typeorm'
import Spots from '../models/Spot'

const userRouter = Router()


userRouter.get('/', async (request, response) =>{
    const {techs} = request.query

    const listSpot = new SpotService()

    const spot = await listSpot.findByTech({techs})

    const serializedItems = spot.map((item: { id: any; thumbnail: any; company: any; price: any; techs: any; user_id: any }) =>{
        return{
            id: item.id,
            thumbnail: `http://10.0.2.2:3333/uploads/${item.thumbnail}`,
            company: item.company,
            price: item.price,
            techs: item.techs,
            user_id: item.user_id,
        }
    })

    return response.json(serializedItems)    
})

userRouter.post('/', uploadConfig.single('thumbnail'),async(request, response) =>{
    const {company, price, techs} = request.body
    const {filename} = request.file
    const {user_id} = request.headers

    const createSpot = new SpotService()

    const spot = await createSpot.execute({
        thumbnail: filename,
        company,
        price,
        user: user_id,
        techs
    })

    return response.json(spot)
})

export default userRouter