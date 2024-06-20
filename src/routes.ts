import { Router } from 'express'
import { CreateOrphanageController } from './controllers/CreateOrphanageController'

const routes = Router()

routes.post('/create-orphanage',
    new CreateOrphanageController().handle
)

export { routes }