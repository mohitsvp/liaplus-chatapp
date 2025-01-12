import "reflect-metadata";
import app from "./app";
import { port } from "./config";
import connect from "./database";


app.listen(port, () => {
    connect();
    console.log(`Server listening on port: ${port}`)
})