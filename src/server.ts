import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';

const app: express.Application = express();
const port = 3000;
const address = '0.0.0.0:3000';
const corsOptions = {
  origin: 'http://localhost:3000',
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/api', cors(corsOptions), routes);

app.listen(port, () => {
  console.log(`starting app on: ${address}`);
  console.log(`Starting server at http://localhost:${port}`);
});
