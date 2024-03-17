import { Router } from 'express'//Router from 'express'

const router = Router()
import creatinguserconteoller from '../controllers/authcontrollers.js'


router.get('/signup', creatinguserconteoller.register_get)

router.post('/signup', creatinguserconteoller.register)

router.get('/login', creatinguserconteoller.login_get)

router.post('/login', creatinguserconteoller.login)


export default router
