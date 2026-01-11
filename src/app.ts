import express, { type Application } from "express";
import activityRoutes from "./routes/activity.routes"


const app: Application = express();

app.use(express.json());

// rutas
app.use('/api/v1', activityRoutes)

app.get('/health', (_, res) => {
  res.json({status: 'ok'});
});


export default app;