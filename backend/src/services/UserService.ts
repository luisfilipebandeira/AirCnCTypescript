import {getCustomRepository} from 'typeorm'
import Users from '../models/Users'
import UserRepository from '../repositories/UserRepository'

interface Request{
    email: string
}

class UserService{
    public async execute({email}: Request): Promise<Users>{
        const userRepository = getCustomRepository(UserRepository)

        let user = await userRepository.findByEmail(email)

        if(!user){
             user = await userRepository.create({
                email
            })
            await userRepository.save(user)
        }

        return (user)
    }
}

export default UserService