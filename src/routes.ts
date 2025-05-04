import { Router, Request, Response } from 'express'
import { FillController } from './service/controllers/FillController'

const router = Router();
router 
    .post('/fill', (req: Request, res: Response) => {
        FillController.fillTemplate(req, res);
    })
    .post('/format', (req: Request, res: Response) => {
        FillController.genContent(req, res);
    })

export default router