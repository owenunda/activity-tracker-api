import app from './app'
import { connectDB } from './config/db';
import { env } from './config/env';


const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};


startServer();