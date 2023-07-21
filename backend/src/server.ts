import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './handlers/user';
const app: Express = express();
const PORT = 3000;

const corsOptions = {
  origin: 'http://localhost:3001', // Add domain name of the client
  optionsSucessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/', function (req: Request, res: Response) {
  res.send('Welcome to EmpowerHer!');
});


userRoutes(app);


app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
