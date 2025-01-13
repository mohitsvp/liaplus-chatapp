import "reflect-metadata";
import app from "./app";
import { port } from "./config";
import connect from "./database";
import { server } from "./lib/socket";


server.listen(port, () => {
    connect();
    console.log(`Server listening on port: ${port}`)
})