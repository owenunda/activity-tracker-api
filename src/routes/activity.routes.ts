import { Router } from 'express';
import { createActivity } from '../controllers/activity.controller';

const router = Router();

router.post('/', createActivity);


export default router;