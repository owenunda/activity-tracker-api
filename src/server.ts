import app from './app'
import { env } from './config/env';


const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
  console.log(`Server running on http://localhost:${PORT}`);
});