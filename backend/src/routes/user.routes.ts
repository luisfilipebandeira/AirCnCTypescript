import { request, response, Router } from 'express'
import UserService from '../services/UserService'

const userRouter = Router()

userRouter.get('/', async (request, response) =>{
    return response.json({message: "Rota get aqui"})
})

userRouter.post('/', async(request, response) =>{
    const { email } = request.body

    const createUser = new UserService()

    const user =  await createUser.execute({
        email
    })

    return response.json(user)
})

export default userRouter