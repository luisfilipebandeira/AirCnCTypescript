import { request, response, Router } from 'express'
import { getRepository } from 'typeorm'
import Spots from '../models/Spot'

const userRouter = Router()

userRouter.get('/', async (request, response) =>{
    const {user_id} = request.headers
    const spotRepository = getRepository(Spots)
    
    const spots = await spotRepository.find({
        where: [{
            user_id: user_id
        }]
    })

    const serializedItems = spots.map(item =>{
        return{
            id: item.id,
            thumbnail: `http://localhost:3333/uploads/${item.thumbnail}`,
            company: item.company,
            price: item.price,
            techs: item.techs,
            user_id: item.user_id,
        }
    })

    return response.json(serializedItems)    
})

export default userRouter