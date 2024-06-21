import { Router } from 'express'
import { CreateOrphanageController } from './controllers/CreateOrphanageController'
import { validateData } from './middlewares/ValidateData'
import { CreateImagesController } from './controllers/CreateImagesController'
import multer from 'multer'
import multerConfig from './config/multerConfig'
const routes = Router()

const upload = multer(multerConfig);
routes.post('/create-orphanage',
    upload.array('image'),
    validateData,
    new CreateOrphanageController().handle,
    new CreateImagesController().handle
)

export { routes }