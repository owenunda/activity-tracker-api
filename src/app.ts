import express, { type Application } from "express";


const app: Application = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({status: 'ok'});
});


export default app;