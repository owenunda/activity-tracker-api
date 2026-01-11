import express, { type Application } from "express";
import cors from "cors";
import activityRoutes from "./routes/activity.routes"


const app: Application = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

// rutas
app.use('/api/v1', activityRoutes)

app.get('/health', (_, res) => {
  res.json({status: 'ok'});
});


export default app;