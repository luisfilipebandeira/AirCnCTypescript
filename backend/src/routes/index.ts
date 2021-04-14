import {Router} from 'express'

import userRouter from './user.routes'
import spotRouter from './spot.routes'
import dashboardRouter from './dashboard.routes'
import bookingRouter from './booking.routes'

const routes = Router()

routes.use('/users', userRouter)
routes.use('/dashboard', dashboardRouter)
routes.use('/spots', spotRouter)

routes.use('/spots/bookings', bookingRouter)

export default routes