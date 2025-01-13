import express, { Request, Response} from 'express';
import cors from 'cors';
import routes from "./routes";
import cookieParser from "cookie-parser";
import path from "path";
import { environment } from './config';


const app = express();
const __dirName = path.resolve();

app.use(express.json({limit: '10mb'}));


app.use(
  cors({
      origin: "http://localhost:5173",
      credentials: true,
  })
);

app.use(cookieParser());

app.use("/api", routes);

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send({ health: 'isOk' });
});

if (environment === 'production') {
  app.use(express.static(path.join(__dirName, '../../client/dist')));

  app.get("*", (req: Request, res:Response) => {
    res.sendFile(path.join(__dirName, "../../client", "dist", "index.html"))
  })
}


export default app;
