import { Router } from 'express';
import { createActivity, getEvents } from '../controllers/activity.controller';

const router = Router();

router.post('/events', createActivity);
router.get('/events', getEvents)

export default router;