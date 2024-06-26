import { Router } from 'express'
import { CreateOrphanageController } from './controllers/CreateOrphanageController'
import { validateData } from './middlewares/ValidateData'
import { CreateImagesController } from './controllers/CreateImagesController'
import multer from 'multer'
import multerConfig from './config/multerConfig'
import { GetOrphanageController } from './controllers/GetOrphanagesController'
import { GetOrphanageCompleteController } from './controllers/GetOrphanageCompleteController'
import { validateAdmin } from './middlewares/ValidateAdmin'
import { CreateAdminController } from './controllers/CreateAdminController'
import { uploadImagesMiddleware } from './middlewares/UploadImagesMiddleware'
const routes = Router()

const upload = multer(multerConfig);

//rotas post
routes.post('/v1/create-orphanage',
    upload.array('image'),
    validateData,
    new CreateOrphanageController().handle,
    uploadImagesMiddleware,
    new CreateImagesController().handle
)

//rotas get
routes.get('/v1/get-orphanages',
    new GetOrphanageController().handle
)

routes.get('/v1/get-orphanage/:id',
    new GetOrphanageCompleteController().handle,
)

//rotas admin
routes.post('/v1/create-admin',
    validateAdmin,
    new CreateAdminController().handle
)
export { routes }