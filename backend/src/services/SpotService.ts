import {getRepository} from 'typeorm'
import Spot from '../models/Spot'

interface Request{
    thumbnail: string,
    company: string,
    price: number,
    techs: string,
    user: string
}

interface FindByTech{
    techs: any 
}

class SpotService{
    public async execute({thumbnail, company, price, techs, user}: Request): Promise<Spot>{
        const spotRepository = getRepository(Spot)

        const spot = await spotRepository.create({
            thumbnail,
            company,
            price,
            techs,
            user_id: user
        })

        await spotRepository.save(spot)

        return spot
    }

    public async findByTech({techs}: FindByTech): Promise<any>{
        const spotRepository = getRepository(Spot)

        console.log(techs)

        const spot = await spotRepository.find({
            where:  {techs}
        })

        return spot
    }
}

export default SpotService