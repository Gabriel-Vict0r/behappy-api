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
import validateLogin from './middlewares/ValidateLogin'
import { AuthAdminController } from './controllers/AuthAdminController'
import { UpdateOrphanageController } from './controllers/UpdateOrphanageController'
import { AceptOrphanageController } from './controllers/AceptOrphanageController'
import { DisableOrphanageController } from './controllers/DisableOrphanageController'
import { GetPendingOrphanageController } from './controllers/GetPendingOrphanageController'
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

routes.get('/v1/get-pending',
    new GetPendingOrphanageController().handle
)

//rotas admin
routes.post('/v1/create-admin',
    validateAdmin,
    new CreateAdminController().handle
)
routes.post('/v1/login-admin',
    validateLogin,
    new AuthAdminController().handle
)

//route update
routes.put('/v1/update-orphanage/:id',
    validateData,
    new UpdateOrphanageController().handle
)

routes.patch('/v1/acept-orphanage/:id',
    new AceptOrphanageController().handle,
)
//route delete
routes.patch('/v1/disable-orphanage/:id',
    new DisableOrphanageController().handle
)
export { routes }