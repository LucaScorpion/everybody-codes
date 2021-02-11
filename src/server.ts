import express from 'express';
import { camerasFromCsv } from './camerasFromCsv';

const PORT = parseInt(process.env.PORT || '3000', 10);

async function bootstrap(): Promise<void> {
  // Load the data.
  const cameras = await camerasFromCsv();

  // Start the server.
  const app = express();
  app.get('/api/cameras', (req, res) => res.json(cameras));

  app.listen(PORT);
  console.log(`Server started on port ${PORT}`);
}

bootstrap().catch((err) => console.error(`Could not start server: ${err}`));
