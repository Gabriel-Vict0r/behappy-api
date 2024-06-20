import { Router } from 'express'
import { CreateOrphanageController } from './controllers/CreateOrphanageController'
import { validateData } from './middlewares/ValidateData'

const routes = Router()

routes.post('/create-orphanage',
    validateData,
    new CreateOrphanageController().handle
)

export { routes }