import { Router } from 'express';
import { createActivity } from '../controllers/activity.controller';

const router = Router();

router.post('/events', createActivity);


export default router;