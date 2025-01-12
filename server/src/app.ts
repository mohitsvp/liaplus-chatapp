import express, {Request, Response} from 'express';
import cors from 'cors';
import { corsUrl, environment } from './config';
import routes from "./routes";

const app = express();

app.use(express.json({limit: '10mb'}));
app.use(cors({origin: corsUrl, optionsSuccessStatus: 200}));

app.use("/api", routes);

app.use((req: Request, res:Response) => {
    try {
        res.status(200).send({health : 'isOk'});
    } catch (error: any) {
        console.log(`Error in health check ${error.message}`);
    }
})

export default app;
