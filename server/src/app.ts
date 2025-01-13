import express, { Request, Response} from 'express';
import cors from 'cors';
import routes from "./routes";
import cookieParser from "cookie-parser";


const app = express();

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


export default app;
