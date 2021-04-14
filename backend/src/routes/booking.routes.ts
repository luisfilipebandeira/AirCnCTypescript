import { request, response, Router } from 'express'
import { getRepository } from 'typeorm'
import Booking from '../models/Booking'
import BookingService from '../services/BookingService'

const bookingRouter = Router()

bookingRouter.post('/', async(request, response) =>{
    const {user_id} = request.headers
    const {spot_id} = request.headers
    const {date} = request.body

    console.log(typeof(spot_id))
    console.log(user_id)
    console.log(date)

    const createBooking = new BookingService()

    const booking = await createBooking.execute({
        user_id: user_id,
        spot_id: spot_id,
        date
    })

    return response.json(booking)
})

export default bookingRouter