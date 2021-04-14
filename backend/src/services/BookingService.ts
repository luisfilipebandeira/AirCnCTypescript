import {getRepository} from 'typeorm'
import Booking from '../models/Booking'
import Users from '../models/Users'
import UserRepository from '../repositories/UserRepository'

interface Request{
    user_id: string 
    spot_id: string 
    date: string
}

class BookingService{
    public async execute({user_id, spot_id, date}: Request): Promise<Booking>{
        const userRepository = getRepository(Booking)

        console.log(user_id)
        console.log(spot_id)
        console.log(date)
        
        const booking = await userRepository.create({
            user_id,
            spot_id,
            date
        })

        await userRepository.save(booking)

        return (booking)
    }
}

export default BookingService