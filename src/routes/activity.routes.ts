import { Router } from 'express';
import { createActivity, getEvents, getEventsStats } from '../controllers/activity.controller';

const router = Router();

router.post('/events', createActivity);
router.get('/events', getEvents)
router.get('/events/stast', getEventsStats)
export default router;